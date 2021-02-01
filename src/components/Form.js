import './Form.css'
import '../App.css'
import './Button.css'
import { Button } from './Button'
 




function Form() {
    
    return (
        
        <div className='container--form'>
           
            <form> 
              
                    <h1>Send us a message</h1>

                    <div className="emrimbiemri">                
                    <label for='fname'>First name</label> 
                    
                    <input type='text' id='fname' name='fname'  placeholder='Enter your name'></input> <br />
                    <label for='fname'>Last name</label>  
                    <input type='text' id='lname' name='lname' placeholder='Enter your lname'></input> <br />
                    <br />                   
                    </div>         
                    <div className="subject">                 
                    <label for='fname'>Subject</label> <br />
                    <input type='text' id='sname' name='sname' size="70" height='30px' placeholder='Enter a subject'></input> <br />
                    </div>
                    
                    <h3>Message</h3>
                    <div className="textarea">
                    <textarea name="message" id="message" cols="147" rows="10">Leave us a message...</textarea>
                    </div>
                    
                    <div className="formbutton">
                    <Button buttonStyle='btn--outlinee1234'>Submit</Button>
                    </div>
                
                </form>          
</div>

        
             
        
         
    )
}





export default Form