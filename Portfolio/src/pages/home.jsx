import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import React from 'react'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'
import githubImg from '../assets/icons8-github-30.png'
import emailIcon from '../assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

const Home = () => {
    return (
        <div className="container">
            <div className="details">
                <h2>I'm</h2>
                <h1>Katlego</h1>
                <h1>Dhlamini</h1>
                <button>Resume</button>
                <div className="logo">
                    <img src={linkedinImg} alt="LinkedIn" className="responsive-image" />
                    <img src={githubImg} alt="GitHub" className="responsive-image" />
                    <img src={emailIcon} alt="Email" className="responsive-image" />
                </div>
            </div>

            <div className="circle-image">
                <img src={katImg} alt="Circular Image" />
                <h1>UI/UX Designer/Developer</h1>
            </div>

            <div className="role"></div>
        </div>
    )
}

export default Home
