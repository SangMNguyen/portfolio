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
        text: `This project was created with the purpose of understanding the internal
        structure of creating a game. I learned concepts from a tutorial that dealt with
        the basics of making a game, and used those concepts to recreate this popular game,
        Pong. The core gameplay mechanic was finished, and it is a fully functional local
        2-player game.`,
        link: 'https://github.com/SangMNguyen/Pong', 
    }, {
        image: Image2,
        title: 'Project GG',
        text: `The goal of this project was to create a social media platform that focused
        on videogame fans as its primary audience. It was a collaboration between colleagues
        and it is a complete work-in-progress which had to be temporarily shelved due to 
        academic and work responsibilities.`,
        link: 'https://github.com/sangmattxavier/Project-GG',
    }, {
        image: Image3,
        title: 'Discord Bot',
        text: `Discord bots are simply helpers or additional forms of entertainment for a Discord
        Server. There are many Discord bots that offer different features and the intention of
        my bot was to have a combination of these features, readily available. Currently, the
        bot offers many recreational options like games (blackjack, rock/paper/scissors, etc.)`,
        link: 'https://github.com/SangMNguyen/DiscordBot',
    }, {
        image: Image4,
        title: 'Thought4Thought',
        text: `Thought4Thought was a startup company that offered a project for the NJIT
        Capstone program. My reponsibilities included implementing wireframes that our UX Designer 
        came up with, translating the wireframes to a high-fidelity design, discussing a logical 
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