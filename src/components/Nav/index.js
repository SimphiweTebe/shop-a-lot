import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa';
import {GiHamburgerMenu, GiShoppingBag} from 'react-icons/gi'
import './style.scss'
import { useSelector } from 'react-redux';

function Nav() {
    const cartItems = useSelector(state => state.cart.cartList)
    const [isOpen, setOpen] = useState(false)
    const [count, setCount] = useState(0)

    const showMenu = isOpen ? "nav__menu--open" : "nav__menu"
    const showCart = isOpen ? "nav__actions--open" : "nav__actions"
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
                        count > 0 ? <span>{count}</span> : ''
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
