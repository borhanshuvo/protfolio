import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import developerImg from "../../images/developer.jpg";
import resume from "../../resume/Borhan_Uddin_Resume.pdf";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";

const Home = () => {
  const btnDesign = {
    fontSize: "15px",
    backgroundImage: "linear-gradient(90deg, #19D3AF, #0FCFEA)",
    border: "none",
    padding: "10px 20px",
    color: "#3A4256",
    borderRadius: "10px",
    textDecoration: "none",
  };
  const textColor2 = { color: "#b4b5b5" };
  const headingColor = { color: "#3A4256" };
  const textColor = { color: "#3A3056" };
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row pt-5">
          <div className="col-md-6 pt-5 pb-5">
            <h5 className="pt-5">
              <span style={{ fontSize: "30px" }}>Hey, I'm BORHAN UDDIN.</span>{" "}
            </h5>
            <span style={{ fontSize: "20px" }}>
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "Web Developer",
                  3000,
                  "Front End Developer",
                  3000,
                  "React Developer",
                  3000,
                ]}
              />
            </span>

            <p className="pb-3">
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "I am a Full Stack Web Developer who likes to build things that works on the web. If you're looking for a developer to add to your team, I'd love to hear from you!",
                  3000,
                ]}
              />
            </p>
            <Link style={btnDesign} to={`${resume}`} target="_blank" download className="mx-2">
              <FontAwesomeIcon icon={faDownload} /> RESUME
            </Link>
            <Link to="#contact" style={btnDesign} className="mx-2">
              Hire Me
            </Link>
            <br />
            <div className="pt-5">
              <span className="pe-4">
                <a
                  href="https://web.facebook.com/borhan814/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook className="fs-2 text-primary" />
                </a>
              </span>
              <span className="pe-4">
                <a
                  href="mailto:borhan015@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiGmail className="fs-2 text-danger" />
                </a>
              </span>
              <span className="pe-4">
                <a
                  href="https://www.linkedin.com/in/borhan-uddin-015/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="fs-2 text-primary" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/borhanshuvo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="fs-2 text-white" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="ms-md-5 mt-md-5 pt-md-5">
              <img
                src={developerImg}
                className="w-100"
                style={{
                  borderRadius: "20px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Blog />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
