import React from "react";
import AppLayout from "./AppLayout/index";
import Customer from "./Customer/index";

const App: React.FC = () => {
  return (
    <div>
      <AppLayout />
      <Customer />
    </div>
  );
};

export default App;
