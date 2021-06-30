import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu, GiShoppingBag} from 'react-icons/gi'
import './style.scss'
import { useSelector } from 'react-redux';

function Nav() {
    const cartItems = useSelector(state => state.cart.cartList)
    const [isOpen, setOpen] = useState(false)
    const showMenu = isOpen ? "nav__menu--open" : "nav__menu"
    const showCart = isOpen ? "nav__actions--open" : "nav__actions"
    const history = useHistory();

    const handleNav = () => {
        setOpen(false)
        window.scrollTo(0,0)
    }

    return (
        <>
        <nav className="nav">
            <button id="menu-toggle"  onClick={()=> setOpen(!isOpen)}><GiHamburgerMenu /></button>
            <div className={showMenu}>
                <Link to="/" onClick={handleNav}>Home</Link>
                <Link to="/shop" onClick={handleNav}>Shop</Link>
                <Link to="/" onClick={handleNav}>About</Link>
                <Link to="/" onClick={handleNav}>Contact</Link>
            </div>
            <div className={showCart}>
                <div className="cart">
                    {
                        cartItems.length > 0 ? <span>{cartItems.length}</span> : ''
                    }
                    <GiShoppingBag onClick={()=> history.push('/cart')} />
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
