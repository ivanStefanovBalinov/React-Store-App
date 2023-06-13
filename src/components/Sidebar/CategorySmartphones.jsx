import React from "react";
import SideBar from "../Layout/SideBar";
import CategoryReusable from "./CategoryReusable";
import { sideBarRouter } from "../../utils/constants";
import { useParams } from "react-router";

const CategorySmartphones = () => {
  const params = useParams();
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
