import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AppStarter from "./components/Common/AppStarter.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppStarter>
          <App />
        </AppStarter>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
