import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CardsContextProvider } from "./context/CardsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CardsContextProvider>
  </React.StrictMode>
);
