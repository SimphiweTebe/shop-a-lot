import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa'

function index() {
    return (
        <footer className="footer">
            <div className="container">
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">Stores</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">Contact</Link>
                    </li>
                </ul>
                <ul className="footer-menu">
                    <li className="footer-menu-item">
                        <Link to="/cart">My Cart</Link>
                    </li>
                    <li className="footer-menu-item">
                        <Link to="/">FAQ</Link>
                    </li>
                    <li className="footer-menu-item">
                    <Link to="/">Terms and Conditions</Link>
                    </li>
                </ul>
                <ul className="footer-social">
                    <li className="footer-social-header">
                       <h4>Follow us</h4>
                    </li>
                    <li className="footer-social-item">
                        <Link to="/">
                            <FaFacebookSquare />
                        </Link>
                    </li>
                    <li className="footer-social-item">
                        <Link to="/">
                            <FaTwitterSquare />
                        </Link>
                    </li>
                    <li className="footer-social-item">
                        <Link to="/">
                            <FaInstagramSquare />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Simpiwe Tebe</p>
            </div>
        </footer>
    )
}

export default index
