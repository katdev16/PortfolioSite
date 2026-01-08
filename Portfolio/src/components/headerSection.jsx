import React from 'react'
import '../css/stylesheet.css'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import closeIcon from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menuIcon from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrowIcon from '../assets/keyboard_double_arrow_up_24dp_1F1F1F.svg'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'
import githubImg from '../assets/icons8-github-30.png'
import emailIcon from '../assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { showsidebar } from '../script.js'
import { closesidebar } from '../script.js'
export const Headersection = () => {

     const quarterCircleStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '200px',
        height: '200px',
        backgroundColor: '#f87000',
        borderTopLeftRadius: '200px',
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: '5000%',
        zIndex: -1,
    }


  return (
    <div id="home-root">
            <div className="quarter-circle" style={quarterCircleStyle} />

            <div>
                <nav>
                    <ul className="sidebar">
                        <li>
                            <img src={closeIcon} onClick={closesidebar} alt="close" />
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>
                </nav>

                <div className="hamburger-menu">
                    <nav>
                        <ul>
                            <li className="hideOnMobile">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="hideOnMobile">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="hideOnMobile">
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li className="hideOnMobile">
                                <Link to="/projects">Projects</Link>
                            </li>
                      
                        </ul>
                    </nav>
                </div>

                <img src={menuIcon} onClick={showsidebar} className="mobileMenu" alt="Menu Icon" />
            </div>
        </div>
  )
}
