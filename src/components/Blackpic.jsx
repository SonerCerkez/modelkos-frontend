import React from 'react'
import './Blackpic.css'
import '../App.css'
import img1 from '../assets/black.png'
import img2 from '../assets/blackpic.png'
import img3 from '../assets/Line.png'
import img4 from '../assets/icon.png'
import img5 from '../assets/icon.png'
import img6 from '../assets/icon.png'



function  Blackpic() {
        
    return(
        <div className='blackpic--style'>

            <div className='lineheight'>
            <img src={img3} alt="model10"/>
            </div>

            <div className='fotoja2' >
            <img src={img1} alt="model9"/>           
            </div>
            
            <div className='fotoja3'>
            <img src={img2} alt="model10"/>
            </div>  

            <div className='lineheight1'>
            <img src={img4} alt="model11"/>
            </div>

            <div className='lineheight2'>
            <img src={img5} alt="model11"/>
            </div>

            <div className='lineheight3'>
            <img src={img6} alt="model11"/>
            </div>
            
            <div className='black--text'> 
            <h1>BEING PRETTY IS BENEFICIAL BEING PROFFESIONAL IS INVALUABLE</h1>
            </div> 
            

            
                   
        </div>  
        
            
    )
}

export default Blackpic