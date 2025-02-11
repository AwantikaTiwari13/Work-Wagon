import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
