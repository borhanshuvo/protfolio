import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { projectData } from "../data";

const Project = () => {
  const btnDesign = {
    fontSize: "15px",
    backgroundImage: "linear-gradient(90deg, #19D3AF, #0FCFEA)",
    border: "none",
    padding: "10px 20px",
    color: "black",
    borderRadius: "10px",
    textDecoration: "none",
  };
  return (
    <section className="my-md-5 py-md-5">
      <div className="container my-5">
        <h2 className="text-center saira-condensed">
          M y &nbsp; P r o j e c t
        </h2>
        <hr />
        <div className="row">
          {projectData.map((pd, index) => (
            <div
              className="col-md-4 pb-5"
              data-aos="zoom-in"
              data-aos-duration="3000"
              key={index}
            >
              <div class="custom-card">
                <div class="custom-card-front">
                  <h5 className="card-title text-center text-uppercase">
                    {pd.title}
                  </h5>
                  <div
                    id={`carouselExampleIndicators${index + 1}`}
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={pd.image} class="d-block w-100" loading="lazy" alt="..." />
                      </div>
                      <div class="carousel-item">
                        <img src={pd.image2} class="d-block w-100" loading="lazy" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="custom-card-back">
                  <div className="d-flex justify-content-center">
                    <a
                      href={pd.live}
                      target="_blank"
                      style={btnDesign}
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faLink} /> Live Project
                    </a>
                    &nbsp;
                    <a
                      href={pd.code}
                      target="_blank"
                      style={btnDesign}
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="card  text-dark text-center h-100">
              <div className="card-body">
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {pd.description}
                </p>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Technologies : {pd.tools}
                </p>
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
