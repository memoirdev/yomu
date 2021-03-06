import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/_app";
import { getOrCreate } from "./utils/dom";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  getOrCreate("yomu-root")
);
