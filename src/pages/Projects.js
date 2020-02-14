import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        return (
            <div className={`projects ${this.props.inView ? 'current' : ''}`}>Projects</div>
        );
    }
}