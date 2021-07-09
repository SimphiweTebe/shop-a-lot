import React from 'react'
import './banner.scss'
import defaultImage from '../../images/hero/hero2.jpg'

function Banner({image, title, children}) {

    const heroURL = image ? image : defaultImage

    return (
        <section className="banner" style={{ background: `url(${heroURL})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="container">
                <h4>{title}</h4>
                {children}
            </div>
        </section>
    )
}

export default Banner
