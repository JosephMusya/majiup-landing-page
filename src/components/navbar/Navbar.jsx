import React from 'react';
import './navbar.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className='nav'>
            <div className='icon'>
                <strong>Majiup</strong>
            </div>
            <div className='nav-content'>
                <div className='nav-elements'>
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li>Products <RiArrowDropDownLine size={23} /></li>
                    <li>Resources  <RiArrowDropDownLine size={23} /></li>
                    <li className='contacts'>Contacts <RiArrowDropDownLine size={23} />
                        <div className='contact-list'>
                            <li>Email</li>
                            <li>Phone</li>
                            <li>Twitter</li>
                        </div>
                    </li>  
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
