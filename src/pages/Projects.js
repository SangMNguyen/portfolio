import React, {Component} from 'react';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/pong.png');
const Image2 = require('../assets/ggimg.png');
const Image3 = require('../assets/discordimg.png');
const Image4 = require("../assets/t4timg.png");

const Back1 = require('../assets/pong.gif');
const Back2 = require('../assets/ggback.png');
const Back3 = require('../assets/discordback.png');
const Back4 = require('../assets/t4tback.png');

const backgrounds = [Back1, Back2, Back3, Back4];

const content = [
    {
        image: Image1,
        title: 'Pong',
        text: `This was a project I started as a 
        preliminary step to understand the 
        internal structure of a video game. I 
        learned the basics of creating a game 
        from a tutorial. I modified those 
        concepts to recreate this popular 
        game. The core gameplay mechanic 
        was finished, and it is a fully functional 
        local 2-player game.`,
        link: 'https://github.com/SangMNguyen/Pong', 
        linkColor: "green",
    }, {
        image: Image2,
        title: 'Project GG',
        text: `The goal of this project was to create a 
        social media platform that focused on 
        gamers as its primary audience. It was 
        a collaboration between colleagues
        and it is a complete work-in-progress 
        which had to be temporarily shelved due to 
        academic and work responsibilities. We 
        intend on resuming this project.`,
        link: 'https://github.com/sangmattxavier/Project-GG',
        linkColor: "orange"
    }, {
        image: Image3,
        title: 'Discord Bot',
        text: `Discord Bots are simply helpers or additional forms of entertainment for a Discord
        server. There are many Discord Bots that offer different features and the intention of
        my bot was to have a combination of these features, readily available, like blackjack,
        rock/paper/scissors, etc.`,
        link: 'https://github.com/SangMNguyen/DiscordBot',
        linkColor: "purple"
    }, {
        image: Image4,
        title: 'Thought4Thought',
        text: `This was a startup company that offered a project for the NJIT
        Capstone program. My reponsibilities included implementing wireframes that our UX Designer 
        drew, translating the wireframes to a high-fidelity design, discussing a logical 
        flow of the application, and connecting the Back-End API to Front-End functions.`
    }
];

export default class Projects extends Component {

    render() {        
        return (
            <div>
                <div className={`projects`}>
                    <Showcase 
                        content={content}
                        backgrounds={backgrounds}
                    />
                </div>
            </div>
        );
    }
}