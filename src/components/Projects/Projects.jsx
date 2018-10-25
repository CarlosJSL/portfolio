import React from 'react'
import StoneLogo from './stone.png'
import LevohAdminLogo from './levoh-admin.png'
import "./Projects.css"

export default () => (
    <div className="container">
        <div className = "row">
            <div data-aos="zoom-in" className = "col-md-12 col-xs-12"> 
            <h2 className ="project-title">Projects</h2>
                <div className = "col-md-6 col-xs-12"> 
                    <div className="card">
                        <img className="card-img-top" src= {StoneLogo} alt="Card"></img>
                        <div className="card-body">
                            <h2 className="card-title">Stone's project</h2>
                            <p className="card-text">This is a mini exchange project developed in a Stone's interview</p>
                        </div>
                    </div>
                </div>
                <div className = "col-md-6 col-xs-12"> 
                    <div className="card">
                        <img className="card-img-top" src= {LevohAdminLogo} alt="Card "></img>
                        <div className="card-body">
                            <h2 className="card-title">Levoh's project</h2>
                            <p className="card-text"> This is a project developed in the discipline of Software Processes in college</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
)