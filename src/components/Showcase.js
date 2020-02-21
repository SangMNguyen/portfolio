import React, {Component} from 'react';
import Pip from './Pip';

const arrow = require("../assets/arrowhead.svg");

export default class Showcase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            images: this.props.images,
            text: this.props.text,
            backgrounds: this.props.backgrounds,
            titles: this.props.titles,
        }
    }

    nextSlide = () => {
        if(this.state.currentIndex === 3) {
            return;
        }
        this.setState({currentIndex: this.state.currentIndex + 1});
    }

    prevSlide = () => {
        if(this.state.currentIndex === 0) {
            return;
        }
        this.setState({currentIndex: this.state.currentIndex - 1});
    }

    setSlide = (num) => {
        if(this.state.currentIndex === num) {
            return;
        }
        this.setState({currentIndex: num});
    }

    render() {
        return (
            <div className="showcase">
                <div className="view">
                    {this.state.currentIndex > 0 && 
                        <div className="slide left">
                            <div className="image">
                                <img src={this.state.images[this.state.currentIndex - 1]} alt={`View ${this.state.currentIndex - 1}`}/>
                            </div>
                            <div className="text">
                                <h2 className="title">{this.state.titles[this.state.currentIndex - 1]}</h2>
                                {this.state.text}
                            </div>
                        </div>
                    }
                    <div className="slide active">
                        <div className="image">
                            <img src={this.state.images[this.state.currentIndex]} alt={`View ${this.state.currentIndex}`}/>
                        </div>
                        <div className="text">
                            <h2 className="title">{this.state.titles[this.state.currentIndex]}</h2>
                            {this.state.text}
                        </div>
                    </div>
                    {this.state.currentIndex < this.state.images.length - 1 && 
                        <div className="slide right">
                            <div className="image">
                                <img src={this.state.images[this.state.currentIndex + 1]} alt={`View ${this.state.currentIndex + 1}`}/>
                            </div>
                            <div className="text">
                                <h2 className="title">{this.state.titles[this.state.currentIndex + 1]}</h2>
                                {this.state.text}
                            </div>
                        </div>
                    }
                </div>
                <div className="slideNav">
                    <img src={arrow} id={'leftArrow'} onClick={this.prevSlide} alt={''}/>
                    <div className="pipBox">
                        <Pip active={this.state.currentIndex === 0} onClick={() => this.setSlide(0)}/>
                        <Pip active={this.state.currentIndex === 1} onClick={() => this.setSlide(1)}/>
                        <Pip active={this.state.currentIndex === 2} onClick={() => this.setSlide(2)}/>
                        <Pip active={this.state.currentIndex === 3} onClick={() => this.setSlide(3)}/>
                    </div>
                    <img src={arrow} id={'rightArrow'} onClick={this.nextSlide} alt={''}/>
                </div>
            </div>
        );
    }
}