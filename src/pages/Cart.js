import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../redux/actions/cartActions'
import { FaWindowClose } from 'react-icons/fa'

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

    console.log(cartState);

    return (
        <section className="cart-page">
            <h1 className="cart-page__title">Shopping Cart</h1>
            <div className="cart-grid">
                {
                    cartState.map(item => (
                        <div className="cart-grid__item" key={item.sys.id}>
                            <div className="image">
                                <img src={item.fields.productThumbnail.fields.file.url} alt={item.title} width="120" />
                            </div>
                            <div className="cart-title">
                                <h4 className="title">{item.fields.title}</h4>
                                <div className="cart-event">
                                    <div className="cart-event__qty">
                                        <button className="qty">-</button>
                                        <span>{item.qty}</span>
                                        <button className="qty">+</button>
                                    </div>
                                    <div className="cart-event__price">
                                        <span>Price:</span><strong>R{`${item.fields.price * item.qty}`}</strong> 
                                    </div>
                                    <div className="cart-event__delete" onClick={()=> dispatch(removeCart(item.sys.id))}>
                                        <FaWindowClose />
                                    </div>
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
