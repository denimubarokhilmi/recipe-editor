import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TopForm from "../feature/TopForm/TopForm";
import { describe, expect, test } from "@jest/globals";

describe("Component: TopForm", () => {
  test("shows empty message when no ingredient", () => {
    const store = createStore(() => ({
      cocktail: {
        ingredient: null,
        measure: null,
      },
    }));

    render(
      <Provider store={store}>
        <TopForm />
      </Provider>
    );

    expect(
      screen.getByRole("heading", { name: /no ingredient selected/i })
    ).toBeInTheDocument();
  });

  test("shows total ingredient", () => {
    const store = createStore(() => ({
      cocktail: {
        ingredient: {
          strIngredient1: "Vodka",
        },
        measure: {
          strMeasure1: "20 ml",
        },
      },
    }));

    render(
      <Provider store={store}>
        <TopForm />
      </Provider>
    );

    expect(screen.getByText(/total ingredient/i)).toBeInTheDocument();
  });
});
