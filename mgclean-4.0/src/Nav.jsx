import React from 'react'
import { useState } from 'react'
import image1 from './assets/mgcleanpros-transparent.png'

export default function Navbar() {
    const [menu, setMenu] = useState(false)

    function toggleMenu() {
        setMenu(prevMenu => !prevMenu)
    }

    return (
        <div className='nav-div'>
            <header>
                <div className="title-div">
                    <img src={image1} className='logo'></img>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    {menu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i> }
                </div>
                
            </header>
            <nav className={`nav ${menu ? '' : 'hide'}`}>
                <a>Home</a>
                <a>Services</a>
                <a>Book Now</a>
                <a>About</a>
            </nav>
        </div>
    )
}