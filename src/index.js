import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css"; //Importing bootstrap

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
/* 
Lifecycle Hooks: 
MOUNT: (constructor, render, componentDidMount) 
UPDATE: (render, componentDidUpdate) 
UNMOUNT: (componentWillUnmount) 
*/
