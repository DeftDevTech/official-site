import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesGrid from "../../components/Showcases-grid";
import LightTheme from "../../layouts/Light";

const Showcase4Light = () => {
  return (
    <LightTheme bdOn>
      <NavbarFullMenu />
      <ShowcasesGrid />
    </LightTheme>
  );
};

export default Showcase4Light;
