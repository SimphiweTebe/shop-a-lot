import React from 'react'
import './cartSummary.scss'

function CartSummary({count, total}) {
    return (
        <div className="cart-summary">
            <h4 className="cart-summary__header">SHOPPING SUMMARY</h4>
            <ul className="cart-summary__details">
                {/* <li><strong>Items: {count}</strong></li> */}
                <li><strong>Sub total: </strong>R{total}</li>
                <li><strong>Delivery: </strong>R0</li>
                <li><strong>Total: </strong>R{total}</li>
            </ul>
            {/* <h4 className="cart-summary__sub">Payment Method:</h4>
            <ul className="cart-summary__card">
                <li><button>Credit</button></li>
                <li><button>Pay pal</button></li>
            </ul> */}
            <button className="cart-summary__button">Checkout</button>
        </div>
    )
}

export default CartSummary
