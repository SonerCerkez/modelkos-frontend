import './Portfolio2.css'
import '../App.css'
import './Button.css'
import './Button.js'
import img1 from '../assets/group1.png'
import img2 from '../assets/group2.png'
import img3 from '../assets/group3.png'
import img4 from '../assets/group4.png'




import { Button } from './Button'
 




function Portfolio2() {
    
    return (
        <div className='portfolio2--line'>
        <div className='portfolio2--style'>
        <img src={img1} alt=""/>
        <div className="first1">           
        <p>We organize expenssive talents for <br /> commercials, campaigns, <br /> stores, showrooms and shops.</p>
        </div>
         <div className="portfoliobutton">
        <Button buttonStyle='btn--outline'>Learn More</Button>
        </div>  
        </div>
        
        

        <div className='portfolio2--style1' >
        
        <img src={img2} alt=""/>
        <div className="second1">
        <p>With coaching, individual <br /> discussions and trainings we <br /> get the best out of our talents.</p>
        </div>
        
        <div className="coaching">
            
        
        <div className="portfoliobutton1">
        <Button buttonStyle='btn--outline'>Learn More</Button>  
        </div>
        </div>
        
        </div>

        <div className='portfolio2--style2'>
        
        <img src={img3} alt=""/>
        <div className="third1">
    <p> ModelKos is at your side in Selection <br /> and Casting. We organize smooth <br /> processes for you and your customers. </p>
        <div className="portfoliobutton1">
        <Button buttonStyle='btn--outline'>Learn More</Button>
        </div>  
        </div>
        
        </div>

        <div className= 'portfolio2--style3'>
        
        <img src={img4} alt=""/>   
        <div className="fourth1">  
        <p>Additional services: Social Media, <br /> Infuencer, Castings and switching at <br /> top photographers and videographers.</p>
        <div className="portfoliobutton3">
        <Button buttonStyle='btn--outline'>Learn More</Button> 
        </div> 
        </div>   
        
        </div> 
                                     
    </div>    

         
    )
};





export default Portfolio2