import './Clients.css'
import '../App.css'
import './Button.css'


import img3 from '../assets/quote1.png'
import img2 from '../assets/agency.png'
import img4 from '../assets/shortl.png'
import img5 from '../assets/robert.png'
import img6 from '../assets/robertkrasniqi.png'
import img7 from '../assets/quote2.png'
import img15 from '../assets/working.png'
import img8 from '../assets/shortl.png'
import img9 from '../assets/ana.png'
import img10 from '../assets/anagashi.png'
import img11 from '../assets/quote3.png'
import img16 from '../assets/had.png'
import img12 from '../assets/shortl.png'
import img13 from '../assets/diana.png'
import img14 from '../assets/dianasopi.png'
import img1 from '../assets/background.png'










function Clients() {
    
    return (
        
        <div className="clients">          
            <div className="text">
                <h1>What Clients Say About Us</h1>
            </div>
                <div className="background--image">
                    <img src={img1} alt=""/>
                </div>
                <div className="client1">
                <img src={img3} alt=""/>
                <img src={img2} alt=""/>
                <img src={img4} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
                </div>
                
               <div className="client2">
                <img src={img7} alt=""/>
                <img src={img15} alt=""/>
                <img src={img8} alt=""/>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
                </div>
      
                <div className="client3">
                <img src={img11} alt=""/>
                <img src={img16} alt=""/>
                <img src={img12} alt=""/>
                <img src={img13} alt=""/>
                <img src={img14} alt=""/>
                </div>
               
                
            </div>           
                       
    
              
                
             

         
    )
}

export default Clients

