import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";

const CategoryGroceries = () => {
  return (
    <div>
      <SideBar />
      <CategoryReusable
        category={"groceries"}
        title={sideBarRouter.groceries.name}
      />
    </div>
  );
};

export default CategoryGroceries;
