import React from 'react'
import './banner.scss'

function Banner({image, title, children}) {
    return (
        <section className="banner">
            <div className="container">
                <h4>{title}</h4>
                {children}
            </div>
        </section>
    )
}

export default Banner
