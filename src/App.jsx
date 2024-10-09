import { useEffect } from "react";
import HomeContainer from "./components/pages/home/HomeContainer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return <HomeContainer />;
}

export default App;
