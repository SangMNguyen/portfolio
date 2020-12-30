import React from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/pong.png');
const Image2 = require('../assets/grossphotos.png');
const Image3 = require('../assets/discordimg.png');
const Image4 = require('../assets/t4timg.png');

const Back1 = require('../assets/pong.gif');
const Back2 = require('../assets/grossphotosback.png')
const Back3 = require('../assets/discordback.png');
const Back4 = require('../assets/t4tback.png');

const LinkPic1 = require('../assets/grosslink.png');

const backgrounds = [Back2, Back4, Back1, Back3];
const content = [
    {
        image: Image2,
        title: 'jordangrossphotography.com',
        text: `I developed a complete web application for a New Jersey-based 
        photographer. This web application offers a session booking system 
        where users could schedule a shoot with her. It serves as a portfolio 
        for her work. I collaborated with the client on designing and reviewing 
        mockups.`,
        link: 'https://jordangrossphotography.com/',
        notGithub: true,
        linkPic: LinkPic1,
        linkColor: "blue"
    }, {
        image: Image4,
        title: 'Thought4Thought',
        text: `This was a startup company that offered a project for the NJIT
        Capstone program. My reponsibilities included implementing wireframes 
        that our UX Designer drew, translating the wireframes to a high-fidelity 
        design, discussing a logical flow of the application, and connecting the 
        Back-End API to Front-End functions.`
    }, {
        image: Image1,
        title: 'Pong',
        text: `This was a project I started as a preliminary step to understand 
        the internal structure of a video game. I learned the basics of creating 
        a game from a tutorial. I modified those concepts to recreate this popular 
        game. The core gameplay mechanic was finished, and it is a fully functional 
        local 2-player game.`,
        link: 'https://github.com/SangMNguyen/Pong', 
        linkColor: "green",
    }, {
        image: Image3,
        title: 'Discord Bot',
        text: `Discord Bots are simply helpers or additional forms of entertainment for a Discord
        server. There are many Discord Bots that offer different features and the intention of
        my bot was to have a combination of these features, readily available, like blackjack,
        rock/paper/scissors, etc.`,
        link: 'https://github.com/SangMNguyen/DiscordBot',
        linkColor: "purple"
    }
];

const Projects = () => {
    const { id } = useParams();
        
    return (
        <div>
            <div className={`projects`}>
                <Showcase
                    startValue={id}
                    content={content}
                    backgrounds={backgrounds}
                    prevLoc={'/about'}
                    prevLocName={'About Me'}
                    nextLoc={'/contact'}
                    nextLocName={'Contact Me'}
                />
            </div>
        </div>
    );
}
export default Projects;