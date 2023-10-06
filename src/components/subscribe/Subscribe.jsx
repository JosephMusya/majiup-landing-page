import React from 'react';
import './subscribe.css';
import { MdOutlineEmail } from 'react-icons/md';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div>
                <h1>Interested about us?</h1>
                <article>Subscribe to our monthly newsletter releases</article>
            </div>
            <div className='details'>
                <MdOutlineEmail size={20} />
                <input type="email" placeholder='Email'/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default Subscribe;
