import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/Home";
import Sociallinks from "./components/social_links/sociallinks";
import About from "./components/about/about";

function App() {
  return (
    <div>

     <Navbar />
     <Home />
     <About />
     
     <Sociallinks />
     
    </div>
  );
}

export default App;
