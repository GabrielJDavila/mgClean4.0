import React, { useState } from 'react'
import employeeImg from './assets/employee-img.jpg'
import introImg from './assets/intro-img.jpg'
import kitchenImg from './assets/kitchen-img.jpg'
import kitchen2Img from './assets/kitchen2-img.jpg'

export default function Main() {
    const images = [
        kitchenImg,
        introImg,
        employeeImg,
        kitchen2Img
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const infiniteScroll = () => {
        if(currentIndex === images.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    React.useEffect(() => {
        const interval = setInterval(() => {infiniteScroll()}, 3000)
        return () => clearInterval(interval)
    })
    // const nextImg = () => {
    //     if(currentIndex === images.length - 1) {
    //         return setCurrentIndex(0)
    //     }
    //     return setCurrentIndex(currentIndex + 1)
    // }
    // const prevImg = () => {
    //     if(currentIndex === images.length - 4) {
    //         return setCurrentIndex(3)
    //     }
    //     return setCurrentIndex(currentIndex - 1)
    // }

    const backgroundCarousel = {
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '60vh'
    }

    return (
        <main>
            <section className="section hero">
                <div className='carousel-container' style={backgroundCarousel}>
                    {/* <h2 className="section-title">Hero</h2> */}
                    {/* <img src={images[currentIndex]} className='carousel-img'></img> */}
                    {/* <button onClick={prevImg} className='carousel-btn prev'>Prev</button>
                    <button onClick={nextImg} className='carousel-btn next'>Next</button> */}
                </div>
            </section>
            <section className="section services">
                <h2 className="section-title">Services</h2>
            </section>
            <section className="section book">
                <h2 className="section-title">Book Now</h2>
            </section>
            <section className="section about">
                <h2 className="section-title">About</h2>
            </section>
        </main>
    )
}