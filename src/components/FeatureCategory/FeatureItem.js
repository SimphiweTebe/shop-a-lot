import React from 'react'
import {useHistory} from 'react-router-dom'

function FeatureItem({item}) {

    const history = useHistory()

    return (
        <div className="featured-item" style={{background: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}} onClick={()=> history.push('/shop')}>
            <div className="item-wrapper">
                <h4 className="featured-item__title">{item.title}</h4>
                <button className="featured-item__link">SHOP</button>
            </div>
            <div className="feature-overlay"></div>
        </div>
    )
}

export default FeatureItem
