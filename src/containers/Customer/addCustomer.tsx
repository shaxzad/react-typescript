import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { ICustomerDetails, IRoutes } from "../../models";

export interface IProps extends RouteComponentProps<any> {
  addNewCustomer: (customer: ICustomerDetails) => void;
  selectedCustomer: ICustomerDetails | null;
  isEditing: boolean;
}
export interface IState {
  customerDetails: ICustomerDetails;
}

class AddCustomer extends React.Component<IProps, IState> {
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
      }
    };
  }

  componentDidMount() {
    const { selectedCustomer, isEditing } = this.props;
    if (isEditing && selectedCustomer) {
      this.setState({
        customerDetails: selectedCustomer
      });
    }
  }

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
    this.props.addNewCustomer(this.state.customerDetails);
    this.props.history.push(IRoutes.CUSTOMER);
  };
  render(): JSX.Element {
    const { selectedCustomer, isEditing } = this.props;
    return (
      <div>
        <h1>
          {isEditing && selectedCustomer
            ? `Edit ${selectedCustomer["first_name"]}`
            : "Add new Customer"}
        </h1>
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
            <Button btnName="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddCustomer;
