import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteHome } from "../app/SiteHome";
import "../app/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteHome />
  </StrictMode>,
);
