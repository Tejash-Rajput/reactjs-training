import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import "./scss/main.scss"


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
