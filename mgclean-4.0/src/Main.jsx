import React, { useState } from 'react'

export default function Main() {
    const images = ['1', '2', '3', '4']
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImg = () => {
        if(currentIndex === images.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }
    const prevImg = () => {
        if(currentIndex === images.length - 4) {
            return setCurrentIndex(3)
        }
        return setCurrentIndex(currentIndex - 1)
    }

    return (
        <main>
            <section className="section hero">
                <h2 className="section-title">Hero</h2>
                <div>
                    <h2>{images[currentIndex]}</h2>
                    <button onClick={prevImg}>Prev</button>
                    <button onClick={nextImg}>Next</button>
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