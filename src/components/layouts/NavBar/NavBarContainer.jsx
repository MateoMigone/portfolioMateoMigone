import React from "react";
import NavBar from "./NavBar";

const NavBarContainer = ({ scrollToPortfolio, scrollToAboutMe }) => {
  return (
    <NavBar
      scrollToPortfolio={scrollToPortfolio}
      scrollToAboutMe={scrollToAboutMe}
    />
  );
};

export default NavBarContainer;
