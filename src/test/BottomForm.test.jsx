import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import BottomForm from "../feature/BottomForm/BottomForm";
import { describe, expect, test } from "@jest/globals";

const store = createStore(() => ({
  cocktail: {
    ingredient: {},
    measure: {},
    loading: false,
    error: "",
  },
}));

describe("Component: BottomForm", () => {
  test("renders search input and button", () => {
    render(
      <Provider store={store}>
        <BottomForm />
      </Provider>
    );

    expect(screen.getByPlaceholderText(/search cocktail/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /cari/i })).toBeInTheDocument();
  });

  test("shows validation when search is empty", () => {
    render(
      <Provider store={store}>
        <BottomForm />
      </Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /cari/i }));

    expect(screen.getByText(/input is required/i)).toBeInTheDocument();
  });
});
