import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./Route"; // Pastikan path file Route benar
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>
);
