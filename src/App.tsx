import ErrorBoundary from "./shared/components/ErrorBoundary";
import { Suspense, lazy } from "react";
import LoadingComponent from "./shared/components/LoadingComponent";

const TopForm = lazy(() => import("./feature/TopForm/TopForm"));
const BottomForm = lazy(() => import("./feature/BottomForm/BottomForm"));

function App() {
  return (
    <section className="app-wrapper container-fluid">
      <div className=" container">
        <div className="content position-relative  d-flex flex-column justify-content-center mt-4 align-items-center gap-3">
          <div className="header-title mt-2">
            <h2 className=" position-relative text-white z-2 text-center">
              RECIPE EDITOR
            </h2>
          </div>
          <ErrorBoundary>
            <Suspense fallback={<LoadingComponent></LoadingComponent>}>
              <TopForm></TopForm>
            </Suspense>
            <Suspense fallback={<LoadingComponent></LoadingComponent>}>
              <BottomForm></BottomForm>
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}

export default App;
