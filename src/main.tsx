import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Router from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
