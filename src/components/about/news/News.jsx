import React from 'react';
import { GoDash } from 'react-icons/go';
import './news.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

const News = () => {
    return (
        <div className='news-disp'>
            <Slide left>
                <div className='news-top'> 
                    <h1>Stay updated on our latest news</h1>
                    <article>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit laboriosam omnte recusandae ut cupiditate.
                    </article>
                </div>
            </Slide>
            <Zoom>
                <div className='news-bottom'>
                    <div className="news-content">
                        <img src="https://imgs.search.brave.com/zPHiqyV_uh9frNVaWEHCvJjxCxWeUF-h5QaADtT0LAE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcx/ODMyMjgzMS9waG90/by9tdC1mdWppLWNh/cHBlZC1maXJzdC1z/bm93LW9mLXRoZS1z/ZWFzb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9rTHFx/RG53ODBTM2xIRl94/cXZZWXFjN0RldEUt/NFZ1MDRlYnZBZ3FC/dzQ9" alt="" />
                    </div>
                </div>
            </Zoom>    
        </div>
    );
}

export default News;
