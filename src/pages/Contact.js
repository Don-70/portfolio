import React from 'react'
import './Contact.css';

export const Contact = () => {
  return (
    <>
    <div className='con-container'>

    <div className='colz-icon'>
              <div class= "linkedIn2" ><a href="https://www.linkedin.com/in/dudley-gamino-43a432236/"target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg" />
                </a>
              </div>
              <div class= "gitHub2" ><a href="https://github.com/Don-70"target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
              </div>
              <div className='con-pic'>
          <div className='con-pic-back'></div>
    </div>
        </div>
              </div>
    </>
  )
}


export default Contact;