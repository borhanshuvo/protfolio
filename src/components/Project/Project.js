import React from 'react';
import eventManagement from '../../images/event_management.jpg';
import eventManagement2 from '../../images/event_management_2.jpg';
import clickToBuy from '../../images/click_to_buy.jpg';
import clickToBuy2 from '../../images/click_to_buy_2.jpg';
import premierLeague from '../../images/premier_league.jpg';
import premierLeague2 from '../../images/premier_league_2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const projectData = [
    {
        title: "Event Management ( mern )",
        description: "Event Management is a event booking web application. There are two type of user. One is 'Admin' who can create event service, manage event service and also can add another admin. Another one is 'Customer' who can book any event including payment using Stripe online payment process. Customer can see order status and give review with rating.",
        tools: 'React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express, MongoDB, Heroku and Firebase',
        code: "https://github.com/borhanshuvo/event-management-client",
        live: "https://event-management-em.web.app/",
        image: eventManagement,
        image2: eventManagement2
    },
    {
        title: "Click To Buy ( mern )",
        description: "Click to Buy is ecommerce web application. There are two type of user one is 'Admin' who can add product, manage product another one is 'Customer' who can order any product and see their previous order history.",
        tools: 'React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript, Node.js, Express, MongoDB, Heroku and Firebase',
        code: "https://github.com/borhanshuvo/click-to-buy-client",
        live: "https://click-to-buy-6fa3e.web.app/",
        image: clickToBuy,
        image2: clickToBuy2
    },
    {
        title: "English Premier League",
        description: "English Premier League is a Sports related web application. Where user can see the team information",
        tools: 'React.js, React Router, HTML5, CSS3, Bootstrap, JavaScript and Netlify',
        code: "https://github.com/borhanshuvo/english-premier-league",
        live: "https://youthful-bose-290646.netlify.app/",
        image: premierLeague,
        image2: premierLeague2
    }
]

const Project = () => {
    const btnDesign = { fontSize: '15px', backgroundImage: 'linear-gradient(90deg, #19D3AF, #0FCFEA)', border: 'none', padding: '10px 20px', color: 'black', borderRadius: '10px', textDecoration: 'none' };
    return (
        <div className="container pt-5">
            <div className="row pt-5">
                {
                    projectData.map(pd =>
                        <div className="col-12 pb-5">
                            <div className="card  text-dark text-center">
                                <div className="card-header">
                                    <h5 className="card-title text-uppercase">{pd.title}</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 pb-3">
                                        <img src={pd.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src={pd.image2} className="img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{pd.description}</p>
                                    <p className="card-text">Technologies : {pd.tools}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-center">
                                    <a href={pd.live} target="_blank" style={btnDesign}><FontAwesomeIcon icon={faLink} /> Live Project</a>&nbsp;
                                    <a href={pd.code} target="_blank" style={btnDesign}><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Project;