import React from "react";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Project from "./Project/Project";
import Skill from "./Skill/Skill";

const Pages = () => {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Pages;
