import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Router from "./routes/Route";
import ContextProvider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </React.StrictMode>
);
