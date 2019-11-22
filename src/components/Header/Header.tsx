import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div>
      <header className="header-top">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Customer</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
