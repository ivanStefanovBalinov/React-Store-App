import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";

const CategorySmartphones = () => {
  return (
    <div>
      <SideBar />
      <CategoryReusable
        category={"smartphones"}
        title={sideBarRouter.smartphones.name}
      />
    </div>
  );
};

export default CategorySmartphones;
