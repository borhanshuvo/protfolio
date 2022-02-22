import React from "react";
import aboutImage from "../../images/shuvo.jpg";

const About = () => {
  const aboutImageStyle = {
    hight: "300px",
    width: "300px",
    borderRadius: "20px",
  };

  return (
    <section className="py-md-5 my-md-5">
      <div className="container my-5">
        <h1 className="text-center saira-condensed">A b o u t &nbsp; M e</h1>
        <hr />
        <div className="row">
          <div
            className="col-md-5 py-5"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <div className="ps-4">
              <img src={aboutImage} style={aboutImageStyle} alt="" />
            </div>
          </div>
          <div
            className="col-md-7"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="py-5" style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "30px" }}>I'm BORHAN UDDIN</span>
              <br />
              <span style={{ fontSize: "20px" }}>Full Stack Web Developer</span>
              <br />
              <br />
              <span>
                I am dedicated hard-working team player and excellent knowledge
                on cutting edge up-to-date web development technologies. Also a
                self-motivated and enthusiastic web developer. Ability to work
                with any web development projects and fully integrate my skills
                for company’s progress.
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
