import React from 'react';
import './careers.css';
import { GoDash } from 'react-icons/go';
import { AiOutlineInfoCircle } from 'react-icons/ai';
const Careers = () => {
    return (
        <div className='careers'>
            <h1> <GoDash /> We are Hiring</h1>            
            <div className='open-positions'>
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
            </div>
            <div style={{padding:'2rem', display:'flex', gap:'1rem', alignItems:'center', backgroundColor:''}}>
                <AiOutlineInfoCircle size={30}/> 
                <article>
                    Submit application to <span style={{color:'blue', cursor:'pointer'}}>&nbsp; careers@majiup</span>
                </article>                
            </div>
        </div>
    );
}

export default Careers;
