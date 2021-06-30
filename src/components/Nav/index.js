import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FaShoppingCart, FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi'
import './style.scss'
import { useSelector } from 'react-redux';

function Nav() {
    const cartItems = useSelector(state => state.cart.cartList)
    const [isOpen, setOpen] = useState(false)
    const showMenu = isOpen ? "nav__menu--open" : "nav__menu"
    const showCart = isOpen ? "nav__actions--open" : "nav__actions"
    const history = useHistory();

    return (
        <>
        <nav className="nav">
            <button id="menu-toggle"  onClick={()=> setOpen(!isOpen)}><GiHamburgerMenu /></button>
            <div className={showMenu}>
                <Link to="/" onClick={()=> setOpen(false)}>Home</Link>
                <Link to="/shop" onClick={()=> setOpen(false)}>Shop</Link>
                <Link to="/" onClick={()=> setOpen(false)}>About</Link>
                <Link to="/" onClick={()=> setOpen(false)}>Contact</Link>
            </div>
            <div className={showCart}>
                <div className="cart">
                    <span>{cartItems.length}</span>
                    <FaShoppingCart onClick={()=> history.push('/cart')} />
                </div>
                <div className="search">
                    <FaSearch />
                </div>
            </div>
        </nav>
        { isOpen && <div className="overlay" /> }
        </>
    )
}

export default Nav
