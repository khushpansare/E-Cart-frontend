import React from "react";
import Navbar from "../dashboard/Navbar";
import Foter from "../dashboard/Foter";

function ComponentWrapper(props) {
  return (
    <>
      <Navbar />
      <div className="main-page-container">{props.children}</div>
      {/* <Foter /> */}
    </>
  );
}

export default ComponentWrapper;
