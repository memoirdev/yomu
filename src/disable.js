import ReactDOM from "react-dom";
import { getOrCreate } from "./utils/dom";

ReactDOM.unmountComponentAtNode(getOrCreate("yomu-root"));
