import React, { useState, useEffect } from 'react';

import './css/Work.css';


const Work = () => {

return (
  <>

    <div>
        <h2 className='head-text'>
        My Projects
        <br />
        More coming soon
   
          </h2>

          <div className='app-optins'>
            <a href="https://master--fluffy-pony-084ae7.netlify.app/index.html" target="_blank">
              <button className='btn'>Pet Theropy</button>
            </a>
            <a href="https://stg-2970.herokuapp.com/" target="_black">
              <button className='btn'>STG</button>
            </a>
            <a href="https://fantasies-a-poetry-escape.netlify.app/" target="_blank">
              <button className='btn'>Poetry App</button>
            </a>
            <a href="https://thegetaway808.herokuapp.com/" target="_blank">
              <button className='btn'>Getaway</button>
            </a>
          </div>
    <div className='app__content-'>
      <div className='pet-pic'>
        <div className='Pet-back'> 
        <div className='Pet-pic-back'></div>
        </div>
      </div>
      <div className='stg-pic'>
        <div className='stg-back'></div>
        <div className='stg-pic-back'></div>
      </div>
      <div className='poem-pic'>
        <div className='poem-back'></div>
        <div className='poem-pic-back'></div>
      </div>
      <div className='ga-pic'>
        <div className='ga-back'></div>
        <div className='ga-pic-back'></div>
      </div>
    </div>
      </div>
    </>
  )
}

export default Work