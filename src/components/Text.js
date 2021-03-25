import './Text.css'
import '../App.css'
import './Button.css'
import img2 from '../assets/shortline.png'
import img3 from '../assets/shortl.png'
import img4 from '../assets/longline.png'




function Text() {
    
    return (
        
        <div className="container--portfoliomid">
            <div className="items--container">
            <img src={img4} alt=""/>
            <img src={img2} alt=""/>
            <div className="modelbook">
            <h1>Book a model</h1>
            </div>
            <div className="paragraph">
            <p>We attach great importance to ambition and punctuality. We reach together with you high quality, <br /> representative results which convince your customers.  </p>
            </div>
            <div className="offer">
            <h1>What we offer</h1>
            </div>
            <div className="shortl">
            <img src={img3} alt=""/>
            </div>
            </div>
                </div>
                
             
                                  

        
         
    )
}

export default Text