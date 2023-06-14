import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/features/products-actions";

const AppStarter = (props) => {
  const dispatch = useDispatch();

  dispatch(fetchAllProducts());
  return props.children;
};

export default AppStarter;
