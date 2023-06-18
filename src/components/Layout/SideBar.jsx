import React from "react";
import "./SideBar.scss";
import logo from "../../assets/images/logo-i.png";
import logoType from "../../assets/images/logo_i_sub.png";
import { sideBarRouter } from "../../utils/constants";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <img className="logoType" src={logoType} alt="logoType" />
        </div>
        <div className="sidebar-nav">
          <p>Categories</p>
          <ul>
            {Object.values(sideBarRouter).map((route) => {
              return (
                <li key={route.name}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
