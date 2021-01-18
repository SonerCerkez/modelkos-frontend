import './Body.css'
import '../App.css'
import './Button.css'
import img from '../assets/10366.png'




function Body() {
    
    return (
        
        <div className='container-1'>
            <div className='box-1'>
                <h1>Our Story</h1>             
                </div>
                <div className='box-2'>
                <div className='foto'>
                <img src={img} alt="model8"/> 
                </div>     
                 <div className="para">           
                <p>ModelKos was build in fundamental principles of supplying quality talent to quality clients. The number of beautiful women
                    in Kosovo is extensive. With all these talents around we have decided to give them the chance to be models.
                    We are one of the fastest growing agency's in Kosovo.
                </p>         
                </div>          
                
            <button>Read More</button> 
                                             
        </div>        
        </div>  
        
         
    )
}





export default Body