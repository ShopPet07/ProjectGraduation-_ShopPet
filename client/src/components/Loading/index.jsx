import React from "react";
import ReactLoading from "react-loading";

const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"40px"} width={"40px"} />
);

export default Example;
