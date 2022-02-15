import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 
import { Button } from './Button'
import img1 from '../assets/modelkoslogo.png'

 
function Navbar() {

    const[click, setClick] = useState(false)
    const [button, setButton] = useState(true)
  

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, []) 

    window.addEventListener('resize', showButton);


    



    return (
        <div>
            
            <nav className="navbar active">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                <img src={img1} alt=""/>
                </Link>              
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/artists' className='nav-links' onClick={closeMobileMenu}>
                        Artists
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/becomeamodel' className='nav-links' onClick={closeMobileMenu}>
                        Become a Model
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                        News
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Log in
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/register' className='nav-links-mobile' onClick={closeMobileMenu}>
                        REGISTER
                    </Link>
                </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
                {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar