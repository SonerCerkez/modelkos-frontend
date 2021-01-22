import './Text.css'
import '../App.css'
import './Button.css'
import img1 from '../assets/bookmodel.png'
import img2 from '../assets/shortline.png'
import img3 from '../assets/shortl.png'
import img4 from '../assets/longline.png'
import img5 from '../assets/attach.png'
import img6 from '../assets/offer.png'




function Text() {
    
    return (
        
        <div className="container--portfoliomid">
            <div className="items--container">
            <img src={img4} alt=""/>
            <img src={img2} alt=""/>
            <div className="modelbook">
            <img src={img1} alt=""/>
            </div>
            <img src={img5} alt=""/>
            <img src={img6} alt=""/>
            <div className="shortl">
            <img src={img3} alt=""/>
            </div>
            </div>
                </div>
                
             
                                  

        
         
    )
}

export default Text