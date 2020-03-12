import React, {Component} from 'react';
import ShowcasePlus from '../components/ShowcasePlus';

const Image1 = require('../assets/bio1.jpg');
const Image2 = require('../assets/bio2.jpg');
const Image3 = require('../assets/bio3.jpg');
const Image4 = require('../assets/bio4.jpg');

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
        return (
            <div className={`projects ${this.props.inView ? 'current' : ''}`}>
                <ShowcasePlus 
                    images={this.state.images}
                    backgrounds={this.state.backgrounds}
                    titles={this.state.titles}
                    text={this.state.text[0]}
                />
            </div>
        );
    }
}