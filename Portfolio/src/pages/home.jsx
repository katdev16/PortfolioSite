import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import React, { useState, useEffect } from 'react'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'
import githubImg from '../assets/icons8-github-30.png'
import emailIcon from '../assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

const useTypewriter = (texts, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const currentText = texts[textIndex]

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (index < currentText.length) {
          setDisplayedText((prev) => prev + currentText[index])
          setIndex(index + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1))
        } else {
          setIsDeleting(false)
          setIndex(0)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [index, displayedText, currentText, speed, isDeleting, texts, textIndex])

  return displayedText + (showCursor ? '_' : '_')
}




const Home = () => {
    const displayedText = useTypewriter([
      'UI/UX Designer',
      'Developer'
    ], 100)



        
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/docs/KatlegoDhlaminiResume.pdf'; // path to your PDF file
        link.download = 'KatlegoDhlaminiResume.pdf'; // suggested filename
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

   
    


    
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="greeting">Hello, I'm</h1>
                        <div className="name-section">
                            <h2 className="first-name">Katlego</h2>
                            <h2 className="last-name">Dhlamini</h2>
                        </div>
                        <div className="role-display">
                            <span className="role-text">{displayedText}</span>
                        </div>
                        <p className="hero-description">
                            Passionate about creating exceptional digital experiences through
                            innovative design and cutting-edge development.
                        </p>

                        <div className="hero-actions">
                            <button className="primary-btn" onClick={handleDownload}>
                                Download Resume
                            </button>
                            <a href="about" className="secondary-btn">
                                Learn More
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/katlego-dhlamini-932636284/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="social-link linkedin">
                                <img src={linkedinImg} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/katdev16"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="social-link github">
                                <img src={githubImg} alt="GitHub" />
                            </a>
                            <a href="mailto:katlegodhlamini2003@gmail.com"
                               className="social-link email">
                                <img src={emailIcon} alt="Email" />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="image-container">
                            <img src={katImg} alt="Katlego Dhlamini" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="floating-elements">
                            <div className="floating-circle circle-1"></div>
                            <div className="floating-circle circle-2"></div>
                            <div className="floating-circle circle-3"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
            </section>
        </div>
    )
}

export default Home
