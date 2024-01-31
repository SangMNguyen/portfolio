import React from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../components/Showcase';

const LaRosaImage = require('../assets/larosa.png');
const PongImage = require('../assets/pong.png');
const GrossPhotosImage = require('../assets/grossphotos.png');
const DiscordImage = require('../assets/discordimg.png');
const T4TImage = require('../assets/t4timg.png');

const LaRosaBack = require('../assets/larosaback.gif');
const PongBack = require('../assets/pong.gif');
const GrossPhotosBack = require('../assets/grossphotosback.png')
const DiscordBack = require('../assets/discordback.png');
const T4TBack = require('../assets/t4tback.png');

const LaRosaLinkPic = require('../assets/larosalink.png');
const GrossPhotoLinkPic = require('../assets/grosslink.png');

const backgrounds = [LaRosaBack, GrossPhotosBack, T4TBack, PongBack, DiscordBack];
const content = [
    {
        image: LaRosaImage,
        title: 'javierlarosa.design',
        subtext: '(URL is deprecated but site remains live on another URL)',
        text: `This is a React application that serves as a portfolio for the client's
        past projects and showcases his design skills as a UX/UI Designer. This project
        was a success as it resulted with the client obtaining a role in the UX/UI space.`,
        link: 'https://javierdesign-e154d.web.app/projects',
        notGithub: true,
        linkPic: LaRosaLinkPic,
        linkColor: "dark-gray"
    }, {
        image: GrossPhotosImage,
        title: 'jordangrossphotography.com',
        subtext: '(URL is deprecated but site remains live on another URL)',
        text: `This project was a functional web application for a New Jersey-based 
        photographer. The site offered a session booking system where users could
        schedule a shoot, a simple contact form, and a portfolio. Design choices
        were reviewed collaboratively and frequently throughout the span of the project.`,
        link: 'https://grossphotos-e3f87.web.app/',
        notGithub: true,
        linkPic: GrossPhotoLinkPic,
        linkColor: "blue"
    }, {
        image: T4TImage,
        title: 'Thought4Thought',
        text: `This was a startup company that offered a project for the NJIT
        Capstone program. My reponsibilities included implementing wireframes with
        high-fidelity, discussing design solutions for a user experience, and handling
        API endpoints from the Front-End.`
    }, {
        image: PongImage,
        title: 'Pong',
        text: `This was a project I started as a challenge to understand 
        the internal structure of a video game. I learned the basics of creating 
        a game from a tutorial. Then, I applied those concepts to recreate this popular 
        game. The core gameplay mechanic was finished, and it is a fully functional 
        local 2-player game.`,
        link: 'https://github.com/SangMNguyen/Pong', 
        linkColor: "green",
    }, {
        image: DiscordImage,
        title: 'Discord Bot',
        text: `Discord Bots are aids or additional forms of entertainment for a Discord
        server. There are many Discord Bots that offer different features and the intention of
        my bot was to have a combination of these features like blackjack,
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