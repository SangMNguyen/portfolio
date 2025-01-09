import React, {Component} from 'react';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/github.png';
import ResumeIcon from '../assets/resume.png';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

import Resume from '../assets/Resume.pdf';

const Header = ({ home, curLoc}) => {


    return(
        <div className={`header`}>
            <div className={`left ${home ? '' : 'show'}`}>
                <Link to="/" title="Back to Title Page"><Logo color="white"/></Link>
                <a href={Resume} target="_blank" rel="noopener noreferrer" id="resume" className={home ? 'home' : 'away'} title="View Resume">
                    <img src={ResumeIcon} style={{height: "60px", width: "60px"}} alt="Resume" title="View Resume"/><span>RESUME</span>
                </a>
            </div>
            <div className={`center ${home ? '' : 'show'}`}>
                <Link to="/about" className={curLoc === '/about' ? 'active' : ''} title="View About Me">ABOUT ME</Link>
                <Link to="/projects" className={curLoc === '/projects' ? 'active' : ''} title="View Projects">PROJECTS</Link>
                <Link to="/contact" className={curLoc === '/contact' ? 'active' : ''} title="View Contact Info">CONTACT</Link>
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
export default Header;