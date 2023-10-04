import React from 'react';
import './navbar.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className='nav' style={{fontFamily:'sans-serif'}}>
            <div className='icon'>
                <article>Majiup</article>
            </div>
            <div className='nav-content'>
                <div className='nav-elements'>
                    <li>Products <RiArrowDropDownLine size={23} /></li>
                    <li>Use cases</li>
                    <li>Resources  <RiArrowDropDownLine size={23} /></li>
                    <li>Contacts <RiArrowDropDownLine size={23} /></li>  
                    <li onClick={()=>navigate('/careers')}>Careers</li>
                </div>    
                <div className='call-actions'>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>          
            </div>            
        </nav>
    );
}

export default Navbar;
