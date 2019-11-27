import * as React from "react";
import AppLayout from "./AppLayout/index";
import Customer from "./Customer/index";
import AddCustomer from "./Customer/addCustomer";
import PhoneBook from "./PhoneBook/index";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import "./App.css";
import { ICustomerDetails, IRoutes } from "../models/index";

export interface IProps extends RouteComponentProps<any> {}

export interface IState {
  customers: ICustomerDetails[];
  selectedCustomer: ICustomerDetails | null;
  isEdit: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      customers: [
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
      selectedCustomer: null,
      isEdit: false
    };
  }

  componentDidMount() {
    this.setState({
      isEdit: false,
      selectedCustomer: null
    });
  }

  addNewCustomer = (customer: ICustomerDetails) => {
    let customersState = [...this.state.customers];
    if (this.state.isEdit) {
      const index = customersState.findIndex(c => c.id === customer.id);
      customersState.splice(index, 1, customer);
    } else {
      customersState.push({ ...customer, id: Math.round(Math.random() * 100) });
    }
    this.setState({
      customers: customersState,
      selectedCustomer: null,
      isEdit: false
    });
  };

  deleteRow = (customer: ICustomerDetails) => {
    let customersState = [...this.state.customers];
    let index = customersState.findIndex(c => c.id === customer.id);
    customersState.splice(index, 1);

    this.setState({
      customers: customersState
    });
  };

  updateCustomer = (customer: ICustomerDetails) => {
    this.setState({
      selectedCustomer: customer,
      isEdit: true
    });
    this.props.history.push(IRoutes.ADD_CUTOMER);
  };

  render(): JSX.Element {
    const { isEdit, selectedCustomer } = this.state;
    return (
      <div className="conatiner">
        <div className="row">
          <div className="col-12">
            <AppLayout />
            <Route
              path={IRoutes.CUSTOMER}
              exact
              component={() => (
                <Customer
                  customerList={this.state.customers}
                  updateCustomer={this.updateCustomer}
                  deleteRow={this.deleteRow}
                />
              )}
            />
            <Route path="/phone" exact component={PhoneBook} />
            <Route
              path={IRoutes.ADD_CUTOMER}
              exact
              component={() => (
                <AddCustomer
                  {...this.props}
                  addNewCustomer={this.addNewCustomer}
                  selectedCustomer={selectedCustomer}
                  isEditing={isEdit}
                />
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
