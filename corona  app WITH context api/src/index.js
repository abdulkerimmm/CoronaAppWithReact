import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Store } from "./contextApi/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Store>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Store>
);
