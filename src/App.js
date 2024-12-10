import React from "react";

// Components:
import Header from "./Components/Global/Header/Header";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Global/Footer/Footer";
import Aos from "aos";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";

function App() {

  React.useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out-sine",
      once: true,
    })
  }, []);

  return (
    <div className="App bg-background-color text-white">
      {/* Header */}
      <Header />
      {/* Landing Section */}
      <Landing />
      {/* Container */}
      <div className="container"> {/* One Container! */}
        {/* About Section */}
        <About />
        {/* Projects Section */}
        <Projects />
        {/* Services Section */}
        <Services />
        {/* Skills Section */}
        <Skills />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;