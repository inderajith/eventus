import React from 'react';
import Particles from 'react-particles-js';



const Home = () => (
    <div>
        <div className="head">
        <div className="above">
        <h3 className="title">Eventus - Connects People</h3>
        <p className=" flow-text content">Eventus is a platform for finding and building local communities. People use Eventus to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.</p>
        </div>
        <Particles params={{
            "particles": {
                "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
                },
                "color": {
                "value": "#ffffff"
                },
                "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
                },
                "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
                },
                "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 80,
                    "size_min": 0.1,
                    "sync": false
                }
                },
                "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 2
                },
                "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
                },
                "modes": {
                "grab": {
                    "distance": 800,
                    "line_linked": {
                    "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 800,
                    "size": 80,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
                }
            },
            "retina_detect": true
            }}  />
        </div>
    </div>
)

export default Home;
