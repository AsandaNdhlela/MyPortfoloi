import About from "./About";
import "./App.css";
import React, { useState } from "react";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Data from "./ProjectData"
import aboutData from "./AboutData";


function App() {
  const [item] = useState(Data);

  const [items] = useState(aboutData);

  return (
    <div className="App">
      <Home />
      <About items={items} />
      <Service />
      <Project item={item} />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

