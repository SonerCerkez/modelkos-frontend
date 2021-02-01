import React from 'react'
import { Button } from './Button'
import './Newsletter.css'
import '../App.css'
import img1 from '../assets/artwork.png'


function Newsletter() {
    return (


        <div className="newsletter-items">
            <div className="image">
            <img src={img1} alt=""/>
            </div>
            <div className="newsletter">                
                <h1>Subscribe to our Newsletter</h1>
            </div>
            
            <div className="flex-items">
            <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Enter your e-mail'
            />
            <div className="newsletter">
            <Button buttonStyle='btn--outline'>Subscribe</Button>
            </div>
          </form>
            </div>
            
        </div>
    )
}
export default Newsletter