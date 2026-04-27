import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import store from "../store/store";

function RootLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default RootLayout;
