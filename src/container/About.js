import React, { useState, useEffect } from 'react'; 
import { motion } from 'framer-motion';
import './css/About.css';

const abouts = [
  {title: 'Full Stack Engineer', description: 'Changing the world one line of code at a time.',},
  {title: 'Web Developer', description: 'helping others move forward.',},
  {title: 'React Lover', description: 'The language i love the most.',},
  {title: 'Determined to succeed', description: 'Work Hard, Play Hard.'},
  // {title: 'web developer', description: 'Im a good developer.', imgUrl:''},
];

const About = () => {
  return (
    <>
    <h2 className='head-text'>
    I am a Full Stack Developer
    <span> Ready </span>
    <br />
    to 
    <span> change the world with you</span>
       </h2>
       <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition= {{duration: 0.5, type: 'tween'}}
          className="app_profiles-item"
          key = {about.title + index}

          >
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}

       </div>
    </>
  )
}

export default About;