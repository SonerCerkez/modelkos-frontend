import './Portfolio.css'
import '../App.css'
import './Button.css'
import './Button.js'
import img1 from '../assets/portfolio1.png'
import img2 from '../assets/portfolio2.png'
import img3 from '../assets/portfolio3.png'
import img4 from '../assets/portfolio4.png'




function Portfolio() {
    
    return (
        
        <div className='portfolio--line'>
            <div className='portfolio--style' >
            <button>View More</button>
            <img src={img1} alt="portfolio1"/>           
            </div>

            <div className='portfolio--style1' >
            <button>View More</button>
            <img src={img2} alt="portfolio2"/>
            </div>

            <div className='portfolio--style2'>
            <button>View More</button>
            <img src={img3} alt="portfolio3"/>
            </div>

            <div className= 'portfolio--style3'>
            <button>View More</button>
            <img src={img4} alt="portfolio4"/>     
            </div> 
                                         
        </div>  
        
         
         
    )
}





export default Portfolio