import React, { useRef } from "react";
import AboutMeContainer from "../../common/aboutMe/AboutMeContainer";
import PortfolioContainer from "../../common/portfolio/PortfolioContainer";
import FooterContainer from "../../layouts/Footer/FooterContainer";
import NavBarContainer from "../../layouts/NavBar/NavBarContainer";
import ProfileContainer from "../../common/profile/ProfileContainer";
const Home = () => {
  const portfolio = useRef(null);
  const aboutMe = useRef(null);

  const scrollToPortfolio = () => {
    if (portfolio.current) {
      portfolio.current.scrollIntoView({
        behavior: "smooth", // This enables smooth scrolling
        block: "start", // Align the element to the top of the viewport
      });
    }
  };

  const scrollToAboutMe = () => {
    if (aboutMe.current) {
      aboutMe.current.scrollIntoView({
        behavior: "smooth", // This enables smooth scrolling
        block: "start", // Align the element to the top of the viewport
      });
    }
  };

  return (
    <>
      <header>
        <NavBarContainer
          scrollToPortfolio={scrollToPortfolio}
          scrollToAboutMe={scrollToAboutMe}
        />
      </header>
      <main style={{ marginTop: "100px" }} ref={aboutMe}>
        <div>
          <ProfileContainer />
          <AboutMeContainer />
        </div>
        <div ref={portfolio}>
          <PortfolioContainer />
        </div>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
};

export default Home;
