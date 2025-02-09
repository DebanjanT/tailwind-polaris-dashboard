import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastProvider } from "@dtewary/tw-polaris";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider position="bottom-right">
      <App />
    </ToastProvider>
  </StrictMode>
);
