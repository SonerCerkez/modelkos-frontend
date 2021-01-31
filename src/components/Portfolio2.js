import './Portfolio2.css'
import '../App.css'
import './Button.css'
import './Button.js'
import img1 from '../assets/group1.png'
import img2 from '../assets/group2.png'
import img3 from '../assets/group3.png'
import img4 from '../assets/group4.png'
import img5 from '../assets/organize.png'
import img6 from '../assets/coaching.png'
import img7 from '../assets/modelkos.png'
import img8 from '../assets/additional.png'
import { Button } from './Button'
 




function Portfolio2() {
    
    return (
        <div className='portfolio2--line'>
        <div className='portfolio2--style' >
        <img src={img1} alt=""/>           
        <img src={img5} alt=""/>    
         
        <Button buttonStyle='btn--outline'>Learn More</Button>  
        </div>
        
        

        <div className='portfolio2--style1' >
        
        <img src={img2} alt=""/>
        <div className="coaching">
        <img src={img6} alt=""/>
        <Button buttonStyle='btn--outline'>Learn More</Button>  
        </div>
        
        </div>

        <div className='portfolio2--style2'>
        
        <img src={img3} alt=""/>
        <div className="imgse">
        <img src={img7} alt=""/>
        
        <Button buttonStyle='btn--outline'>Learn More</Button>  
        </div>
        
        </div>

        <div className= 'portfolio2--style3'>
        
        <img src={img4} alt=""/>   
        <div className="imgei">  
        <img src={img8} alt=""/>
        <Button buttonStyle='btn--outline'>Learn More</Button>  
        </div>   
        
        </div> 
                                     
    </div>    

         
    )
};





export default Portfolio2