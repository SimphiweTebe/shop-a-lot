import React from 'react'
import './signup.scss'
import MailchimpSubscribe from "react-mailchimp-subscribe"

function SignUp() {
    return (
        <div className="signup">
            <h4>Signup to our newsletter</h4>
            <div className="signup-container">
                <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
            </div>
        </div>
    )
}

export default SignUp
