import React from 'react'
import './signup.scss'

function SignUp() {
    return (
        <div className="signup">
            <h4>Signup to our newsletter</h4>
            <div className="signup-container">
                <input type="email" />
                <input type="submit" value="Subscribe" />
            </div>
        </div>
    )
}

export default SignUp
