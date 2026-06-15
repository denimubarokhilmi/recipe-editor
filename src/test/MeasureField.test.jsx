import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MeasureField from "../shared/components/MeasureField";
import { describe, expect, test } from "@jest/globals";

const store = createStore(() => ({}));

describe("Component: MeasureField", () => {
  test("renders input value", () => {
    render(
      <Provider store={store}>
        <MeasureField fieldKey="strMeasure1" value="10 ml" />
      </Provider>
    );

    expect(screen.getByDisplayValue("10 ml")).toBeInTheDocument();
  });

  test("accepts typing", () => {
    render(
      <Provider store={store}>
        <MeasureField fieldKey="strMeasure1" value="10 ml" />
      </Provider>
    );

    fireEvent.change(screen.getByDisplayValue("10 ml"), {
      target: {
        value: "20 ml",
      },
    });
  });
});
