import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Sociallinks from "./components/social_links/sociallinks";
import Project from "./components/portfolio/projects";
import TechStacks from "./components/technologies/techstacks";
import Contacts from "./components/contacts/contacts";
import Piscine from "./components/piscine/piscine";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div>

     <Navbar />
     <Home />
     <Piscine />
     <Gallery />
     <Project />
     <TechStacks />
     <Contacts />
     
     <Sociallinks />
     
    </div>
  );
}

export default App;
