import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../components/Hero';
import { getFeatured } from '../redux/actions/storeActions';
import _ from 'underscore';
import { Link } from 'react-router-dom';
import SignUp from '../components/Signup';
import LoadSpinner from '../components/LoadSpinner'

function Home() {
    const dispatch = useDispatch();
    const shopFront = useSelector(state => state.featuredList)

    React.useEffect(()=> {
        dispatch(getFeatured())
    },[])

    const renderStore = ()=> {
        if(shopFront.loading){
            return (
                <LoadSpinner />
            )
        }
        if(shopFront.error){
            return (
                <div className="error">
                    <h3>{shopFront.error.message}</h3>
                </div>
            )
        }
        if(!_.isEmpty(shopFront.items)){
            return (
                <>
                <h3 className="sub-title">Just landed</h3>
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
                </>
            )
        }
    }

    return (
        <main className="page">
            <Hero />
            {
                renderStore()
            }
            <SignUp />
        </main>
    )
}

export default Home
