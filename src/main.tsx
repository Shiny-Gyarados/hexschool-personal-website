// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./styles/index.scss";
import "bootstrap/js/src/carousel";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <App />
    </HashRouter>
);
