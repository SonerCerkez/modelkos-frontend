import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>BECOME A MODEL OR 
                BOOK ONE</h1>
            <p>We have the best models in the industry.</p>
            <p>Superior Services for our clients and our models.</p>
            <div className="hero-btns">
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button className='btns'  
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    WATCH VIDEO <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection