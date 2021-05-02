import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import profileImage from '../../images/shuvo.jpg'
import resume from '../../resume/Borhan_Uddin_Resume .pdf';

const Home = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 pt-5 pb-5">
                    <h5 className="pt-5"><span style={{ fontSize: '30px' }}>Hey, I'm BORHAN UDDIN.</span> {' '}
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Full Stack Web Developer', 3000, 'Good Learner', 3000
                            ]}
                        />
                    </h5>
                    <p>I am a Full Stack Web Developer who likes to build things that works on the web. I want to work in a dynamic team where I can utilize my knowledge and learn new technologies.</p>
                    <Link className="btn btn-primary" to={`${resume}`} target="_blank" download>RESUME</Link>
                </div>
                <div className="col-md-6">
                    <div className="ps-5">
                        <img src={profileImage} className="img-fluid" style={{ borderRadius: "20px" }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;