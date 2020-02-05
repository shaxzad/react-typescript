import * as React from "react";
import AppLayout from "./AppLayout/index";
import Customer from "./Customer/index";
import AddCustomer from "./Customer/addCustomer";
import PhoneBook from "./PhoneBook/index";
import LifeCycle from "./lifecycle";
import Posts from "./Post/post";

import {
  Route,
  withRouter,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import "./App.css";
import { ICustomerDetails, IRoutes } from "../models/index";
import { Provider } from "react-redux";
import store from "../store";

export interface IProps extends RouteComponentProps<any> {}

export interface IState {
  customers: ICustomerDetails[];
  selectedCustomer: ICustomerDetails | null;
  isEdit: boolean;
  editColumn: boolean;
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
      isEdit: false,
      editColumn: false
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

  updateInput = (customer: ICustomerDetails) => {
    console.log("update input");
  };

  render(): JSX.Element {
    const { isEdit, selectedCustomer, editColumn } = this.state;
    return (
      <Provider store={store}>
        <div className="conatiner">
          <div className="row">
            <div className="col-12">
              <AppLayout />
              <Switch>
                <Route
                  path={IRoutes.CUSTOMER}
                  exact
                  component={() => (
                    <Customer
                      customerList={this.state.customers}
                      updateCustomer={this.updateCustomer}
                      deleteRow={this.deleteRow}
                      updateInput={this.updateInput}
                      // editColumn={this.editColumn}
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
                <Route path="/lifecycle" exact component={LifeCycle} />
                <Route path="/post" exact component={Posts} />
                <Route path="/" render={() => <div>404</div>} />
              </Switch>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
