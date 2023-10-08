import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './team.css';
import { useNavigate } from 'react-router-dom';
import { GoDash } from 'react-icons/go';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import ImageSlider from '../../slider/image-slider/ImageSlider';

const Team = () => {
    const navigate = useNavigate();

    const team = [
        {
            imageUrl:'https://imgs.search.brave.com/6CIkMFk6flCdG-t5snSoZM_ZksKgH75XY31uZoehHzY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9uZXRz/dG9yYWdlLWxlZ2l0/LmFrYW1haXplZC5u/ZXQvaW1hZ2VzL2Fi/YjIxZTY5YTkyN2Q2/Y2YuanBnP2ltd2lk/dGg9OTAw', 
            role:'CEO & Founder',
            name:'Joseph Musya'
        },
        {
            imageUrl:'https://imgs.search.brave.com/WigAsBm4aYbY_qy-zhMI7Tc6ThRQmHxUPNECV--921k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGFwcGVyY29uZmlk/ZW50aWFsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Mi9qYXktei1lMTU2/NDc2NTU3NzcwMC5q/cGc',
            role:'Software Developer',
            name:'Oliver Kipkemei'
        },
        {
            imageUrl:'https://imgs.search.brave.com/s_5Omt8_ayJ_89cSv4G8TAMm1JTgmEKyQe9CkdV8EXw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My9vbGQtcGhvdG9z/LWZhbW91cy1wZW9w/bGUtY2VsZWJyaXRp/ZXMtNjAzZjZjODk3/ODQ1M19fNzAwLmpw/Zw',
            role:'Embeded System Desiger',
            name:'Zarin Tasmin'
        },
        {
            imageUrl:'https://imgs.search.brave.com/EoQvRyMHPPsjZnRuzDCE2h-f73TEBnzNhyrU9_mgAdY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FjLzcz/LzNjL2FjNzMzYzNh/NmQ1Zjg0ZmY1Y2M3/ZWY2ZDkzMjg5NGNk/LS1jaG9jb2xhdGUt/bWFuLW1haGVyc2hh/bGEtYWxpLmpwZw',
            role:'Co-Founder',
            name:'Solomon Githu'
        }
    ]
    return (
        <div className='team'>
            <Fade left>
                <div className='team-top'>
                    <strong><GoDash />Meet our team<GoDash /></strong>
                    <h1>
                        Our team consists of global innovators and developers!
                    </h1>
                    <RubberBand delay={1000} duration={2000}>
                        <article onClick={()=>{navigate('/careers')}}>Join our team <BsArrowRight size={20}/></article>
                    </RubberBand>
                </div>
            </Fade>
            <Zoom>
                <div className='team-bottom'>
                    <div className='team-content'>
                        <ImageSlider team={team} />
                    </div>                            
                </div>
            </Zoom>
        </div>
    );
}

export default Team;
