import React from 'react'

import GitHubLogo from './github-sign.svg'
import LinkedinLogo from './linkedin-logo.svg'
import FacebookLogo from './facebook-logo.svg'
import TwitterLogo from './twitter-logo-on-black-background.svg'

import './contact.css'

export default () => (
    <div className = "container">
        <div className = "row">
            <div data-aos="zoom-in" className = "col-md-12 contact">
                <h2 >Contact</h2>
                <p >If you are interested in talking to me, here are ways to get in touch</p>
                <a href= "https://github.com/CarlosJSL" target='_blank'>
                    <img src={GitHubLogo} alt="s" className = 'contact-logos'/>
                </a>
                <a href= "https://www.linkedin.com/in/carlos-jos%C3%A9/" target='_blank'>
                    <img src={LinkedinLogo} alt="s" className = 'contact-logos'/>
                </a>
                <a href= "https://www.facebook.com/carlos.jose.9081" target='_blank' >
                    <img src={FacebookLogo} alt="s" className = 'contact-logos'/>
                </a>
                <a href= "https://twitter.com/CarlosJSL8" target='_blank'>
                    <img src={TwitterLogo} alt="s" className = 'contact-logos'/>
                </a>
            </div>
        </div>
    </div>
)