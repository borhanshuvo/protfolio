import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import clickToBuy from "../../images/click_to_buy.jpg";
import clickToBuy2 from "../../images/click_to_buy_2.jpg";
import easyEssayWriting from "../../images/easyEssayWriting.png";
import easyEssayWriting2 from "../../images/easyEssayWriting2.png";
import eventManagement from "../../images/eventManagement.png";
import eventManagement2 from "../../images/eventManagement2.png";
import premierLeague from "../../images/premier_league.jpg";
import premierLeague2 from "../../images/premier_league_2.jpg";
import virtualExpert from "../../images/virtualExpert.png";
import virtualExpert2 from "../../images/virtualExpert2.png";

const projectData = [
  {
    id: "1",
    title: "Easy Essay Witting",
    description:
      "Admin user can dynamically changes home page. Implemented similar affiliate marketing functionality (user can refer another user). Online payment processing using STRIPE.",
    tools: "Next.js, Express.js, Mongoose, Firebase, Stripe",
    code: "https://github.com/borhanshuvo/easy-essay-writing",
    live: "https://easy-essay-writing-borhanshuvo.vercel.app/",
    image: easyEssayWriting,
    image2: easyEssayWriting2,
  },
  {
    id: "2",
    title: "Virtual Expert",
    description:
      "Admin user can dynamically changes all pages and create, manage service card. Implemented Invoice functionality. User can order any service.",
    tools: "Next.js, Express.js, Mongoose, Email.js",
    code: "https://github.com/borhanshuvo/virtual-expert",
    live: "https://virtual-expert-borhanshuvo.vercel.app/",
    image: virtualExpert,
    image2: virtualExpert2,
  },
  {
    id: "3",
    title: "Event Management",
    description:
      "Event Management is a event booking web application. There are two type of user. One is 'Admin' who can create event service, manage event service and also can add another admin. Another one is 'Customer' who can book any event including payment using Stripe online payment process. Customer can see order status and give review with rating.",
    tools:
      "React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express, MongoDB, Heroku and Firebase",
    code: "https://github.com/borhanshuvo/event-management-client",
    live: "https://event-management-em.web.app/",
    image: eventManagement,
    image2: eventManagement2,
  },
  {
    id: "4",
    title: "Click To Buy",
    description:
      "Click to Buy is ecommerce web application. There are two type of user one is 'Admin' who can add product, manage product another one is 'Customer' who can order any product and see their previous order history.",
    tools:
      "React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express, MongoDB, Heroku and Firebase",
    code: "https://github.com/borhanshuvo/click-to-buy-client",
    live: "https://click-to-buy-6fa3e.web.app/",
    image: clickToBuy,
    image2: clickToBuy2,
  },
  {
    id: "5",
    title: "English Premier League",
    description:
      "English Premier League is a Sports related web application. Where user can see the team information",
    tools:
      "React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript and Netlify",
    code: "https://github.com/borhanshuvo/english-premier-league",
    live: "https://youthful-bose-290646.netlify.app/",
    image: premierLeague,
    image2: premierLeague2,
  },
];

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
    <div className="container my-5">
      <h2 className="text-center saira-condensed">M y &nbsp; P r o j e c t</h2>
      <hr />
      <div className="row">
        {projectData.map((pd, index) => (
          <div className="col-md-4 pb-5" key={index}>
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
                      <img src={pd.image} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={pd.image2} class="d-block w-100" alt="..." />
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
              <div className="card-header">
                <h5 className="card-title text-uppercase">{pd.title}</h5>
              </div>
              <div
                id={`carouselExampleIndicators${index + 1}`}
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={pd.image} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={pd.image2} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleIndicators${index + 1}`}
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleIndicators${index + 1}`}
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <p className="card-text" style={{ textAlign: "justify" }}>
                  {pd.description}
                </p>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Technologies : {pd.tools}
                </p>
              </div>
              <div className="card-footer d-flex justify-content-center">
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
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
