import React from "react";
import * as ReactDOMClient from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);
const text = 'У меня все получится))'
root.render(
  <React.StrictMode>
    <h1></h1>
  </React.StrictMode>
);
