import React from "react";
import AppLayout from "./AppLayout/index";
import Customer from "./Customer/index";
import PhoneBook from "./PhoneBook/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-12">
          <Router>
            <AppLayout />
            <Route path="/customer" exact component={Customer} />
            <Route path="/phone" exact component={PhoneBook} />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
