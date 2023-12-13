import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Sociallinks from "./components/social_links/sociallinks";
import Piscine from "./components/piscine/piscine";
import Portfolio from "./components/portfolio/portfolio";
import Technologies from "./components/technologies/technologies";
import Contacts from "./components/contacts/contacts";

function App() {
  return (
    <div>

     <Navbar />
     <Home />
     <Piscine />
     <Portfolio />
     <Technologies />
     <Contacts />
     
     <Sociallinks />
     
    </div>
  );
}

export default App;
