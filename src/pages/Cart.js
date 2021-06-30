import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {

    const cartState = useSelector(state => state.cart.cartList)
    console.log(cartState)

    return (
        <section className="cart-page">
            {
                cartState.length > 0 ? <h1>You have {cartState.length} item(s) in your basket</h1> : <h1>Your basket is empty.</h1>
            }
            <div className="cart-grid">
                {
                    cartState.map(item => (
                        <div className="cart-grid__item" key={item.id}>
                            <h4>{item.title}</h4>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Cart
