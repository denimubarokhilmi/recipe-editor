import { Routes, Route } from "react-router";
import App from "../App";
function CompRouters() {
  return (
    <>
      <Routes>
        <Route path="/" Component={App} index></Route>
      </Routes>
    </>
  );
}

export default CompRouters;
