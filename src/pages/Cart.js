import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'

function Cart() {

    const cartState = useSelector(state => state.cart.cartList)
    const [count, SetCount] = React.useState(0)
    const [total, SetTotal] = React.useState(0)

    React.useState(()=>{ window.scrollTo(0,0) },[])
    
    React.useEffect(()=>{
        let count = 0;
        let total = 0;
        cartState.forEach(item => total += (item.fields.price * item.qty))
        cartState.forEach(item => count += item.qty)
        SetCount(count)
        SetTotal(total)
    },[cartState])

    return (
        <section className="cart-page">
                {
                    count > 0 ? (
                        <>
                        <h1 className="cart-page__title">Shopping Cart</h1>
                        <div className="cart-page__wrapper">
                            <div className="cart-grid">
                                {
                                    cartState.map(item => (
                                        <CartItem item={item} key={item.sys.id} />
                                    ))
                                }
                            </div>
                            <CartSummary count={count} total={total}/>
                        </div>
                        </>
                    ) : (
                        <div className="empty-cart">
                            <h4 className="title">Cart is Empty</h4>
                            <p>You haven't added anything to your cart.</p>
                            <Link to="/shop">Show now</Link>
                        </div>
                    )
                }
        </section>
    )
}

export default Cart
