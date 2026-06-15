import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchButton from "../shared/components/SearchButton";
import { describe, expect, test, jest } from "@jest/globals";

describe("Component: SearchButton", () => {
  test("renders button", () => {
    render(<SearchButton disabled={false} onClicks={() => {}} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calls click handler", () => {
    const fn = jest.fn();

    render(<SearchButton disabled={false} onClicks={fn} />);

    fireEvent.click(screen.getByRole("button"));

    expect(fn).toHaveBeenCalled();
  });

  test("button disabled", () => {
    render(<SearchButton disabled={true} onClicks={() => {}} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
