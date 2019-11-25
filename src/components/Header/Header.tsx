import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div>
      <header className="header-top">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customer">Add customer</Link>
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
