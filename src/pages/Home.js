import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="main">
                <h1>S A N G &nbsp; M. &nbsp; N G U Y E N</h1>
                <div className="links">
                    <Link to="/bio">Biography</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>                
            </div>
        );
    }
}