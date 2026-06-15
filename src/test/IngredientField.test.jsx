import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import IngredientField from "../shared/components/IngredientField";
import { describe, expect, test } from "@jest/globals";

const store = createStore(() => ({}));

describe("Component: IngredientField", () => {
  test("renders input value", () => {
    render(
      <Provider store={store}>
        <IngredientField fieldKey="strIngredient1" value="Vodka" />
      </Provider>
    );

    expect(screen.getByDisplayValue("Vodka")).toBeInTheDocument();
  });

  test("allows typing", () => {
    render(
      <Provider store={store}>
        <IngredientField fieldKey="strIngredient1" value="Vodka" />
      </Provider>
    );

    fireEvent.change(screen.getByDisplayValue("Vodka"), {
      target: {
        value: "Gin",
      },
    });
  });
});
