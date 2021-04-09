import React from 'react'
import logo from '../assets/imgs/logo.svg'
import BackgroundImage from '../assets/imgs/homepage/hero-bg-desktop.jpg'

export default function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="container">
                <div className="content">
                    <i className="logo"><img src={logo} alt="logo" /></i>
                    <h1>  Exquisite dining since 1989 </h1>
                    <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                    <button>book a table</button>
                </div>
            </div>
        </div>
    )
}
