import React from 'react'

function FeatureItem({item}) {

    return (
        <div className="featured-item" style={{background: `url(${item.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="item-wrapper">
                <h4 className="featured-item__title">{item.title}</h4>
                <button className="featured-item__link">SHOP</button>
            </div>
            <div className="feature-overlay"></div>
        </div>
    )
}

export default FeatureItem
