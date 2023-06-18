import React from "react";
import routes from "../../utils/constants";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {Object.values(routes)
          .filter((route) => route.includeInNavigation)
          .map((route) => {
            return (
              <li key={route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navigation;
