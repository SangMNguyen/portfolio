import React, {Component} from 'react';

//import Checkmark from '../assets/checkmark.svg';

export default class InputField extends Component {

    render() {
        return (
            <div className="inputField">
                <label htmlFor={this.props.name}>{this.props.title}{/*this.props.filled && <img src={Checkmark} title={'Completed!'} alt={''}/> */}</label>
                <input 
                    type={this.props.name === 'email' ? 'email' : 'text'} 
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChange}
                    className={this.props.filled ? 'filled' : ''}
                    required
                />
            </div>
        );
    }
}