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
            titles: this.props.titles,
            backgrounds: this.props.backgrounds,
            links: this.props.links,
            hideView: this.props.backgrounds ? false : null,
        }
    }

    nextSlide = () => {
        if(this.state.currentIndex === this.props.content.length - 1) {
            this.setState({currentIndex: 0})
            return;
        }
        this.setState({currentIndex: this.state.currentIndex + 1});
    }

    prevSlide = () => {
        if(this.state.currentIndex === 0) {
            this.setState({currentIndex: this.props.content.length - 1})
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

    showBackground = () => {
        this.setState({ hideView: !this.state.hideView})
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKey, false);
    }

    render() {
        const slides = this.props.content;
        

        return (
            <div className={`${this.props.backgrounds ? 'showcaseplus' : 'showcase'}`}>
                {this.props.backgrounds && this.state.backgrounds.map((item, index) => 
                    <img className={`background ${this.state.currentIndex === index ? 'active' : ''} ${this.state.hideView ? 'unblur' : ''}`} src={item} alt={''} />
                )}
                <div className={`view ${this.state.hideView ? 'hidden' : ''}`}>
                    {slides.map((item, index) => 
                        <div className={`slide ${this.state.currentIndex === index ? 'active' :
                        this.state.currentIndex >= index ? 'next' :
                        this.state.currentIndex <= index ? 'prev' : ''}`} key={index}>
                            {item.link ? <a href={item.link} title={"Go to Github"} target="_blank" rel="noopener noreferrer" className="image">
                                <img src={item.image} alt={`View ${index}`}/>
                            </a> : 
                            <div className="image" title={this.props.backgrounds ? "No Github link attached." : ""}>
                                <img src={item.image} alt={`View ${index}`}/>
                            </div>}
                            <div className="text">
                                <h2 className="title">{item.title}</h2>
                                {item.text}
                                {item.link && <a href={item.link} title={"Go to " + item.title} target="_blank" rel="noopener noreferrer" className="image"></a>}
                            </div>
                        </div>
                    )}
                </div>
                <div className="slideNav">
                    <img src={arrow} id={'leftArrow'} onClick={this.prevSlide} alt={''}/>
                    <div className="pipBox">
                        {slides.map((item, index) => 
                            <Pip key={index} active={this.state.currentIndex === index} onClick={() => this.setSlide(index)}/>
                        )}
                    </div>
                    <img src={arrow} id={'rightArrow'} onClick={this.nextSlide} alt={''}/>
                </div>
                {this.props.backgrounds &&
                    <div className="hideView" onMouseEnter={this.showBackground} onMouseLeave={this.showBackground}>
                        Show Background
                    </div>
                }
            </div>
        );
    }
}