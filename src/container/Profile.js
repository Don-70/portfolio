import React from 'react'
import './css/Profile.css';
import Typical from 'react-typical'



function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-main'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <div class= "linkedIn" ><a href="https://www.linkedin.com/in/dudley-gamino-43a432236/"target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain-wordmark.svg" />
                </a>
              </div>
              <div class= "gitHub" ><a href="https://github.com/Don-70"target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                </a>
              </div>
              </div>
          </div>
          <div className='profile-name'> 
            <span className="primary-text">
            {" "} 
            Hello, I'm <span className="highlighted-text"> Dudley </span>
           </span>
          
          </div>
        <div className='profile-roles'>
          <span className='primary-text'>
            {" "}
            <h1>
              {" "}
              <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                1500,
                "Workout Enthusiast",
                1500,
                "Inspired to Create",
                1500,
                "Determined to Succeed",
                1500,
              ]}
              />
            </h1>
            <span className='role-description'>With Passion to Create and Shape Everything Around Me
            </span>
          </span>
        </div>
        <div className='profile-optins'>
          <a href="Resume .pdf" download="Dudley Resume .pdf">
            <button className='btn'>get Resume</button>
          </a>
        </div>
        </div>
        <div className='profile-pic'>
          <div className='Profile-pic-back'></div>
        </div>
      </div>  
    </div>

  );
}

export default Profile