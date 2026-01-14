import React from 'react'
import '../css/stylesheet.css'

import closeIcon from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menuIcon from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrowIcon from '../assets/keyboard_double_arrow_up_24dp_1F1F1F.svg'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'
import githubImg from '../assets/icons8-github-30.png'
import emailIcon from '../assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'

export const Footersection = () => {
    const [footerOpen, setFooterOpen] = useState(false)

    const toggleFooter = () => {
                setFooterOpen((v) => !v)
        }


  return (
    <div className={`rectangle ${footerOpen ? 'open' : ''}`} id="footer">
                <img
                    src={arrowIcon}
                    className={`arrowup ${footerOpen ? 'rotated' : ''}`}
                    onClick={toggleFooter}
                    alt="toggle footer"
                />

                {footerOpen && (
                    <div id="footerText">
                        <div className="footer-content">
                            <h1>Lets connect there</h1>
                            <a href="mailto:katlegodhlamini2003@gmail.com">
                            <button className="HireMe">Hire me</button>
                            </a>
                        </div>

                        <hr style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }} />

                        <div className="footer-content-02">
                            <div className="footer-details">
                                <div className="circle-image-footer">
                                    <img src={katImg} alt="Circular Image" />
                                    <h2>Katlego Dhlamini</h2>
                                </div>
                                <p>
                                    Below is my socal links where we
                                    <br /> can connect for any project
                                    <br /> contribution or colabration
                                </p>
                                <div className="logo2">

                                    <a href="https://www.linkedin.com/in/katlego-dhlamini-932636284/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedinImg} alt="LinkedIn" className="responsive-image" />
                                    </a>
                                    <a href="https://github.com/katdev16" target="_blank" rel="noopener noreferrer">
                                        <img src={githubImg} alt="GitHub" className="responsive-image" />
                                    </a>
                                    <a href="mailto:katlegodhlamini2003@gmail.com">
                                        <img src={emailIcon} alt="Email" className="responsive-image" />
                                    </a>
                                </div>
                            </div>

                            <div className="footer-details-03">
                                <div>
                                    <h2>Contact Info</h2>
                                    <p>Katlegodhlamini2003@gmail.com</p>
                                    <p>0738078339</p>
                                    <p>Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <hr style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }} />
                        <p className="footertext" style={{ paddingLeft: 0 }}>
                            Copyright © 2025 Katlego Dhlamini. All Rights Reserved.
                        </p>
                    </div>
                )}
            </div>
        
  )
}
