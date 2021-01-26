import './Message.css'
import '../App.css'
import './Button.css'


import img1 from '../assets/line31.png'
import img2 from '../assets/line57.png'
import img3 from '../assets/touch.png'
import img4 from '../assets/have.png'
import img5 from '../assets/contact.png'
import img6 from '../assets/messages.png'











function Message() {
    
    return (
        
        <div className="messages">
            <div className="images">
                
            <img src={img2} alt=""/>
            <div className="touch">
            <img src={img3} alt=""/>
            </div>
            <div className="shortline">
            <img src={img1} alt=""/>
            </div>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            </div>
            <div className="message">
            <img src={img6} alt=""/>
            </div>
            
            
        </div>
              
                
             

         
    )
}

export default Message

