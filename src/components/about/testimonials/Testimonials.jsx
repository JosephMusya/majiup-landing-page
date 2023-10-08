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
                            Majiup's IoT devices transformed our water management. Tanks are always full, issues are detected early, and our community now enjoys clean water. Thank you, Majiup!
                        </article>  
                        <br />
                        <strong style={{fontSize:'10px'}}>
                            {/* <HiOutlineCursorArrowRays /> */}
                            <span>Sarah K, </span>
                            <span>Community Leader - </span>
                            <span>Nairobi Kenya</span>
                        </strong>
                    </div>              
                </div>
            </div>
        </Slide>
    );
}

export default Testimonials;
