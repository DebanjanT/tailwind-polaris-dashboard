import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastProvider } from "@dtewary/tw-polaris";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider position="bottom-right">
        <MainRoutes />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>
);
