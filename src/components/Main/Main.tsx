import React from "react";
import FeaturedBox from "../FeaturedBox/FeaturedBox";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

import "./Main.css";

const Main = () => {
  return (
    <div className="wrapper">
      <FeaturedBox />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
