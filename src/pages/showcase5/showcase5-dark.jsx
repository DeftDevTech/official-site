import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesShowStyle from "../../components/Showcases-show-style/index.jsx";
import DarkTheme from "../../layouts/Dark";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesShowStyle />
    </DarkTheme>
  );
};

export default ShowcaseDark;
