import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";

const CategorySkincare = () => {
  return (
    <div>
      <SideBar />
      <CategoryReusable
        category={"skincare"}
        title={sideBarRouter.skincare.name}
      />
    </div>
  );
};

export default CategorySkincare;
