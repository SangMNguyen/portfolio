import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/attempt.jpg';
import Image2 from '../assets/background1.jpg';
import Image3 from '../assets/background3.jpg';
import Image4 from '../assets/bean.png';

export default class Biography extends Component {
    render() {
        return (
            <div className="biography">
                <Carousel fade={true} touch={true} keyboard={true} indicators={true} controls={true} interval={null}>
                    <Carousel.Item as="slide"> 
                        <img src={Image1} alt="bioImage1"/>
                        <div>
                            I was born in Vietnam, and moved often from place to place.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item as="slide">
                        <img src={Image2} alt="bioImage2"/>
                        <div>
                            Why programming? I've always had a knack for.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item as="slide">
                        <img src={Image3} alt="bioImage3"/>
                        <div>
                            My other hobbies include photography and screenplay writing.
                        </div>
                    </Carousel.Item>
                    <Carousel.Item as="slide">
                        <img src={Image4} alt="bioImage4"/>
                        <div>
                            In this field, I am very mindful of my actions and responsibilities.
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}