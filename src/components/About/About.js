import React from "react";
import aboutImage from "../../images/shuvo.jpg";

const About = () => {
  const aboutImageStyle = {
    hight: "300px",
    width: "300px",
    borderRadius: "20px",
  };
  const skillStyle = {
    background: "gray",
    padding: "7px",
    margin: "5px",
    color: "white",
    float: "left",
    borderRadius: "5px",
  };
  return (
    <div className="container pt-5 pb-5">
      <h1 className="text-center saira-condensed">A b o u t &nbsp; M e</h1>
      <hr />
      <div className="row">
        <div className="col-md-5 pt-5 pb-5">
          <div className="ps-4">
            <img src={aboutImage} style={aboutImageStyle} alt="" />
          </div>
        </div>
        <div className="col-md-7">
          <div className="pb-5" style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "30px" }}>I'm BORHAN UDDIN</span>
            <br />
            <span style={{ fontSize: "20px" }}>Full Stack Web Developer</span>
            <br />
            <br />
            <span>
              I am dedicated hard-working team player and excellent knowledge on
              cutting edge up-to-date web development technologies. Also a
              self-motivated and enthusiastic web developer. Ability to work
              with any web development projects and fully integrate my skills
              for company’s progress.
            </span>
            <br />
          </div>
          <h4 className="pb-3">S K I L L S</h4>
          <hr />
          <div className="comfortable pb-3">
            <p>
              <b>
                <u>COMFORTABLE</u>
              </b>
            </p>
            <label>HTML5</label>
            <label>CSS3</label>
            <label>Bootstrap</label>
            <label>JavaScript</label>
            <label>ES6</label>
            <label>React.js</label>
            <label>React Router</label>
            <label>React Bootstrap</label>
            <label>Material UI</label>
          </div>
          <div className="familiar pb-3">
            <p>
              <b>
                <u>FAMILIAR</u>
              </b>
            </p>
            <label>Node.js</label>
            <label>Express.js</label>
            <label>MongoDB</label>
            <label>MySQL</label>
          </div>
          <div className="tools pb-3">
            <p>
              <b>
                <u>TOOLS</u>
              </b>
            </p>
            <label>Git</label>
            <label>Firebase</label>
            <label>Heroku</label>
            <label>Netlify</label>
            <label>VS Code</label>
            <label>Chrome Dev Tools</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
