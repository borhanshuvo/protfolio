import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import profileImage from '../../images/shuvo.jpg'
import resume from '../../resume/Borhan_Uddin_Resume .pdf';

const Home = () => {
    const iconStyle = { fontSize: '40px', color: 'white' };
    const btnDesign = { fontSize: '15px', backgroundImage: 'linear-gradient(90deg, #19D3AF, #0FCFEA)', border: 'none', padding: '10px 20px', color: '#3A4256', borderRadius: '10px', textDecoration: 'none' };
    const textColor2 = { color: '#b4b5b5' };
    const headingColor = { color: '#3A4256' };
    const textColor = { color: '#3A3056' };
    return (
        <>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 pt-5 pb-5">
                        <h5 className="pt-5"><span style={{ fontSize: '30px' }}>Hey, I'm BORHAN UDDIN.</span> </h5>
                        <span style={{ fontSize: '20px' }}>
                            <Typical
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    'Web Developer', 3000, 'Front End Developer', 3000, 'React Developer', 3000
                                ]}
                            />
                        </span>

                        <p className="pb-3">
                            <Typical
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    'I am a Full Stack Web Developer who likes to build things that works on the web. I want to work in a dynamic team where I can utilize my knowledge and learn new technologies.', 3000
                                ]}
                            />
                        </p>
                        <Link style={btnDesign} to={`${resume}`} target="_blank" download><FontAwesomeIcon icon={faDownload} /> RESUME</Link><br />
                        <div className="pt-5">
                            <span className="pe-4">
                                <a href="https://web.facebook.com/borhan814/" target="_blank"><FontAwesomeIcon style={iconStyle} icon={faFacebookSquare} /></a>
                            </span>
                            <span className="pe-4">
                                <a href="mailto:borhan015@gmail.com" target="_blank"><FontAwesomeIcon style={iconStyle} icon={faEnvelopeSquare} /></a>
                            </span>
                            <span className="pe-4">
                                <a href="https://www.linkedin.com/in/borhan-uddin-015/" target="_blank"><FontAwesomeIcon style={iconStyle} icon={faLinkedin} /></a>
                            </span>
                            <span>
                                <a href="https://github.com/borhanshuvo" target="_blank"><FontAwesomeIcon style={iconStyle} icon={faGithubSquare} /></a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-1">
                            <img src={profileImage} className="img-fluid" style={{ borderRadius: "20px" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;