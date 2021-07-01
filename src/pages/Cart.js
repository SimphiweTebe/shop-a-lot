import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../redux/actions/cartActions'

function Cart() {

    const cartState = useSelector(state => state.cart.cartList)
    const [count, SetCount] = React.useState(0)
    const dispatch = useDispatch()

    React.useState(()=>{ window.scrollTo(0,0) },[])
    
    React.useEffect(()=>{
        let count = 0;
        cartState.forEach(item => count += item.qty)
        SetCount(count)
    },[cartState])

    return (
        <section className="cart-page">
            {
                count > 0 ? <h1>You have {count} item<small>(s)</small> in your basket</h1> : <h1>Your basket is currently empty.</h1>
            }
            <div className="cart-grid">
                {
                    cartState.map(item => (
                        <div className="cart-grid__item" key={item.id}>
                            <div className="image">
                                <img src={item.image} alt={item.title} width="120" />
                            </div>
                            <div className="cart-title">
                                <h4>{item.title}</h4>
                                <div className="cart-event">
                                    <h5>Quantity: {item.qty}</h5>
                                    <h5>Price: ${`${item.price * item.qty}`}</h5>
                                    <button className="cart-remove" onClick={()=> dispatch(removeCart(item.id))}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Cart
