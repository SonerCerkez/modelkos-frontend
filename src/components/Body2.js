import './Body2.css'
import '../App.css'
import './Button.css'
import img from '../assets/2392.png'
import img1 from '../assets/longline.png'
import img2 from '../assets/shortline.png'
import img3 from '../assets/aboutus.png'




function Body2() {
    
    return (
        
        <div className='container-2'>
            <div className='container--majtas'>
                <img src={img} alt='model7'/>
                </div>
                
                <div className='container--djathtas'> 
                <div className="longline">
                <img src={img1} alt='model8'/>
                </div>   
                <div className="shortline">
                <img src={img2} alt='model8'/>
                </div> 
                <div className="aboutus">
                <img src={img3} alt=""/>
                </div>
                
                <div className="para2">
                <p>ModelKos was build in fundamental principles of supplying quality talent to quality clients. 
                    The number of beautiful women in Kosovo is extensive. With all these talents around we have 
                    decided to give them the chance to be models. We are one of the fastest growing agency's in Kosovo.</p>
                    
                    <button>Read More</button>    
                    </div>                           
            </div>
        </div>
             
        
         
    )
}





export default Body2