import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/index.scss";
import Providers from "./Providers";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
