import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IRoutes } from "../../models";

const Header: React.FC = () => {
  const [routes] = React.useState([
    {
      name: "Home",
      link: "lifecycle"
    },
    {
      name: "Post",
      link: IRoutes.POST
    },
    {
      name: "Todo",
      link: IRoutes.TODOS
    },
    {
      name: "cUSTOMER",
      link: IRoutes.CUSTOMER
    }
  ]);
  return (
    <div>
      <header className="header-top">
        <nav>
          <ul>
            {routes.map((item: any) => (
              <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
