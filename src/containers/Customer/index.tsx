import * as React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { ICustomerDetails } from "../../models";
import "./index.css";

export interface IProps {
  customerList: ICustomerDetails[];
  updateCustomer: (customer: ICustomerDetails) => void;
  deleteRow: (customer: ICustomerDetails) => void;
}
export interface IState {
  customerDetails: ICustomerDetails;
  openModal: boolean;
  isEditing: boolean;
}

class Customer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      customerDetails: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        description: ""
      },
      openModal: false,
      isEditing: false
    };
  }

  // deleteRow = (e: any, id: number) => {
  // const index = this.props.customerList.findIndex(
  //   customerList => customerList.id === id
  // );
  // let newCustomer = this.props.customerList;
  // newCustomer.splice(index, 1);
  // };

  // addRow = () => {
  // let addCustomer = this.state.customer;
  // if (this.state.isEditing && this.state.customerDetails.id) {
  //   const index = this.state.customer.findIndex(
  //     c => c.id === this.state.customerDetails.id
  //   );
  //   addCustomer.splice(index, 1, this.state.customerDetails);
  // } else {
  //   addCustomer.push({
  //     ...this.state.customerDetails,
  //     id: Math.round(Math.random() * 100)
  //   });
  // }
  // this.setState({
  //   customer: addCustomer,
  //   openModal: false,
  //   isEditing: false
  // });
  // };

  // updateRow = (e: any) => {
  // this.props.updateCustomer(this.state.customerDetails);
  // this.setState({
  //   customerDetails: customer,
  // openModal: true,
  // isEditing: true
  // });
  // };

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
    // this.addRow();
    this.setState({
      customerDetails: {
        id: undefined,
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
          <div className="col-6">
            <Input
              type="text"
              labelname="first name"
              placeholder="Enter your first name"
              onChange={this.handleChange}
              value={this.state.customerDetails.first_name as string}
              name="first_name"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="Last name"
              placeholder="Enter your Last name"
              onChange={this.handleChange}
              value={this.state.customerDetails.last_name as string}
              name="last_name"
            />
          </div>
          <div className="col-6">
            <Input
              type="email"
              labelname="Email"
              placeholder="Enter your email"
              onChange={this.handleChange}
              value={this.state.customerDetails.email as string}
              name="email"
            />
          </div>
          <div className="col-6">
            <Input
              type="number"
              labelname="Number"
              placeholder="Enter your Number"
              onChange={this.handleChange}
              value={this.state.customerDetails.phone as string}
              name={"phone"}
            />
          </div>
          <div className="col-12">
            <Input
              type="text"
              labelname="Address"
              placeholder="Enter your Address"
              onChange={this.handleChange}
              value={this.state.customerDetails.address as string}
              name="address"
            />
          </div>
          <div className="col-12">
            {this.state.isEditing ? (
              <Button btnName="Update" />
            ) : (
              <Button btnName="Create" />
            )}
          </div>
        </form>
      </div>
    );
  };

  renderModalFooter = (): JSX.Element => {
    return <div>Footer</div>;
  };

  render(): JSX.Element {
    const customerList = this.props.customerList;

    return (
      <div className="customer-form">
        <Button
          btnName="Add Customer"
          onClick={() => this.setState({ openModal: true })}
        />

        <Modal
          showModal={this.state.openModal}
          modalTitle={
            this.state.isEditing ? "Update Customer" : "Create customer"
          }
          modalBody={this.renderModalBody()}
          // modalFooter={this.renderModalFooter()}
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
                  <td onClick={() => this.props.deleteRow(value)}> X </td>
                  <td onClick={() => this.props.updateCustomer(value)}>
                    update
                  </td>
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
