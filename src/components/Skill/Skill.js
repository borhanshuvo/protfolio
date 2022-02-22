import React from "react";
import { imageData } from "../data";

const Skill = () => {
  return (
    <section className="my-md-5 py-md-5">
      <div className="container">
        <h1 className="text-center saira-condensed">S k i l l s</h1>
        <hr />
        <div className="row ms-5 mt-5">
          {imageData.map((data, index) => (
            <div
              className="col-md-3 pb-4"
              data-aos="zoom-in"
              data-aos-duration="3000"
              key={index}
            >
              <div>
                <img src={data.img} className="logo-img" alt="" />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="comfortable pb-3">
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
        </div> */}
      </div>
    </section>
  );
};

export default Skill;
