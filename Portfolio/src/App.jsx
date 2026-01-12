import React, { useState } from 'react'
import './css/stylesheet.css'

import closeIcon from './assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menuIcon from './assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrowIcon from './assets/keyboard_double_arrow_up_24dp_1F1F1F.svg'
import katImg from './assets/KAT.jpeg'
import linkedinImg from './assets/icons8-linkedin-48.png'
import githubImg from './assets/icons8-github-30.png'
import emailIcon from './assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import About from './pages/about.jsx'
import { Headersection } from './components/headerSection.jsx'
import { Footersection } from './components/footerSection.jsx'
import Home from './pages/home.jsx'
import Skills from './pages/skills.jsx'
import Projects from './pages/projects.jsx'
import ParticlesJS from './components/particles.jsx'


function App()  {

    return (
        <BrowserRouter>
            <Headersection />   
            <ParticlesJS />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footersection />
        </BrowserRouter>
    )
}


export default App
