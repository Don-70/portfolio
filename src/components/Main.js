import React from 'react';

import { Routes, Route,Navigate  } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Abouts from '../pages/Abouts';


function Main() {
    ;
    return (
        <main>
            <Routes>
        <Route path="/" element={ <Navigate to="/home" /> } />
                <Route path='/home' element={
                    <Home />
                } />
                <Route path='/about' element={
                    <Abouts
                    />
                } />
                <Route path='/contact' element={
                    <Contact />
                } />
            </Routes>
        </main>
    );
}

export default Main;