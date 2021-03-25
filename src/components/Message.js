import './Message.css'
import '../App.css'
import './Button.css'


import img1 from '../assets/line31.png'
import img2 from '../assets/line57.png'
import img6 from '../assets/messages.png'






function Message() {
    
    return (
        
        <div className="messages">
            <div className="images">
                
            <img src={img2} alt=""/>
            <div className="touch">
            <h1>Get In Touch With Us</h1>
            </div>
            <div className="shortline">
            <img src={img1} alt=""/>
            </div>
            <div className="send">
            <h1>Have any Questions Send us A Message Right Now!</h1>
            </div>
            <div className="contact">
            <h2>Contact us anytime, we are ready to talk to you!</h2>
            </div>
            </div>
            <div className="message">
            <img src={img6} alt=""/>
            </div>
            
            
        </div>
              
                
             

         
    )
}

export default Message

