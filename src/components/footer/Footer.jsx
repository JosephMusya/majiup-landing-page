import React from 'react';
import './footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div>
                    <strong style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Majiup</strong>
                </div>
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
                <article>Privacy Policy</article>
                <article>Terms & Conditions</article>
                <article>Follow Us</article>
            </div>
        </div>
    );
}

export default Footer;
