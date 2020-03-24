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

export default class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Image1, Image2, Image3, Image4],
            backgrounds: [Back1, Back2, Back3, Back4],
            titles: ['Pong', 'Project GG', 'Discord Bot', 'Thought4Thought'],
            links: [],
            text: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Proin dictum eleifend massa eu porttitor. Nam vel nunc lectus. 
            Cras lacinia lobortis ipsum auctor mollis. Mauris ut varius ipsum. 
            Quisque non quam at arcu placerat lobortis et sed eros. Maecenas 
            molestie elementum justo. Phasellus vitae pretium nibh. `],
        }
    }

    render() {
        const images = [Image1, Image2, Image3, Image4];
        
        return (
            <div>
                <div className={`projects`}>
                    <Showcase 
                        images={images}
                        backgrounds={this.state.backgrounds}
                        titles={this.state.titles}
                        text={this.state.text[0]}
                    />
                </div>
            </div>
        );
    }
}