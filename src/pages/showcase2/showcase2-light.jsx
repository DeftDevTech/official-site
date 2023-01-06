import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import LightTheme from "../../layouts/Light";

const Showcase4Light = () => {
  return (
    <LightTheme bdOn>
      <NavbarFullMenu />
      <ShowcasesOneCenter />
    </LightTheme>
  );
};

export default Showcase4Light;
