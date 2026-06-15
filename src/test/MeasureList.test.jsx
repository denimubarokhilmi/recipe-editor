import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MeasureList from "../shared/components/MeasureList";
import { describe, expect, test } from "@jest/globals";

describe("Component: MeasureList", () => {
  test("renders measures", () => {
    render(
      <MeasureList
        measure={{
          strMeasure1: "20 ml",
          strMeasure2: "10 ml",
        }}
      />
    );

    expect(screen.getByDisplayValue("20 ml")).toBeInTheDocument();
    expect(screen.getByDisplayValue("10 ml")).toBeInTheDocument();
  });
});
