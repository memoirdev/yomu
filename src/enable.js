import React from "react";
import ReactDOM from "react-dom";
import Sheet from "./pages/sheet";
import { getOrCreate } from "./utils/dom";

ReactDOM.render(
  <React.StrictMode>
    <Sheet />
  </React.StrictMode>,
  getOrCreate("yomu-root")
);
