import React, { useState, useEffect } from 'react'
import '../css/Preloader.css'

const Preloader = ({ isLoading, children }) => {
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        if (!isLoading) {
            // Small delay to ensure smooth transition
            const timer = setTimeout(() => {
                setShowContent(true)
            }, 100)
            return () => clearTimeout(timer)
        }
    }, [isLoading])

    if (isLoading) {
        return (
            <div className="preloader-container">
                <div className="preloader-spinner">
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                    <div className="spinner-ring"></div>
                </div>
                <div className="preloader-text">
                    <span>Loading</span>
                    <span className="dots">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className={`content-wrapper ${showContent ? 'visible' : ''}`}>
            {children}
        </div>
    )
}

export default Preloader