import './Form.css'
import '../App.css'
import './Button.css'





function Form() {
    
    return (
        
        <div className='container--form'>
            <form>
                <fieldset>                   
                    <label for='fname'>First name</label> 
                    <input type='text' id='fname' name='fname' size='50' placeholder='Enter your name'></input>
                    <label for='fname'>Last name</label> 
                    <input type='text' id='lname' name='lname' size="50" height='30px' placeholder='Enter your lname'></input>
                </fieldset>
                </form>          


        </div>
             
        
         
    )
}





export default Form