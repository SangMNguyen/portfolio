import React, {Component} from 'react';
import InputField from '../components/InputField';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    sendEmail = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.get('name'));
        console.log(data.get('email'));
        console.log(data.get('message'));
    }

    render() {
        return (
            <div className={`contact ${this.props.inView ? 'current' : ''}`}>
                <h2>GET IN TOUCH.</h2>
                <form className="emailForm" onSubmit={this.sendEmail}>
                    <InputField 
                        name="name" 
                        title="Name" 
                        placeholder="i.e. John Smith" 
                        onChange={this.handleChange} 
                        filled={this.state.name.length > 0}
                    />
                    <InputField 
                        name="email" 
                        title="Email Address" 
                        placeholder="i.e. johnsmith@gmail.com" 
                        onChange={this.handleChange}
                        filled={/^[a-zA-Z0-9.]+@[a-z]+\.(([a-z]{3})|([a-z]{2}\.[a-z]{2}))$/.test(this.state.email)}
                    />
                    <span className="inputField">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            type="text" 
                            name="message" 
                            placeholder="Your projects are subpar, but you look nice enough." 
                            onChange={this.handleChange} 
                            className={this.state.message.length > 0 ? 'filled' : ''} 
                            required
                        />
                    </span>
                    <button title="Send Message">Send Message</button>
                </form>
            </div>
        );
    }
}