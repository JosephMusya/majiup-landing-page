import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './main.css'
import Home from '../home/Home';
const Main = () => {
    return (
        <div className='main-page'>
            <Navbar />
            <Home />                      
        </div>
    );
}

export default Main;
