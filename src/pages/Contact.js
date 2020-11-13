import React, {Component} from 'react';
import InputField from '../components/InputField';

const form = `<form className="emailForm" onSubmit={this.sendEmail}>
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
</form>`

const email = require("../assets/email.png");
const copied = require("../assets/copied.png");
const phone = require("../assets/phone.png");

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            copied: false,
            tooltip: false,
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

    copyAddress = () => {
        let address = document.getElementById("address");

        if(document.body.createTextRange) {
            let range = document.body.createTextRange();
            range.moveToElementText(address);
            range.select();
        } else if(window.getSelection) {
            let selection = window.getSelection();
            let range = document.createRange();
            range.selectNodeContents(address);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            return;
        }

        document.execCommand("copy");
        this.setState({copied: true, tooltip: true});

        setTimeout(() => {this.setState({copied: false})}, 3500)
    }

    render() {
        return (
            <div>
                <div className={`contact`}>
                    <h2>GET IN TOUCH.</h2>
                    <div className={"phoneNumber"} title={"Phone Number"}>
                        <img src={phone} alt="Phone: "/>
                        <span>(862) 223-0708</span>
                    </div>
                    <div className={"emailAddress"} title={this.state.copied ? "Copied!" : "Copy Address"} onClick={this.copyAddress}>
                        <img src={email} alt="Email: " className={this.state.copied ? "poof" : "appear"}/>
                        <img src={copied} alt="Copied: " className={this.state.copied ? "appear" : "poof"}/>
                        <span id={"address"}>sangnguyenpublic@gmail.com</span>
                        <span className={`bubble ${this.state.copied ? "appear" : "poof"}`}>Copied!</span>
                    </div>
                    <a 
                        href="mailto:sangnguyenpublic@gmail.com" 
                        title="Send an E-Mail using your local mailing client." 
                        className="sendEmail" 
                        style={{textDecoration: "none"}}
                    >
                        Send Message
                    </a>
                </div>
            </div>
        );
    }
}