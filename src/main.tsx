import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CompRouters from "./router/router.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./shared/redux/index.ts";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CompRouters></CompRouters>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
