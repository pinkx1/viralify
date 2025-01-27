import React from "react";
import "./Container.css"; // Подключаем CSS

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
