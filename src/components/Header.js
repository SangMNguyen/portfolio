import React, {Component} from 'react';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import ResumeIcon from '../assets/resume.png';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

import Resume from '../assets/Resume.pdf';

export default class Header extends Component {
    render() {
        return(
            <div className={`header`}>
                <div className={`left ${!this.props.home ? 'show' : ''}`}>
                    <Link to="/" title="Back to Title Page"><Logo color="white"/></Link>
                    <a href={Resume} target="_blank" rel="noopener noreferrer" id="resume" className={this.props.home ? 'home' : 'away'} title="View Resume">
                        <img src={ResumeIcon} style={{height: "60px", width: "60px"}} alt="Resume" title="View Resume"/><span>RESUME</span>
                    </a>
                </div>
                <div className={`center ${!this.props.home ? 'show' : ''}`}>
                    <Link to="/bio" className={this.props.curLoc === '/bio' ? 'active' : ''} title="View Biography">BIOGRAPHY</Link>
                    <Link to="/projects" className={this.props.curLoc === '/projects' ? 'active' : ''} title="View Projects">PROJECTS</Link>
                    <Link to="/contact" className={this.props.curLoc === '/contact' ? 'active' : ''} title="View Contact Info">CONTACT</Link>
                </div>
                <div className="right">
                    <a href="https://www.linkedin.com/in/sangmnguyen/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        id="linkedin">
                        <img src={LinkedIn} style={{height: "100%", width: "100%"}} alt="LinkedIn" title="Link to LinkedIn"/>
                    </a>
                    <a href="https://github.com/SangMNguyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{margin: "0 25px 0 25px"}}
                        id="github">
                        <img src={Github} style={{height: "100%", width: "100%"}} alt="Github" title="Go to Github Profile"/>
                    </a>
                </div>
            </div>
        );
    }
}