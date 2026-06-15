import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IngredientList from "../shared/components/IngredientList";
import { describe, expect, test } from "@jest/globals";

describe("Component: IngredientList", () => {
  test("renders ingredient list", () => {
    render(
      <IngredientList
        ingredient={{
          strIngredient1: "Vodka",
          strIngredient2: "Orange Juice",
        }}
      />
    );

    expect(screen.getByText("Vodka")).toBeInTheDocument();
    expect(screen.getByText("Orange Juice")).toBeInTheDocument();
  });
});
