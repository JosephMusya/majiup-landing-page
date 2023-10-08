import React, { useState } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import './news-slider.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const ImageSlider = ({news}) => {    

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        const lastImage = currentIndex === news.length - 1;
        lastImage ? setCurrentIndex(0): setCurrentIndex(currentIndex + 1)
    }

    const goToPrevious = () => {
        const firstImage = currentIndex === 0;
        firstImage ? setCurrentIndex(news.length - 1): setCurrentIndex(currentIndex - 1)
    }

    return (
        <div className='news-slider' style={{backgroundImage:`url(${news[currentIndex]?.imageUrl})`}}>
            {/* <strong className='role'>{news[currentIndex]?.role}</strong> */}
            <div className='caption'>
                <article>{news[currentIndex]?.caption}</article>
            </div>
            <div className='next'><GrFormNext onClick={goToNext} style={{cursor:'pointer'}} size={25} /></div>
            <div className='prev'><GrFormPrevious onClick={goToPrevious} style={{cursor:'pointer'}} size={25} /></div>                                            
        </div>
    );
}

export default ImageSlider;
