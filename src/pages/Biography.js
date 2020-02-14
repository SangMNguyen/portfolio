import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Showcase from '../components/Showcase';

import Image1 from '../assets/john.jpg';
import Image2 from '../assets/background1.jpg';
import Image3 from '../assets/background3.jpg';
import Image4 from '../assets/bean.png';

import CarouselCaption from 'react-bootstrap/CarouselCaption';

export default class Biography extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Image1, Image2, Image3, Image4],
            titles: ['Who Am I?', 'Academics', 'Why Programming?', 'Life Aspirations'],
        }
    }

    render() {
        return (
            <div className={`biography ${this.props.inView ? 'current' : ''}`}>
                <Showcase images={Image1} titles={`Who Am I?`}
                text={`Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Proin dictum eleifend massa eu porttitor. 
                Nam vel nunc lectus. Cras lacinia lobortis ipsum auctor mollis. 
                Mauris ut varius ipsum. Quisque non quam at arcu placerat lobortis et
                sed eros. Maecenas molestie elementum justo. Phasellus vitae pretium nibh. `}/>
            </div>
        );
    }
}