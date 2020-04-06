import React, {Component} from 'react';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/bio1.jpg');
const Image2 = require('../assets/bio2.jpg');
const Image3 = require('../assets/bio3.png');
const Image4 = require('../assets/bio4.jpg');

export default class Biography extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Image1, Image2, Image3, Image4],
            titles: ['Who Am I?', 'Why Programming?', 'What Else Do I Do?', 'My Aspirations for Life.'],
            text: [''],
        }
    }

    render() {
        const images = [Image1, Image2, Image3, Image4];

        return (
            <div>
                <div className={`biography`}>
                    <Showcase images={images} titles={this.state.titles}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin dictum eleifend massa eu porttitor. Nam vel nunc lectus. 
                    Cras lacinia lobortis ipsum auctor mollis. Mauris ut varius ipsum. 
                    Quisque non quam at arcu placerat lobortis et sed eros. Maecenas 
                    molestie elementum justo. Phasellus vitae pretium nibh. `}/>
                </div>
            </div>
        );
    }
}