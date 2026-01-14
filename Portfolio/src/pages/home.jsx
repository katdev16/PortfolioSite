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
  const currentText = texts[textIndex]

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

  return displayedText
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
        <div className="container">
            <div className="details">
                <h2>I'm</h2>
                <h1>Katlego</h1>
                <h1>Dhlamini</h1>
                <button onClick={handleDownload}>Resume</button>;
                <div className="logo">
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

            <div className="circle-image">
                <img src={katImg} alt="Circular Image" />
                <h1>{displayedText}</h1>
            </div>

            <div className="role"></div>
        </div>
    )
}

export default Home
