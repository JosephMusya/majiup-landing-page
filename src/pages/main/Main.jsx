import React from 'react';
import './main.css'
import Home from '../home/Home';
import Navbar from '../../components/navbar/Navbar';

const Main = () => {
    return (
        <div className='main-page'>
            {/* <Navbar /> */}
            <Home />                      
        </div>
    );
}

export default Main;
