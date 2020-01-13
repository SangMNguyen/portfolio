import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <h1>S A N G &nbsp; M. &nbsp; N G U Y E N</h1>
                <div className="links">
                    <Link to="/bio" title="View Biography">Biography</Link>
                    <Link to="/projects" title="View Projects">Projects</Link>
                    <Link to="/contact" title="View Contact Info">Contact</Link>
                </div>                
            </div>
        );
    }
}