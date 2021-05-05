import React from 'react';
import Particles from "react-particles-js"
import ParticleConfig from './ParticleBackground';

const Particle = () => {
    return (
        <div style={{position: 'fixed', height: '100vh', width: '100%'}}>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
};

export default Particle;