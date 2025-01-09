import React, { useState } from 'react';

const email = require("../assets/email.png");
const copied = require("../assets/copied.png");
const phone = require("../assets/phone.png");

const Contact = () => {

    const [isCopied, toggleCopied] = useState(false);

    const copyAddress = () => {
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
        toggleCopied(true);

        setTimeout(() => toggleCopied(false), 3500);
    }

    return (
        <div>
            <div className={`contact`}>
                <h2>GET IN TOUCH.</h2>
                <div className={"phoneNumber"} title={"Phone Number"}>
                    <img src={phone} alt="Phone: "/>
                    <span>(862) 223-0708</span>
                </div>
                <div className={"emailAddress"} title={isCopied ? "Copied!" : "Copy Address"} onClick={copyAddress}>
                    <img src={email} alt="Email: " className={isCopied ? "poof" : "appear"}/>
                    <img src={copied} alt="Copied: " className={isCopied ? "appear" : "poof"}/>
                    <span id={"address"}>sangnguyenpublic@gmail.com</span>
                    <span className={`bubble ${isCopied ? "appear" : "poof"}`}>Copied!</span>
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
export default Contact;