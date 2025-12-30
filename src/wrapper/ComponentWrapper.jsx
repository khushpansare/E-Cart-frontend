import React from "react";
import Navbar from "../dashboard/Navbar";
import Foter from "../dashboard/Foter";

function ComponentWrapper(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Foter />
    </>
  );
}

export default ComponentWrapper;
