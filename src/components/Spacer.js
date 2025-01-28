import React from "react";
import "./Spacer.css";

const Spacer = ({ height = "small" }) => {
  const heightClass = `spacer-${height}`;
  return <div className={`spacer ${heightClass}`} />;
};

export default Spacer;
