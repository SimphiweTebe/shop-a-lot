import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import Nav from './Nav'
import Footer from './Footer'
import Cart from '../pages/Cart'

function App() {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={Product} />
                <Route path="/cart" component={Cart} />
            </Switch>
            <Footer />
        </>
    )
}

export default App
