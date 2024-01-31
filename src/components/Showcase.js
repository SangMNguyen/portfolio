import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pip from './Pip';

import { ReactComponent as Arrow } from '../assets/arrowhead.svg';
const githubDark = require("../assets/githubDark.png");

const Showcase = props => {
    const [curIndex, setIndex] = useState(props.startValue ? props.startValue - 1 : 0);
    const [hideView, setView] = useState(props.backgrounds ? false : null);
    const history = useHistory();
    const slides = props.content;
    const backgrounds = props.backgrounds;

    const nextSlide = () => {
        if(curIndex === slides.length - 1) {
            if(props.nextLoc) {
                history.push(props.nextLoc);
            }
            return;
        }
        setIndex(curIndex + 1);
    }

    const prevSlide = () => {
        if(curIndex === 0) {
            if(props.prevLoc) {
                history.push(props.prevLoc);
            }
            return;
        }
        setIndex(curIndex - 1);
    }

    const setSlide = num => {
        if(curIndex === num) {
            return;
        }
        setIndex(num);
    }

    const handleKey = e => {
        let key = e.key.split('Arrow');
        if(key.length !== 2) {
            return;
        }
        switch(key[1]) {
            case "Right":
                nextSlide();
                break;
            
            case "Left":
                prevSlide();
                break;
            
            default:
                return;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKey, false);
        return () => document.removeEventListener("keydown", handleKey, false);
    }, [handleKey]);

    return (
        <div className={`${backgrounds ? 'showcaseplus' : 'showcase'}`}>
            {backgrounds && backgrounds.map((item, index) => 
                <img className={`background ${curIndex === index ? 'active' : ''} ${hideView ? 'unblur' : ''}`} src={item} alt={''} />
            )}
            <div className={`view ${hideView ? 'hidden' : ''}`}>
                {slides.map((item, index) => 
                    <div className={`slide ${curIndex === index ? 'active' :
                        curIndex >= index ? 'next' :
                        curIndex <= index ? 'prev' : ''}`} 
                        key={"slide" + index}
                    >
                        {item.link ? <a href={item.link} title={item.notGithub ? "Visit Project" : "Go to Repository"} target="_blank" rel="noopener noreferrer" className="image">
                            <img src={item.image} key={"github" + index} alt={`View ${index}`}/>
                        </a> : 
                        item.customImg ? <div className={`constImg`}>
                            <div className="propic">
                                <img src={item.customImg} key={"biopic"} alt={`Picture of Me`}/>
                            </div>
                        </div> :  
                        <div className={`image`} title={backgrounds ? "No Github link attached." : ""}>
                                <img src={item.image} key={"github" + index} alt={`View ${index}`}/>
                        </div>}
                        <div className="text">
                            <h2 className={`title ${item.notGithub ? "adj" : ""}`}>{item.title}</h2>
                            {item.subtext && <p className={`subtext`}>{item.subtext}</p>}
                            {item.text}
                            {item.link && 
                            <a 
                                href={item.link} 
                                title={"Go to " + item.title} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={item.linkColor}
                                id="github"
                                style={{
                                    height: "4rem", 
                                    width: "4rem", 
                                    padding: "0.375rem", 
                                    borderRadius: "10px", 
                                    position: "absolute", 
                                    bottom: "3.15rem", 
                                    right: "3.15rem"
                                }}
                            >
                                <img 
                                    src={item.notGithub ? item.linkPic : githubDark} 
                                    alt="Github Link" 
                                    title={item.notGithub ? "Visit Website" : "Go to Repository"}
                                />
                            </a>}
                        </div>
                    </div>
                )}
            </div>
            <div className={`slideNav`}>
                <div id={'leftArrow'}>
                    <Arrow
                        className={curIndex === 0 && !props.prevLoc ? "poof" : "appear"} 
                        onClick={prevSlide} 
                        title="Go Back"
                    />
                    {props.prevLoc && <Link className={`leftLink ${curIndex === 0 ? "shown" : ""}`} to={props.prevLoc}>{props.prevLocName}</Link>}
                </div>
                <div className="pipBox">
                    {slides.map((item, index) => 
                        <Pip key={index} active={curIndex === index} title={"Slide " + (index + 1)} onClick={() => setSlide(index)}/>
                    )}
                </div>
                <div id={'rightArrow'}>
                    <Arrow
                        className={curIndex === slides.length - 1 && !props.nextLoc ? "poof" : "appear"} 
                        onClick={nextSlide} 
                        title="Next Slide"
                    />
                    {props.nextLoc && <Link className={`rightLink ${curIndex === slides.length - 1 ? "shown" : ""} ${props.nextAdj ? "adjust" : ""}`} to={props.nextLoc}>{props.nextLocName}</Link>}
                </div>
            </div>
            {props.backgrounds &&
                <div 
                    className="hideView" 
                    title="Hover to See Background" 
                    onMouseEnter={() => setView(true)} 
                    onMouseLeave={() => setView(false)}
                >
                    View Background
                </div>
            }
        </div>
    );
}
export default Showcase;