import React from 'react'
import {Link} from 'react-router-dom'
import './hero.scss'
import {slides} from '../../data'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import gsap from 'gsap'

function Hero() {

    const [slideIndex, setSlideIndex] = React.useState({ count: 0 })
    const numSlides = slides.length -1;

    let subtextEL = React.useRef(null);
    let actionEL = React.useRef(null);

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

    React.useEffect(()=> {
        gsap.from([subtextEL, actionEL], {
            duration: 1,
            opacity: 0,
            height: 20,
            transformOrigin: 'bottom',
            ease: 'power3.inOut',
            stagger: {
              amount: 0.1
            }
        })
    },[slideIndex])

    return (
        <header className="hero">
            <div className="hero-slide" style={{ backgroundImage: `url(${slides[slideIndex.count].img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="hero-slide__title">
                <h4>{`${slides[slideIndex.count].title}`}</h4>
                    <p ref={(el) =>{subtextEL = el}}>{`${slides[slideIndex.count].subtext}`}</p>
                    <Link to="/shop" className="hero-slide__cta" ref={(el) =>{actionEL = el}}>Shop now</Link>
                </div>
                <div className="hero-slide__controls">
                    <button className="prev" onClick={()=> handlePrev()}><FaAngleLeft /></button>
                    <button className="next" onClick={()=> handleNext()}><FaAngleRight /></button>
                </div>
            </div>
        </header>
    )
}

export default Hero
