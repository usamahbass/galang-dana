import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ProductProvider } from "./context/context";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
