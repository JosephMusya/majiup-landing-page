import React from 'react';
import './footer.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <div className='footer-content'>
                {/* <div>
                    <strong style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Majiup</strong>
                </div> */}
                <div>
                    <strong>Products</strong>
                    <li>Water level monitor (single)</li>
                    <li>Combined water & quality</li>
                    <li>Pro combined</li>
                </div>
                <div>
                    <strong>Contact us</strong>
                    <li>info@majiup</li>
                    <li>support@majiup</li>
                    <li>+254757405701</li>
                </div>
                <div>
                    <strong>Resources</strong>
                    <li>Hardware status checklist</li>
                    <li>Software use instructions</li>
                    <li>Periodic Maintenance</li>
                </div>
            </div>
            <div className='bottom'>
                <img src={logo} alt="logo" />
                <article>Privacy Policy</article>
                <article>Terms of Service</article>
                <article>&copy; Majiup 2023</article>
            </div>
        </div>
    );
}

export default Footer;
