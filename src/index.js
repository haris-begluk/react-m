import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css"; //Importing bootstrap
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
