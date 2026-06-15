import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingComponent from "../shared/components/LoadingComponent";
import { describe, expect, test } from "@jest/globals";

describe("Component: LoadingComponent", () => {
  test("renders loading text", () => {
    render(<LoadingComponent />);

    expect(screen.getByText(/loading component/i)).toBeInTheDocument();
  });
});
