import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrimaryLayout from "./layouts/primary/Layout";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <PrimaryLayout>
      <Toaster position="top-center" reverseOrder={false} />

      <RouterProvider router={router} />
    </PrimaryLayout>
  </React.StrictMode>,
);
