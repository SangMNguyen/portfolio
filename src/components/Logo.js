import React, {Component} from 'react';

export default class Logo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
            style: this.props.style
        }
    }

    render() {
        return (
            <div className="logo" style={this.state.style}>SN</div>
        );
    }
}