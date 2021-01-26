import './Clients.css'
import '../App.css'
import './Button.css'


import img3 from '../assets/quote1.png'
import img4 from '../assets/shortl.png'
import img5 from '../assets/robert.png'
import img6 from '../assets/robertkrasniqi.png'
import img7 from '../assets/quote2.png'
import img8 from '../assets/shortl.png'
import img9 from '../assets/ana.png'
import img10 from '../assets/anagashi.png'
import img11 from '../assets/quote3.png'
import img12 from '../assets/shortl.png'
import img13 from '../assets/diana.png'
import img14 from '../assets/dianasopi.png'










function Clients() {
    
    return (
        
        <div className="clients">
            
            
            <div className="child1">
               
                <img src={img3} alt=""/>
                <h4>Modelkos is and amazing agency.I found the perfect models I needed for my marketing campaign</h4>  
                <img src={img4} alt=""/>
                <img src={img5} alt=""/>
                <img src={img6} alt=""/>
            </div>
            <div className="child1">
                <img src={img7} alt=""/>
                <h4>Working with ModeKos is just great. They have a very professional team, full of creative ideas and timely in execution</h4>
                <img src={img8} alt=""/>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
            </div>
            <div className="child1">
                <img src={img11} alt=""/>
                <h4>I had best experience as a model. They are very friendly and treat you very well.</h4>
                <img src={img12} alt=""/>
                <img src={img13} alt=""/>
                <img src={img14} alt=""/>
            </div>
            
        </div>
              
                
             

         
    )
}

export default Clients

