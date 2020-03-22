import React, {Component} from 'react';
import ShowcasePlus from '../components/ShowcasePlus';

const Image1 = "https://picsum.photos/500";
const Image2 = "https://picsum.photos/501";
const Image3 = "https://picsum.photos/502";
const Image4 = "https://picsum.photos/503";

const Back1 = require('../assets/background1.jpg');
const Back2 = require('../assets/attempt.jpg');
const Back3 = require('../assets/background3.jpg');
const Back4 = require('../assets/agheof.png');

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
                    <ShowcasePlus 
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