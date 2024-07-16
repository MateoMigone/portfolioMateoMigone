import React from "react";
import AboutMeContainer from "../../common/aboutMe/AboutMeContainer";
import PortfolioContainer from "../../common/portfolio/PortfolioContainer";
import FooterContainer from "../../layouts/Footer/FooterContainer";
import NavBarContainer from "../../layouts/NavBar/NavBarContainer";
import ProfileContainer from "../../common/profile/ProfileContainer";
const Home = () => {
  return (
    <>
      <header>
        <NavBarContainer />
      </header>
      <main style={{ marginTop: "100px" }}>
        <ProfileContainer />
        <AboutMeContainer />
        <PortfolioContainer />
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
};

export default Home;
