import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "../shared/components/LoadingSpinner";
import { describe, expect, test } from "@jest/globals";

describe("Component: LoadingSpinner", () => {
  test("renders label", () => {
    render(<LoadingSpinner label="Loading..." />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
