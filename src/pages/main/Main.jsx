import React from 'react';
import './main.css'
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div className='headline'>
                <h1>
                    Elevating Water Management, One Tank at a Time
                </h1>
            </div>
            <div className='description'>
                <article>
                    Ready to make a difference in how you manage your water resources? Reach out to us today to discover Majiup's IoT solutions.
                </article>
            </div>
            <div className='call-action'>
                <button onClick={()=>navigate('/product-feature')}>Get Majiup Devices <BsArrowRight size={23}/></button>
                <button onClick={()=>navigate('/products-view')}>View Products <BsArrowRight size={23}/></button>
            </div>
        </div>
    );
}

export default Main;
