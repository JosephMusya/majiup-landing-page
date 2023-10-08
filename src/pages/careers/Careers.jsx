import React from 'react';
import './careers.css';
import { GoDash } from 'react-icons/go';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';

const Careers = () => {
    return (
        <div className='careers'>
            <h1> <GoDash /> We are Hiring</h1>
            <article>
                Are you passionate about water management innovation and making a positive impact on communities?                               
            </article>            
            <div className='open-positions'>
                <Zoom>
                    <div className='position'>
                        <h2 className='title'>Embedded Systems Designer</h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                        </div>
                        <div className='careers-action'>
                            <button>View Position</button>
                            <button className='open'>Apply Now</button>
                        </div>
                    </div>
                    <div className='position'>
                        <h2 className='title'>IoT Expert</h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                        </div>
                        <div className='careers-action'>
                            <button>View Position</button>
                            <button className='open'>Apply Now</button>
                        </div>
                    </div>
                    <div className='position'>
                        <h2 className='title'>Software Developer</h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                        </div>
                        <div className='careers-action'>
                            <button>View Position</button>
                            <button className='closed'>CLOSED</button>
                        </div>
                    </div>
                </Zoom>
            </div>
            <Flash>
                <div className='apply-help' style={{padding:'2rem', display:'flex', gap:'1rem', alignItems:'center', backgroundColor:''}}>
                    <AiOutlineInfoCircle size={30}/> 
                        <article>
                            Submit application to <span style={{color:'#0072bb', cursor:'pointer'}}>careers@majiup</span>
                        </article> 
                </div>
            </Flash>
        </div>
    );
}

export default Careers;
