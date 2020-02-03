import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IRoutes } from "../../models";

const Header: React.FC = () => {
  return (
    <div>
      <header className="header-top">
        <nav>
          <ul>
            <li>
              <Link to="lifecycle">Home</Link>
            </li>
            <li>
              <Link to={IRoutes.CUSTOMER}>customer</Link>
            </li>
            <li>
              <Link to={IRoutes.ADD_CUTOMER}>Add customer</Link>
            </li>
            <li>
              <Link to="/phone">Phone Book</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
