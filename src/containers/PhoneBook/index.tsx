import * as React from "react";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { IPhoneBook } from "../../models";

export interface IProps {}
export interface IState {
  phone: IPhoneBook;
  isEditing: boolean;
  openModal: boolean;
  phoneDetails: IPhoneBook[];
}

class PhoneBook extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openModal: false,
      isEditing: false,
      phone: {
        first_name: "",
        last_name: "",
        company: "",
        title: "",
        mobile_num: 0,
        phone_num: 0
      },
      phoneDetails: [
        {
          id: 0,
          first_name: "shaxzad",
          last_name: "ali",
          company: "uc",
          title: "abc",
          mobile_num: 12345,
          phone_num: 54357
        },
        {
          id: 1,
          first_name: "shaxzad",
          last_name: "ali",
          company: "uc",
          title: "abc",
          mobile_num: 12345,
          phone_num: 54357
        }
      ]
    };
  }
  handleChange = (e: any) => {
    this.setState({
      phone: {
        ...this.state.phone,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.saveData();
  };
  saveData = () => {
    let saveData = this.state.phoneDetails;
    saveData.push(this.state.phone);

    this.setState({
      phoneDetails: saveData,
      openModal: false
    });
  };
  delete = () => {
    console.log("here");
  };
  update = () => {
    console.log("dfd");
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
              value={this.state.phone.first_name as string}
              name="first_name"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="Last name"
              placeholder="Enter your last name"
              onChange={this.handleChange}
              value={this.state.phone.last_name as string}
              name="last_name"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="Comapny"
              placeholder="Enter company Name"
              onChange={this.handleChange}
              value={this.state.phone.company as string}
              name="company"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="title"
              placeholder="Enter title"
              onChange={this.handleChange}
              value={this.state.phone.title as string}
              name="title"
            />
          </div>
          <div className="col-6">
            <Input
              type="number"
              labelname="phone No"
              placeholder="Enter phone"
              onChange={this.handleChange}
              value={this.state.phone.phone_num as number}
              name="phone_num"
            />
          </div>
          <div className="col-6">
            <Input
              type="number"
              labelname="Mobile no"
              placeholder="Enter Mobile no"
              onChange={this.handleChange}
              value={this.state.phone.mobile_num as number}
              name="mobile_num"
            />
          </div>
          <Button btnName="Save" />
        </form>
      </div>
    );
  };
  render(): JSX.Element {
    const PhoneBookList = this.state.phoneDetails;
    console.log(PhoneBookList);
    return (
      <div>
        <Button
          btnName="Add Number"
          onClick={() => this.setState({ openModal: true })}
        />
        <Modal
          showModal={this.state.openModal}
          modalTitle={"Phonebook"}
          modalBody={this.renderModalBody()}
          // modalFooter={this.renderModalFooter()}
          handleClose={() => this.setState({ openModal: false })}
        />
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>company</th>
              <th>title</th>
              <th>Phone</th>
              <th>Number</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {PhoneBookList.map((value, i) => {
              return (
                <tr>
                  <td> {value.id}</td>
                  <td> {value.first_name}</td>
                  <td> {value.last_name}</td>
                  <td> {value.company}</td>
                  <td> {value.title}</td>
                  <td> {value.phone_num}</td>
                  <td> {value.mobile_num}</td>
                  <td> {(onclick = () => this.delete())} X </td>
                  <td> {(onclick = () => this.update())} Update </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PhoneBook;
