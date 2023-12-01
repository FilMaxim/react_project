import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { FormPage } from "../pages/FormPage";
import { BrowserRouter } from "react-router-dom";

describe("form page", () => {
  test("renders FormPage component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText("Form Page")).toBeInTheDocument();
  });
});
