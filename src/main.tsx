import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/MainPages";
import ErrorPage from "./pages/ErrorPage";
import { FormPage } from "./pages/FormPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import HookFormPage from "./pages/HookFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "form",
    element: <FormPage />,
  },
  {
    path: "hook-form",
    element: <HookFormPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
