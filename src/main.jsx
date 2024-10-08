import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./providers/UserProvider.jsx";
import toast, { Toaster } from "react-hot-toast";
import { OrderProvider } from "./providers/OrderProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <UserProvider>
      <OrderProvider>
        <App />
        <Toaster
          toastOptions={{
            duration: 3500,
          }}
        />
      </OrderProvider>
    </UserProvider>
  </HashRouter>
);
