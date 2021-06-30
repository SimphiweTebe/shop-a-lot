import React from 'react'
import {Link} from 'react-router-dom'

function index() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/">Shop</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">About</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">Contact</Link>
                    </li>
                </ul>
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link to="/">My Account</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/">FAQ</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">Terms and Conditions</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default index
