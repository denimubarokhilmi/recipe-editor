import { describe, expect, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App.tsx";
import { Provider } from "react-redux";
import store from "../shared/redux/index.ts";
describe("Component: App", () => {
  test("should render the lazy-loaded component after Suspense fallback", async () => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>
    );

    const loadingElement = screen.getAllByText(/Loading component.../i);
    loadingElement.forEach((el) => {
      expect(el).toBeInTheDocument();
    });

    const mainTitle = await screen.findByText(/recipe editor/i);
    expect(mainTitle).toBeInTheDocument();
  });

  test("should render the main title 'RECIPE EDITOR' successfully", async () => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>
    );

    await waitFor(() => {
      const element = screen.getByText(/recipe editor/i);
      expect(element).toBeInTheDocument();
    });
  });
});
