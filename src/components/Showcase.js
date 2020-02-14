import React, {Component} from 'react';

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
        this.setState({currentIndex: this.state.currentIndex + 1});
    }

    prevSlide = () => {
        this.setState({currentIndex: this.state.currentIndex - 1});
    }

    render() {
        return (
            <div className="showcase">
                <div className="view">
                    {/*this.state.currentIndex > 0 && 
                        <div className="slide">
                            <div className="image">
                                <img src={this.state.images} alt={`View ${this.state.currentIndex}`}/>
                            </div>
                            <div className="text">
                                {this.state.text}
                            </div>
                        </div> */
                    }
                    <div className="slide">
                        <div className="image">
                            <img src={this.state.images} alt={`View ${this.state.currentIndex + 1}`}/>
                        </div>
                        <div className="text">
                            <h2 className="title">{this.state.titles}</h2>
                            {this.state.text}
                        </div>
                    </div>
                    {/*this.state.currentIndex < this.state.images.length && 
                        <div className="slide">
                            <div className="image">
                                <img src={this.state.images} alt={`View ${this.state.currentIndex}`}/>
                            </div>
                            <div className="text">
                                {this.state.text}
                            </div>
                        </div> */
                    }
                </div>
                <div className="slideNav">
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}