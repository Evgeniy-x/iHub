import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadItems } from "./redux/all-items/operations";
import { allItemsLoading } from "./redux/all-items/selectors";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(allItemsLoading);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  if (isLoading) {
    // return Loader before the content has loaded
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
