import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesFullScreen from "../../components/Showcases-full-screen";
import DarkTheme from "../../layouts/Dark";

const ShowcaseDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesFullScreen />
    </DarkTheme>
  );
};

export default ShowcaseDark;
