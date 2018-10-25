import React from 'react'
import './skills.css'
import NodeLogo from './nodejs.svg'
import ReactLogo from './react.svg'
import MySqlLogo from './mysql.svg'
import AngularLogo from './angular.png'
import expressLogo from './express1.png'
import HtmlLogo from './html-55.svg'
import CssLogo from './css-3.svg'
import Docker from './docker.svg'

export default () => (
    <div className = "skills">
        <h1 data-aos="zoom-in">Skills</h1>
        <br></br>
        <div data-aos="zoom-in" className = "container">
            <div className = "row">
                <br></br>
                <br></br>
                <div  className = "col-md-6">
                    <img className = "skills-logo" alt="Logo" src={HtmlLogo}></img>
                    <img className = "skills-logo" alt="Logo" src={CssLogo}></img>
                    <img className = "skills-logo" alt="Logo" src={ReactLogo}></img>
                    <img className = "skills-logo" alt="Logo" src={AngularLogo}></img>
                </div>   
                <div  className = "col-md-6 divider">
                    <img className = "skills-logo " alt="Logo" src={NodeLogo}></img>
                    <img className = "skills-logo " alt="Logo" src={MySqlLogo}></img>
                    <img className = "skills-logo " alt="Logo" src={expressLogo}></img>
                    <img className = "skills-logo " alt="Logo" src={Docker}></img>
                </div>
            </div>                 
        </div>
    </div>
)