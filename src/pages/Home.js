import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={`main`}>
            <h3 id="typing">I am</h3>
            <h1>SANG M. NGUYEN</h1>
            <div className="links">
                <Link to="/about" title="View About Me">About Me</Link>
                <Link to="/projects" title="View Projects">Projects</Link>
                <Link to="/contact" title="View Contact Info">Contact</Link>
            </div>
            <p className="credits">Designed &amp; Developed by <span>Sang Nguyen</span></p>
        </div>
    );
}

export default Home;