import React from 'react';
import { Link } from 'react-router-dom';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/propic.jpeg');
const Image2 = require('../assets/stock.jfif');

const content = [
    {
        customImg: Image1,
        title: 'About Me',
        text: `I am a Frontend Developer at ForeFront Inc., a Salesforce Partner and technical
        consultancy. In my role, I innovate solutions beyond Salesforce's out-of-the-box
        functionalities, as well as refactor and maintain multiple code bases using testing
        frameworks and version control. I bring industry experience in refining requirements
        and prototyping for web applications. I hold a Bachelor of Science from New Jersey
        Institute of Technology and am based in the New York Metropolitan Area. Outside of work,
        I play video games and dabble in photography.`
    },
    {
        image: Image2,
        title: 'Technical Skills',
        text: <>
            <ul>
                <li>
                    Front-End: Lightning Web Components, Aura Components, React.js, JSX, ES6,
                    JavaScript, .LESS, HTML5, CSS3, Vue.js, Electron.js, Redux
                </li>
                <li>
                    Back-End: Apex, Node.js, Google Firebase, Express, Java, Spring Boot, Python,
                    C++, Amazon Web Services
                </li>
                <li>
                    Tools: Salesforce, JIRA, Github, BitBucket, Visual Studio Code, git, npm,
                    Webpack, Zeplin, AdobeXD, Figma, Trello, Clubhouse
                </li>
            </ul>
            <div>
                <h1>Project Links</h1>
                <ul>
                    <li>
                        <Link to="/projects/1">javierlarosa.design (moved)</Link>
                    </li>
                    <li>
                        <Link to="/projects/2">jordangrossphotography.com (moved)</Link>
                    </li>
                    <li>
                        <Link to="/projects/3">Thought4Thought</Link>
                    </li>
                    <li>
                        <Link to="/projects/4">Pong</Link>
                    </li>
                    <li>
                        <Link to="/projects/5">Discord</Link>
                    </li>
                </ul>
            </div>
        </>,
    }
];

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