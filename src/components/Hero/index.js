import React from 'react'
import {Link} from 'react-router-dom'
import './hero.scss'
import {slides} from '../../data'

function Hero() {

    const [slideIndex, setSlideIndex] = React.useState({ count: 0 })
    const numSlides = slides.length -1;

    const handleNext = () => {

        if(slideIndex.count >= numSlides){ 
            setSlideIndex({ count: 0 })
        }else{
            setSlideIndex({ count: slideIndex.count + 1 })
        }

    }

    const handlePrev = () => {

        if(slideIndex.count <= 0){ 
            setSlideIndex({ count: numSlides })
        }else{
            setSlideIndex({ count: slideIndex.count - 1 })
        }

    }

    return (
        <header className="hero">
            <div className="hero-slide" style={{ backgroundImage: `url(${slides[slideIndex.count].img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="hero-title">
                    <h4>{`${slides[slideIndex.count].title}`}</h4>
                    <p>Some subtext here</p>
                    <Link to="/shop">Shop now</Link>
                </div>
                <div className="hero-slide-controls">
                    <button className="prev" onClick={()=> handlePrev()}>B</button>
                    <button className="next" onClick={()=> handleNext()}>F</button>
                </div>
            </div>
        </header>
    )
}

export default Hero
