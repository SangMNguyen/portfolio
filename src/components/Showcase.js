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
        if(this.state.currentIndex === this.state.images.length - 1) {
            this.setState({currentIndex: 0})
            return;
        }
        this.setState({currentIndex: this.state.currentIndex + 1});
    }

    prevSlide = () => {
        if(this.state.currentIndex === 0) {
            this.setState({currentIndex: this.state.images.length - 1})
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

    handleKey = (e) => {
        let key = e.key.split('Arrow');
        if(key.length !== 2) {
            return;
        }
        switch(key[1]) {
            case 'Right':
                this.nextSlide();
                break;
            
            case 'Left':
                this.prevSlide();
                break;
            
            default:
                return;
        }
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKey, false);
    }

    render() {
        return (
            <div className={`showcase ${this.state.backgrounds ? 'display' : ''}`}>
                <div className="view">
                    {this.state.backgrounds && <img className="background" alt={''}/>}
                    {this.state.images.map((item, index) => 
                        <div className={`slide ${this.state.currentIndex === index ? 'active' : ''}`} key={index}>
                            <div className="image">
                                <img src={item} alt={`View ${index}`}/>
                            </div>
                            <div className="text">
                                <h2 className="title">{this.state.titles[index]}</h2>
                                {this.state.text}
                            </div>
                        </div>
                    )}
                </div>
                <div className="slideNav">
                    <img src={arrow} id={'leftArrow'} onClick={this.prevSlide} alt={''}/>
                    <div className="pipBox">
                        {this.state.images.map((item, index) => 
                            <Pip key={index} active={this.state.currentIndex === index} onClick={() => this.setSlide(index)}/>
                        )}
                    </div>
                    <img src={arrow} id={'rightArrow'} onClick={this.nextSlide} alt={''}/>
                </div>
            </div>
        );
    }
}