import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains";
import "./index.css";
import { StateContextProvider } from "./context";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThirdwebProvider
    activeChain={Sepolia}
    clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
