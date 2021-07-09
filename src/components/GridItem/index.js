import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { decrementCart, incrementCart, removeCart } from '../../redux/actions/cartActions'

function GridItem({item}) {

    const dispatch = useDispatch()

    const handleDecrement =  (item) => {
        if(item.qty < 2 ){
            dispatch(removeCart(item.sys.id))
        }
        dispatch(decrementCart(item.sys.id, item.qty))
    }

    return (
        <div className="cart-grid__item" key={item.sys.id}>
        <div className="image">
            <img src={item.fields.productThumbnail.fields.file.url} alt={item.title} width="120" />
        </div>
        <div className="cart-title">
            <h4 className="title">{item.fields.title}</h4>
            <div className="cart-event">
                <div className="cart-event__qty">
                    <button className="qty" onClick={()=> handleDecrement(item)}>-</button>
                    <span>{item.qty}</span>
                    <button className="qty" onClick={()=> dispatch(incrementCart(item.sys.id, item.qty))}>+</button>
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
    )
}

export default GridItem
