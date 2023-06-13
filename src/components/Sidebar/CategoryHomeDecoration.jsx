import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";

const CategoryHomeDecoration = () => {
  return (
    <div>
      <SideBar />

      <CategoryReusable
        category={"home-decoration"}
        title={sideBarRouter.homeDecoration.name}
      />
    </div>
  );
};

export default CategoryHomeDecoration;
