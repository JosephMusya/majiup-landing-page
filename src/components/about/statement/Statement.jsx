import React from 'react';
import { GoDash } from 'react-icons/go';
import './statement.css';
import { BsArrowRight } from 'react-icons/bs';

const Statement = () => {
    return (
        <div className='statements'>
            <div className='statement-top'>
                <div className='statement-heading'>
                    <GoDash size={30}/>
                    <h1>Majiup is solving water management problem in Africa</h1>
                </div>
                <div className='statement-content'>
                    <article>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit laboriosam omnte recusandae ut cupiditate.
                    </article>
                </div>     
            </div>
            <div className='statement-bottom'>
                <div className=''>
                    <h1>Driving innovation to combat water challenges!</h1>
                    <div>
                        <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. error tenetur voluptatibus quia enim repudiandae atqu.
                        </article>
                    </div>
                    <button>Get your Device <BsArrowRight /></button>
                </div>
                <div className='majiup-image'>
                    <img src="https://imgs.search.brave.com/dPSSIWC0dqIKLZpsKU0z2fJ8x3RH93pPn9gWXErGBsg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU2/NDE2Njg1L3Bob3Rv/L3dhdGVyLXNwbGFz/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VjNWdHJnTmJJ/WE1mMDVWa2E4T3BR/d2J3dzNwYmxIbFY2/MjdQY2Z5UEdsOD0" alt="majiup image" />
                </div>
            </div>               
        </div>
    );
}

export default Statement;
