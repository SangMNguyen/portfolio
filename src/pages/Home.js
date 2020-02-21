import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    render() {
        return (
            <div className={`main ${this.props.inView ? 'current' : ''}`}>
                <h3 id="typing">I am</h3>
                <h1>SANG M. NGUYEN</h1>
                <div className="links">
                    <Link to="/bio" title="View Biography">Biography</Link>
                    <Link to="/projects" title="View Projects">Projects</Link>
                    <Link to="/contact" title="View Contact Info">Contact</Link>
                </div>
                <p className="credits">Designed &amp; Coded by <span>Sang Nguyen</span> | Pictures by <span>Bryant Lee</span></p>
            </div>
        );
    }
}