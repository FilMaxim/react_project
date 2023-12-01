import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import HookFormPage from "../pages/HookFormPage";

describe("main page", () => {
  test("renders main component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HookFormPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText("Main Page")).toBeInTheDocument();
  });
});
