import React from 'react';
import eventManagement from '../../images/event_management.jpg';
import clickToBuy from '../../images/click_to_buy.jpg';
import premierLeague from '../../images/premier_league.jpg';


const projectData = [
    {
        title: "Event Management",
        description: "A fullstack diamond world app using React JS, Node JS, MongoDB, Bootstrap",
        code: "https://github.com/borhanshuvo/event-management-client",
        live: "https://event-management-em.web.app/",
        image: eventManagement
    },
    {
        title: "Click To Buy",
        description: "Food Stall is a food searching app using HTML5, CSS3, Bootstrap, JavaScript and Netlify",
        code: "https://github.com/borhanshuvo/click-to-buy-client",
        live: "https://click-to-buy-6fa3e.web.app/",
        image: clickToBuy
    },
    {
        title: "English Premier League",
        description: "English Premier League is sports related app using HTML5, CSS3, React js and netlify",
        code: "https://github.com/borhanshuvo/english-premier-league",
        live: "https://youthful-bose-290646.netlify.app/",
        image: premierLeague
    }
]

const Project = () => {
    return (
        <div className="container pt-5">
            <div className="row pt-5">
                {
                    projectData.map(pd =>
                        <div className="col-md-4">
                            <div className="card  text-dark text-center">
                                <div className="card-header">
                                    <h5 className="card-title">{pd.title}</h5>
                                </div>
                                <img src={pd.image} className="img-fluid" alt="" />
                                <div className="card-body">
                                    <p className="card-text">{pd.description}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <a href={pd.live} target="_blank" className="btn btn-primary">Live Project</a>
                                    <a href={pd.code} target="_blank" className="btn btn-primary">GitHub</a>
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