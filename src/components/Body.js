import React from 'react'
import './Body.css'
import '../App.css'
import './Button'




function Body() {
    
    return (
        <div className='flex'>
            <div className="text">
            <h3>Our Story</h3>
            <p>ModelKos was built on the fundamental principles of supplying quality talent to quality clients. The number
                of beautiful women in Kosovo is extensive. With all these talents around we  have decided to give them the chance to be models.
                We are one of the fastest growing agency's in Kosovo.</p> 
                <button className='button2'>Learn More</button>
            <div className="">
                <div>  
                    <img src={('/images/girl2.jpg.jpg')} alt='model' />                                       
                </div>
            </div>
        </div>
        </div>
        
        
        
    )
}

export default Body