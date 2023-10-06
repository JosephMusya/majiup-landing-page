import React from 'react';
import { BsBoxArrowUpRight, BsArrowRight } from 'react-icons/bs';
import './team.css';
import { useNavigate } from 'react-router-dom';
import { GoDash } from 'react-icons/go';

const Team = () => {
    const navigate = useNavigate();
    return (
        <div className='team'>
            <div className='team-top'>
                <strong><GoDash />Meet our team<GoDash /></strong>
                <h1>
                    Our team consists of global innovators and developers!
                </h1>
                <article onClick={()=>{navigate('/careers')}}>Join our team <BsArrowRight size={20}/></article>
            </div>
            <div className='team-bottom'>
                <div className='team-content'>
                    <strong>CEO & Founder</strong>
                    <img src="https://imgs.search.brave.com/s_5Omt8_ayJ_89cSv4G8TAMm1JTgmEKyQe9CkdV8EXw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My9vbGQtcGhvdG9z/LWZhbW91cy1wZW9w/bGUtY2VsZWJyaXRp/ZXMtNjAzZjZjODk3/ODQ1M19fNzAwLmpw/Zw" alt="" />
                    <article>Joseph Musya <BsBoxArrowUpRight/> </article>                                            
                </div>                            
            </div>
        </div>
    );
}

export default Team;
