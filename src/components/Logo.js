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
            <div className={`logo`} style={{color: this.state.color}}><span>SN</span>
                <svg height="75" width="75" viewBox="0 0 75 75" style={{position: 'absolute', left: '14px', top: '-8px'}}>
                    <circle id='logoRing' cx="37.5" cy="37.5" r="35"/>
                </svg>
            </div>
        );
    }
}