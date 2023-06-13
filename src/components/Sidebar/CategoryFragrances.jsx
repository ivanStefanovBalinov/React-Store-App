import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";

const CategoryFragrances = () => {
  return (
    <div>
      <SideBar />
      <CategoryReusable
        category={"fragrances"}
        title={sideBarRouter.fragrances.name}
      />
    </div>
  );
};

export default CategoryFragrances;
