import AllProducts from "../components/Products/AllProducts/AllProducts";
import ProductPage from "../components/Products/Product/ProductPage";
import CreateProduct from "../components/Products/CreateProduct/CreateProduct";
import EditProductPage from "../components/Products/EditProduct/EditProductPage";
import CategorySmartphones from "../components/Sidebar/CategorySmartphones";
import CategoryLaptops from "../components/Sidebar/CategoryLaptops";
import CategoryFragrances from "../components/Sidebar/CategoryFragrances";
import CategorySkincare from "../components/Sidebar/CategorySkincare";
import CategoryGroceries from "../components/Sidebar/CategoryGroceries";
import CategoryHomeDecoration from "../components/Sidebar/CategoryHomeDecoration";
import HomePage from "../components/HomePage/HomePage";

const routes = {
  home: {
    path: "/",
    name: "Home",
    includeInNavigation: true,
    element: <HomePage />,
  },
  products: {
    path: "/products",
    name: "Products",
    includeInNavigation: true,
    element: <AllProducts />,
  },
  productById: {
    path: "/products/:productId",
    name: "",
    includeInNavigation: false,
    element: <ProductPage />,
  },
  createProduct: {
    path: "/products/create",
    name: "Create Product",
    includeInNavigation: true,
    element: <CreateProduct />,
  },
  editProduct: {
    path: "/products/edit/:productId",
    name: "",
    includeInNavigation: false,
    element: <EditProductPage />,
  },
};

export const sideBarRouter = {
  smartphones: {
    path: "/products/category/smartphones/",
    name: "Smartphones",
    element: <CategorySmartphones />,
  },
  laptops: {
    path: "/products/category/laptops/",
    name: "Laptops",
    element: <CategoryLaptops />,
  },
  fragrances: {
    path: "/products/category/fragrances/",
    name: "Fragrances",
    element: <CategoryFragrances />,
  },
  skincare: {
    path: "/products/category/skincare/",
    name: "Skincare",
    element: <CategorySkincare />,
  },
  groceries: {
    path: "/products/category/groceries/",
    name: "Groceries",
    element: <CategoryGroceries />,
  },
  homeDecoration: {
    path: "/products/category/homeDecoration/",
    name: "Home Decoration",
    element: <CategoryHomeDecoration />,
  },
};

export default routes;
