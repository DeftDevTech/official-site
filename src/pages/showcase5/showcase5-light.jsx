import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesShowStyle from "../../components/Showcases-show-style/index.jsx";
import LightTheme from "../../layouts/Light";

const ShowcaseLight = () => {
  return (
    <LightTheme bdOn>
      <NavbarFullMenu />
      <ShowcasesShowStyle />
    </LightTheme>
  );
};

export default ShowcaseLight;
