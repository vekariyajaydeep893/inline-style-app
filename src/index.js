import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import External from "./ExternalStyle";
import "./style.css"

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <>
        <External/>
    </>
);
reportWebVitals();