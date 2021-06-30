import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopList } from '../redux/actions/storeActions';
import _ from 'underscore';
import { Link } from 'react-router-dom';
import LoadSpinner from '../components/LoadSpinner';

function Shop() {
    const dispatch = useDispatch();
    const shopFront = useSelector(state => state.storeList)

    React.useEffect(()=> {
        dispatch(getShopList())
    },[dispatch])

    const renderStore = ()=> {
        if(shopFront.loading){
            return (
                <LoadSpinner />
            )
            
        }
        if(shopFront.error){
            return (
                <div className="error">
                    <h3>{shopFront.error}</h3>
                </div>
            )
        }
        if(!_.isEmpty(shopFront.items)){
            return (
                <section className="store-front">
                    {
                        shopFront.items.map(item => (
                            <Link to={`/product/${item.id}`} className="item" key={item.id}>
                                <div className="item-image" >
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="item-info">
                                    <h4>{item.title.length > 25 ? item.title.slice(0,30) + '...' : item.title}</h4>
                                    <h4 className="price">${item.price}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </section>
            )
        }
    }

    return (
        <main className="page">
            {
                renderStore()
            }
        </main>
    )
}

export default Shop
