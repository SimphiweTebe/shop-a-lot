import React from 'react'
import _ from 'underscore'
import { createClient } from 'contentful'
import LoadSpinner from '../components/LoadSpinner'

import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

const store = createClient({
    space: 'xqdklds0mr1n',
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
})

function Product(props) {
    const productId = props.match.params.id
    const [currentProduct, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const dispatch = useDispatch();

    React.useEffect(()=>{
        getProduct(productId)
        window.scrollTo(0,0)
        // eslint-disable-next-line
    },[])

    const getProduct = async () => {
        try{
            setLoading(true)
            const res = await store.getEntry(productId)
            setProduct(res)
            setLoading(false)
        }catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    const renderProduct = ()=> {
        
        if(loading){
            return (
                <LoadSpinner />
            )
        }

        if(!_.isNull(currentProduct)){

            const product = currentProduct
            const addProduct = () => {
                dispatch(addToCart(product))
            }
            
            return (
                <section className="product">
                    <div className="product-image">
                        <img src={product.fields.productThumbnail.fields.file.url} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h3 className="title">{product.fields.title}</h3>
                        <h4 className="price">R{product.fields.price}</h4>
                        <ul className="description">
                            <li className="description">
                                <strong>Description:</strong>
                                <p>{product.fields.description}</p>
                            </li>
                            <li className="size">
                                <p>Size:</p>
                                <select name="size" id="size">
                                    {
                                        product.fields.size.map((size, index) => (
                                            <option value={size} key={index}>{size}</option>
                                        ))
                                    }
                                </select>
                            </li>
                        </ul>
                        {
                            product.fields.outOfStock ? <button className="add-to-cart" disabled>Out of Stock</button> 
                            : <button className="add-to-cart" onClick={addProduct}>Add to basket</button>
                        }
                    </div>
                </section>
            )
        }

        if(error){
            return (
                <section className="product">
                    <h1>{error}</h1>
                </section>
            )
        }

        return (
            <section className="product">
                <h4>Product not found.</h4>
            </section>
        )

    }
    
    return (
        <main className="slingle-page">
            { renderProduct() }
        </main>
    )
}

export default Product
