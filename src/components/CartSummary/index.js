import React from 'react'
import './cartSummary.scss'

function CartSummary({count, total}) {
    return (
        <div className="cart-summary">
            <h4 className="cart-summary__header">Order Summary</h4>
            <ul className="cart-summary__details">
                <li><strong>Number of items: {count}</strong></li>
                <li><strong>Total cost: R{total}</strong></li>
            </ul>
            <button className="cart-summary__button">Checkout</button>
        </div>
    )
}

export default CartSummary
