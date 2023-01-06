import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesGrid from "../../components/Showcases-grid";
import DarkTheme from "../../layouts/Dark";

const Showcase4Dark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ShowcasesGrid />
    </DarkTheme>
  );
};

export default Showcase4Dark;
