import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection.js";
import Particles from "react-particles-js";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
}

export default App;
