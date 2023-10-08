import React from 'react';
import './testimonials.css';
import { GoDash } from 'react-icons/go';
import { BsQuote } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';

// import { HiOutlineCursorArrowRays } from 'react-icons/hi';

const Testimonials = () => {
    return (
        <Slide left>
            <div className='testimonials'>
                <div className='testimonials-box'>                
                    <h1><GoDash />Testimonials<GoDash /></h1>
                    <div className='testimonials-content'>
                        <article>
                            <BsQuote size={40}/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsam quasi harum vel. Reiciendis ipsa in omnis eos, soluta est explicabo rerum maxime quasi quam earum accusantium provident, mollitia animi incidunt ab voluptates repellat illo.
                        </article>  
                        <br />
                        <strong style={{fontSize:'10px'}}>
                            {/* <HiOutlineCursorArrowRays /> */}
                            Warrel Tank Manufactures
                        </strong>
                    </div>              
                </div>
            </div>
        </Slide>
    );
}

export default Testimonials;
