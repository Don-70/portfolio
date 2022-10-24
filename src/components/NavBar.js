import React, { useState } from 'react';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';
import './NavBar.css';

export default function NavBar() {

  const [toggle, setToggle] = useState(false)
  return (
  <nav className='app__navbar'>

    <div className='app__navbar_logo' />
      <ul className='app__navbar_links'>
      {['home', 'about', 'contact'].map((item) => (
        <li className='li__nav app__flex p-text' key={`link-${item}`}>
          <div className='e__div'/>
          <a className='nav__ancor' href={`${item}`}> {item}</a>
        </li>
        ))}
        </ul>
        <div className='Mobile__nav'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div className='motion_div'
          whileInView={{x: [300, 0]}}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className='svg_moblie'>{['home', 'about', 'contact'].map((item) => (
        <li className='mobile_li' key={item}>
          <a className='nav__ancor' href={`${item}`} onClick= {() =>(true)}> {item}</a>
        </li>
        ))}
        </ul>
            </motion.div>
        )}
        </div>
    </nav>

  
  )
}
