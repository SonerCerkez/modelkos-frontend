import './Body2.css'
import '../App.css'
import './Button.css'
import img from '../assets/2392.png'
import img1 from '../assets/longline.png'
import img2 from '../assets/shortline.png'
import { Button } from './Button'




function Body2() {
    
    return (
        
        <div class="container--body2">

          <div class="block-1">
            <img src={img} alt="picture" />
          </div>

          <div class="block-2">
            <div className="inline-2">
            <img src={img1} alt="longline"/>    
            </div>
            <div className="inline-1">     
            <h1>AboutUs</h1>
            <img src={img2} alt="shortline" />
            </div>   
            <p>ModelKos was build in fundamental principles of supplying quality talent to quality clients. The number of beautiful women in Kosovo is extensive.
               With all these talents around we have decided to give them the chance to be models. We are one of the fastest growing agency's in Kosovo. </p> 
          </div>
          </div>
             
        
         
    )
}





export default Body2