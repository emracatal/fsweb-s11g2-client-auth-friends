import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AuthContextProvider>
);
