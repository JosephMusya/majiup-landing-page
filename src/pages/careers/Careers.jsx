import React from 'react';
import './careers.css';
import { GoDash } from 'react-icons/go';

const Careers = () => {
    return (
        <div className='careers' style={{fontFamily:'sans-serif'}}>
            <h1> <GoDash /> We are Hiring</h1>
            <div className='open-positions'>
                <div className='position'>
                    <h2 className='title'>Embedded Systems Designer</h2>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                    </div>
                    <div className='careers-action'>
                        <button>View Position</button>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className='position'>
                    <h2 className='title'>Embedded Systems Designer</h2>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                    </div>
                    <div className='careers-action'>
                        <button>View Position</button>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className='position'>
                    <h2 className='title'>Software Developer</h2>
                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deleniti voluptates facere. Laudantium quae neque repellat at dolore nihil tempore.
                    </div>
                    <div className='careers-action'>
                        <button>View Position</button>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Careers;
