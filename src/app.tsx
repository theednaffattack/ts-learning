import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes"; // or use Vite's alias to simplify import path for nested components

import "./style/reset.css";
import "./style/app.css";

function MyApp() {
  const element = useRoutes(routes);
  return element;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  </StrictMode>
);
