import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Sociallinks from "./components/social_links/sociallinks";
import Portfolio from "./components/portfolio/portfolio";
import Technologies from "./components/technologies/technologies";
import Contacts from "./components/contacts/contacts";
import Piscine from "./components/piscine/piscine";

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
