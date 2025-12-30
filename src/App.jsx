import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageRoutes from "./routes/pageRoutes";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element="<h1> Product <h1/>" />
      </Routes> */}

      <PageRoutes />
    </>
  );
}

export default App;
