import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShopList } from '../redux/actions/storeActions';
import _ from 'underscore';
import { Link } from 'react-router-dom';
import LoadSpinner from '../components/LoadSpinner';
import Banner from '../components/Banner';
import Filter from '../components/Filter';

function Shop() {
    const dispatch = useDispatch();
    const shopFront = useSelector(state => state.storeList.items)
    const filteredList = useSelector(state => state.filteredList.items)

    React.useEffect(()=> {
        dispatch(getShopList())
        window.scrollTo(0,0)
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
        if(!_.isEmpty(shopFront)){

            const product = !_.isEmpty(filteredList) ? filteredList : shopFront

            return (
                <>
                <Filter />
                <section className="store-front">
                    {
                        product.map(item => (
                            <Link to={`/product/${item.sys.id}`} className="item" key={item.sys.id}>
                                <div className="item-image" >
                                    <img src={item.fields.productThumbnail.fields.file.url} alt={item.title} />
                                </div>
                                <div className="item-info">
                                    <h4 className="title">{item.fields.title}</h4>
                                    <h4 className="price">R{item.fields.price}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </section>
                </>
            )
        }
    }

    return (
        <main className="page">
            <Banner title="Season Catalogue">
                <p className="hero-subtext">Hero subtext will go here.</p>
            </Banner>
            {
                renderStore()
            }
        </main>
    )
}

export default Shop
