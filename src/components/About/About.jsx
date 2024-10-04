import React from 'react'
import './About.css'
import theme_patern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_patern} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="aboutachievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="aboutachievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="aboutachievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
