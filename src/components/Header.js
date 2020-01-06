import React, {Component} from 'react';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="left">
                    {!this.props.home && <Link to="/"><Logo color="white"/></Link>}
                    <a href="../assets/Resume.pdf" target="_blank" id="resume">Resume</a>
                </div>
                {!this.props.home &&
                    <div className="center">
                        <Link to="/bio">Biography</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                }
                <div className="right">
                    <a href="https://www.linkedin.com/in/sangmnguyen/" 
                        target="_blank" 
                        rel="noopener noreferrer" >
                        <img src={LinkedIn} style={{height: "40px", width: "40px"}} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/SangMNguyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{margin: "0 25px 0 25px"}}>
                        <img src={Github} style={{height: "40px", width: "40px"}} alt="Github" />
                    </a>
                </div>
            </div>
        );
    }
}