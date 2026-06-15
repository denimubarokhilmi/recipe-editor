import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../shared/components/SearchInput";
import { describe, expect, test, jest } from "@jest/globals";

describe("Component: SearchInput", () => {
  test("renders input correctly", () => {
    render(<SearchInput onChange={() => {}} />);

    expect(screen.getByPlaceholderText(/search cocktail/i)).toBeInTheDocument();
  });

  test("calls onChange when typing", () => {
    const onChange = jest.fn();

    render(<SearchInput onChange={onChange} />);

    fireEvent.change(screen.getByPlaceholderText(/search cocktail/i), {
      target: {
        value: "mojito",
      },
    });

    expect(onChange).toHaveBeenCalledWith("mojito");
  });
});
