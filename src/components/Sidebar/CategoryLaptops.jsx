import React from "react";
import SideBar from "../Layout/SideBar";
import { sideBarRouter } from "../../utils/constants";
import CategoryReusable from "./CategoryReusable";

const CategoryLaptops = () => {
  return (
    <div>
      <SideBar />
      <CategoryReusable
        category={"laptops"}
        title={sideBarRouter.laptops.name}
      />
    </div>
  );
};

export default CategoryLaptops;
