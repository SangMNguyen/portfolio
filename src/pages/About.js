import React from 'react';
import { Link } from 'react-router-dom';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/propic.jfif');
const Image2 = require('../assets/stock.jfif');

const content = [
    {
        customImg: Image1,
        title: 'About Me',
        text: `I am a Full Stack Software Engineer recently graduated from New Jersey 
        Institute of Technology. My current residence is located in New Jersey. I have
        industry experience in creating multiple web applications starting with
        requirements gathering, designing, developing, refactoring, and code implmentation. 
        Outside of work, I like to play a variety of video games, especially with the ones
        with strong focus on gameplay, mechanics, and an immersive storyline (Uncharted  
        Series).`,
    },
    {
        image: Image2,
        title: 'Technical Skills',
        text: <>
            <ul>
                <li>
                    Front-End: React, JSX, JavaScript, .LESS, HTML5, JSON, Material-UI,
                    Zeplin, AdobeXD, Figma, RESTful API, Axios/Fetch, Vue.js, Electron.js,
                    Redux
                </li>
                <li>
                    Back-End: Node.js, Google Firebase, Express, Java, Spring Boot, Python,
                    C++, Amazon Web Services
                </li>
                <li>
                    Tools: Github, Visual Studio Code, git, npm, Webpack, Trello, Clubhouse
                </li>
            </ul>
            <div>
                <h1>Project Links</h1>
                <ul>
                    <li>
                        <Link to="/projects/1">Thought4Thought</Link>
                    </li>
                    <li>
                        <Link to="/projects/2">Pong</Link>
                    </li>
                    <li>
                        <Link to="/projects/3">Discord</Link>
                    </li>
                </ul>
            </div>
        </>,
    }
];

// const credit = <a
//     href={"https://www.littleghostpictures.com/"}
//     target={"_blank"}
//     style={{
//         position: "absolute",
//         left: "70%",
//         bottom: "3rem",
//         zIndex: "99999"
//     }}
//     className={"link"}
//     >
//         Pictures by Little Ghost Pictures
//     </a>

const About = () => {
    return (
        <div>
            <div className={`biography`}>
                <Showcase 
                    content={content}
                    nextLoc={'/projects'}
                    nextLocName={'Projects'}
                    nextAdj
                />
            </div>
        </div>
    );
}
export default About;