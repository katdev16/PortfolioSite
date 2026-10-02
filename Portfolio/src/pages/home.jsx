import { useState, useEffect } from 'react'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'

import InstagramLogo from "../assets/instagram.png"
import githubImg from '../assets/icons8-github-30.png'
import emailIcon from '../assets/attach_email_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import About from './about.jsx'
import Skills from './skills.jsx'

const roleTitles = ['UI/UX Designer', 'Developer']

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

  return displayedText + (showCursor ? '|' : '')
}




const Home = () => {
    const displayedText = useTypewriter(roleTitles, 100)

    return (
        <main className="single-page">
            <div className="home-container">
                <section className="hero-section" id="home" aria-labelledby="home-heading">
                    <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="greeting" id="home-heading">Hello, I'm</h1>
                        <div className="name-section">
                            <h2 className="first-name">Katlego</h2>
                            <h2 className="last-name">Dhlamini</h2>
                        </div>
                        <div className="role-display">
                            <span className="role-text">{displayedText}</span>
                        </div>
                        <p className="hero-description">
                            Passionate about delivering innovative software solutions and professional technology services that help businesses streamline operations, solve complex challenges, and create exceptional digital experiences. Combining cutting-edge development with thoughtful design, we build reliable, scalable, and user-focused solutions tailored to your unique needs.
                        </p>

                        <div className="hero-actions">
                            <a className="primary-btn" href="mailto:katlegodhlamini2003@gmail.com">
                                Let’s work
                            </a>
                            <a href="#about" className="secondary-btn">
                                Learn more
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/katlegodev_/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="social-link linkedin">
                                <img src={InstagramLogo} alt="Instagram" />
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

                    <div className="scroll-indicator" aria-hidden="true">
                        <div className="scroll-mouse">
                            <div className="scroll-wheel"></div>
                        </div>
                        <span>Scroll to explore</span>
                    </div>
                </section>
            </div>
            <About />
            <Skills />
        </main>
    )
}

export default Home
