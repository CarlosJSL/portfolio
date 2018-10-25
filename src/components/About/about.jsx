import React from 'react'
import './about.css'
import ProfileImage from './profile.jpeg'

export default () => (
    <div data-aos="zoom-in" className=" about-me">
        <h2>Hey, Guys !</h2>
        <img  className ="profile-photo" src={ProfileImage}  />
        <br></br>
        <br></br>   
        <br></br>
        <p id = "resume"  className="center-box">
            My name is Carlos José and I'm 22 years old. I am a web developer with 2 years experience.
            I love javascript on both client-side and server-side. I'm doing a IT degree with completion period for next year.
I have many hobbys, for example: travel, workout, see series/movies and etc...
        </p>
    </div>
)