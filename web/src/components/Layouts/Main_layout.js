import React from "react";
import Nav from "./Nav_left";
import Menu_bar from "./Nav";

function Main_layout({ children }) {
  return (
    <>
      <Nav />
      <Menu_bar />
      {children}
    </>
  );
}

export default Main_layout;
