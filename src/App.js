import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Sociallinks from "./components/social_links/sociallinks";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Technologies from "./components/technologies/technologies";

function App() {
  return (
    <div>

     <Navbar />
     <Home />
     <About />
     <Portfolio />
     <Technologies />
     
     <Sociallinks />
     
    </div>
  );
}

export default App;
