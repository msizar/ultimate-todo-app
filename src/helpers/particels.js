import bed from '../assets/images/bed.png';
import dance from '../assets/images/dance.png';
import gym from '../assets/images/gym.png';
import drink from '../assets/images/drink.png';
import shoer from '../assets/images/shoer.png';
import work from '../assets/images/work.png';
import pdrink from '../assets/images/pdrink.png';

const particlesConfig = {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "image",
                "circle"
            ],
            "image": [
                {
                    "src": shoer,
                    "height": 20,
                    "width": 23
                },
                {
                    "src": work,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": bed,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": gym,
                    "height": 20,
                    "width": 20
                },  
                {
                    "src": dance,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": drink,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": pdrink,
                    "height": 20,
                    "width": 20
                }
            ]
        },
        "color": {
            "value": "#CCC"
        },
        "size": {
            "value": 30,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 10,
                "sync": false
            }
        }
    },
    "retina_detect": false
};

export default particlesConfig;