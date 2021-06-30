import React from 'react'
import _ from 'underscore'
import axios from 'axios'
import LoadSpinner from '../components/LoadSpinner'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'

function Product(props) {
    const productId = props.match.params.id
    const [currentProduct, setProduct] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const dispatch = useDispatch();

    React.useEffect(()=>{
        getProduct(productId)
        window.scrollTo(0,0)
    },[])

    const getProduct = async (id) => {
        try{
            setLoading(true)
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(res.data)
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
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details">
                        <h3 className="title">{product.title}</h3>
                        <h4 className="price">${product.price}</h4>
                        <p className="description">{product.description}</p>
                        <button className="add-to-cart" onClick={addProduct}>Add to basket</button>
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
