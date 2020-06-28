import React, {Component} from 'react';

export default class Pip extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
        }
    }

    render() {
        return (
            <div className={`pip ${this.props.active ? 'active' : ''}`} onClick={this.props.onClick} title={this.props.title}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32">
                    <circle cx="16" cy="16" r="8" stroke="white" strokeWidth="2" fill="none" />
                </svg>
            </div>
        );
    }
}