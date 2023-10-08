import React, { useState } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import './imageSlider.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const ImageSlider = ({team}) => {    

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const lastImage = currentIndex === team.length - 1;
        lastImage ? setCurrentIndex(0): setCurrentIndex(currentIndex + 1)
    }

    const goToPrevious = () => {
        const firstImage = currentIndex === 0;
        firstImage ? setCurrentIndex(team.length - 1): setCurrentIndex(currentIndex - 1)
    }

    return (
        <div className='slider' style={{backgroundImage:`url(${team[currentIndex]?.imageUrl})`}}>
            <strong className='role'>{team[currentIndex]?.role}</strong>
            <article className='name'>{team[currentIndex]?.name}<BsBoxArrowUpRight/> </article>
            <div className='next'><GrFormNext onClick={goToNext} style={{cursor:'pointer'}} size={25} /></div>
            <div className='prev'><GrFormPrevious onClick={goToPrevious} style={{cursor:'pointer'}} size={25} /></div>                                            
        </div>
    );
}

export default ImageSlider;
