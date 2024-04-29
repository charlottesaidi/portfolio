import './particles.js';

export function particlesColorTheme() {
    var particles_color = '';

    if(body.getAttribute("theme") === 'light') {
        particles_color = '#0c0e11';
    } else {
        particles_color = '#b8e6ff';
    }
    return particles_color;
}

export function loadParticleJs(element, options) {
    return particlesJS(element, {
        "particles": {
        "number": {
            "value": options.nb,
            "density": {
            "enable": true,
            "value_area": 800
            }
        },
        "color": {
            "value": options.color
        },
        "shape": {
            "type": "circle",
            "stroke": {
            "width": 0,
            "color": options.color
            },
            "polygon": {
            "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": options.color,
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": false,
            "speed": options.speed,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
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
            "enable": true,
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
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
            },
            "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
            },
            "repulse": {
            "distance": 100
            },
            "push": {
            "particles_nb": 4
            },
            "remove": {
            "particles_nb": 2
            }
        }
        },
        "retina_detect": false
    }
    );
}