import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu, GiShoppingBag} from 'react-icons/gi';
import supreme from '../../images/logo.gif';
import './style.scss';
import { useSelector } from 'react-redux';

function Nav() {
    const cartItems = useSelector(state => state.cart.cartList)
    const [isOpen, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const showMenu = isOpen ? "nav__menu--open" : "nav__menu"
    const history = useHistory();

    useEffect(()=>{
        let count = 0
        cartItems.forEach(item => count += item.qty)
        setCount(count)
    },[cartItems])

    const handleNav = () => {
        setOpen(false)
        window.scrollTo(0,0)
    }

    return (
        <>
        <nav className="nav">
            <Link to="/" className="mobile mobile-logo">
                <img src={supreme} alt="Supreme logo" />
            </Link>
            <button id="menu-toggle"  onClick={()=> setOpen(!isOpen)}><GiHamburgerMenu /></button>
            <div className="wrapper">
                <div className={showMenu}>
                    <Link to="/" onClick={handleNav}>
                        <span className="mobile">Home</span>
                        <img src={supreme} alt="Supreme logo" className="desktop" />
                    </Link>
                    <Link to="/shop" onClick={handleNav}>Shop</Link>
                    <Link to="/cart" onClick={handleNav} className="mobile">Cart</Link>
                    <Link to="/" onClick={handleNav}>Stores</Link>
                    <Link to="/" onClick={handleNav}>Contact</Link>
                </div>
                <div className="nav__actions">
                    <div className="cart" onClick={()=> history.push('/cart')} >
                        {
                            count > 0 ? <span>{count}</span> : ''
                        }
                        <GiShoppingBag />
                    </div>
                    <div className="search">
                        <FaSearch />
                    </div>
                </div>
            </div>
        </nav>
        { isOpen && <div className="overlay" /> }
        </>
    )
}

export default Nav
