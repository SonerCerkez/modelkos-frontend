import React from 'react'
import './Logo.css'
import '../App.css'
import img1 from '../assets/ZALANDO.png'
import img2 from '../assets/CK.png'
import img3 from '../assets/BOOHOO.png'
import img4 from '../assets/HM.png'
import img5 from '../assets/ZARA.png'



function Logo() {
    return(
        
        <div className="logo--container">
           
        
           <div className='portfolio--style1' >
            <img src={img1} alt=""/>
            </div>
            <div className='portfolio--style2' >
            <img src={img2} alt=""/>
            </div>
            
            <div className='portfolio--style3' >
            <img src={img3} alt=""/>
            </div>
            
            <div className='portfolio--style4' >
            <img src={img4} alt=""/>
            </div>
            <div className='portfolio--style5' >
            <img src={img5} alt=""/>
            </div>
            <div className='logo-text'>
            <h1>OUR CLIENTS</h1>
            </div>
            
         
            
        </div>
    )
}

export default Logo