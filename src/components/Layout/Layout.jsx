import React from "react";
import { Route, Routes } from "react-router";
import routes, { sideBarRouter } from "../../utils/constants";

const Layout = () => {
  return (
    <Routes>
      {Object.values(routes).map((route) => {
        return (
          <Route element={route.element} path={route.path} key={route.path} />
        );
      })}
      {Object.values(sideBarRouter).map((route) => {
        return (
          <Route element={route.element} path={route.path} key={route.path} />
        );
      })}
    </Routes>
  );
};

export default Layout;
