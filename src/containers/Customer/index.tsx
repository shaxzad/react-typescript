import * as React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { ICustomerDetails } from "../../models";
import "./index.css";

export interface IProps {}
export interface IState {
  customerDetails: ICustomerDetails;
  openModal: boolean;
  customer: ICustomerDetails[];
  isEditing: boolean
}

class Customer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      customerDetails: {
        id: Math.floor(Math.random() * 100),
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        description: ""
      },
      openModal: false,
      customer: [
        {
          id: 0,
          first_name: "shaxzad",
          last_name: "ali",
          email: "some@gmil.com",
          number: "121342434",
          address: "asdfgjdhlshd"
        },
        {
          id: 1,
          first_name: "zafar",
          last_name: "ali",
          email: "some@gmil.com",
          number: "121342434",
          address: "asdfgjdhlshd"
        }
      ],
      isEditing: false
    };
  }

  deleteRow = (e: any, id: number) => {
    const index = this.state.customer.findIndex(customer => customer.id === id);
    let newCustomer = this.state.customer;
    newCustomer.splice(index, 1);
    this.setState({
      customer: newCustomer
    });
  };

  addRow = () => {
    let addCustomer = this.state.customer;
    if(this.state.isEditing){
      const index = this.state.customer.findIndex(c => c.id === this.state.customerDetails.id)
      addCustomer.splice(index, 1, this.state.customerDetails)
    }
    else {
      addCustomer.push(this.state.customerDetails);
    }
    this.setState({
      customer: addCustomer,
      openModal: false,
      isEditing: false
    });
  };

  updateRow = (customer: ICustomerDetails) => {
    this.setState({
      customerDetails: customer,
      openModal: true
    });
  };

  handleChange = (e: any) => {
    this.setState({
      customerDetails: {
        ...this.state.customerDetails,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.addRow();
    this.setState({
      customerDetails: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        description: ""
      }
    });
  };

  renderModalBody = (): JSX.Element => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            labelname="first name"
            placeholder="Enter your first name"
            onChange={this.handleChange}
            value={this.state.customerDetails.first_name as string}
            name="first_name"
          />
          <Input
            type="text"
            labelname="Last name"
            placeholder="Enter your Last name"
            onChange={this.handleChange}
            value={this.state.customerDetails.last_name as string}
            name="last_name"
          />
          <Input
            type="email"
            labelname="Email"
            placeholder="Enter your email"
            onChange={this.handleChange}
            value={this.state.customerDetails.email as string}
            name="email"
          />
          <Input
            type="number"
            labelname="Number"
            placeholder="Enter your Number"
            onChange={this.handleChange}
            value={this.state.customerDetails.phone as string}
            name={"phone"}
          />
          <Input
            type="text"
            labelname="Address"
            placeholder="Enter your Address"
            onChange={this.handleChange}
            value={this.state.customerDetails.address as string}
            name="address"
          />
          <Button />
        </form>
      </div>
    );
  };

  renderModalFooter = (): JSX.Element => {
    return <div>Modal Footer goes here</div>;
  };

  render(): JSX.Element {
    const customerList = this.state.customer;

    return (
      <div className="customer-form">
        <button onClick={() => this.setState({ openModal: true })}>
          Add Customer
        </button>

        <Modal
          showModal={this.state.openModal}
          modalTitle={"Custom Modal"}
          modalBody={this.renderModalBody()}
          modalFooter={this.renderModalFooter()}
          handleClose={() => this.setState({ openModal: false })}
        />

        {!customerList.length && (
          <div className="text-center">
            <h2>No customer found at the moment</h2>
          </div>
        )}
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((value, i) => {
              return (
                <tr>
                  <td> {value.id} </td>
                  <td> {value.first_name} </td>
                  <td> {value.last_name} </td>
                  <td> {value.email} </td>
                  <td> {value.number} </td>
                  <td> {value.address} </td>
                  <td onClick={() => this.deleteRow(value.id, i)}> X </td>
                  <td onClick={() => this.updateRow(value)}>update</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customer;
