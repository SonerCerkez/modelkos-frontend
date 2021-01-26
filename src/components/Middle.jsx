import './Middle.css'
import '../App.css'
import './Button.css'
import img1 from '../assets/blurr.png'
import img2 from '../assets/spot.png'
import img3 from '../assets/become.png'
import img4 from '../assets/are.png'
import img5 from '../assets/pre.png'
import { Button } from './Button'





function Middle() {
    
    return (
        
        <div className='container--5'>
            <div className="content">
            <div className="custom3">
        <img src={img1} alt=""/>
        </div>
        <div className="custom1">
        <img src={img2} alt=""/>
        </div>
        </div>
        <div className="custom">
        <img src={img3} alt=""/>
        <div className="custom2">
        <img src={img4} alt=""/>
        </div>
        <div className="custom2">
        <img src={img5} alt=""/>
        </div>
        <div className="custom4">
        <Button buttonStyle='btn--outlinee12'>Become a model</Button> 
        </div>
        </div>
        </div>
        
         
    )
}

export default Middle

