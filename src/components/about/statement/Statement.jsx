import { GoDash } from 'react-icons/go';
import './statement.css';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import  Fade  from 'react-reveal';
const Statement = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        // Calculate the scroll position
        const currentPosition = window.scrollY;

        // Update the scroll position state
        setScrollPosition(currentPosition);
        };

        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='statements'>
            <Fade left >
                <div className='statement-top'>
                    <div className='statement-heading'>
                        <GoDash size={30}/>
                        <h1>Majiup is solving water management problem in Africa</h1>
                    </div>
                    <div className='statement-content'>
                        <article>
                            Majiup uses IoT tech and data solutions to bring clean, reliable water to African communities, improving lives.                                    
                        </article>
                    </div>     
                </div>
            </Fade>
            <Fade left>
                <div className='statement-bottom'>
                    <div className=''>
                        <h1>Driving innovation to combat water challenges!</h1>
                        <div>
                            <article>
                            </article>
                        </div>
                        <button>Get your Device <BsArrowRight /></button>
                    </div>
                    <div className='majiup-image'>
                        <img src="https://imgs.search.brave.com/dPSSIWC0dqIKLZpsKU0z2fJ8x3RH93pPn9gWXErGBsg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU2/NDE2Njg1L3Bob3Rv/L3dhdGVyLXNwbGFz/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VjNWdHJnTmJJ/WE1mMDVWa2E4T3BR/d2J3dzNwYmxIbFY2/MjdQY2Z5UEdsOD0" alt="majiup image" />
                    </div>
                </div>  
            </Fade>             
        </div>
    );
}

export default Statement;
