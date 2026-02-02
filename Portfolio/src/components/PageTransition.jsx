import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useLocation } from 'react-router-dom'
import '../css/PageTransitions.css'
import Preloader from './Preloader.jsx'

const PageTransition = ({ children }) => {
    const location = useLocation()
    const [transitionType, setTransitionType] = useState('page')
    const [isLoading, setIsLoading] = useState(false)

    // Cycle through different transition types for variety
    useEffect(() => {
        setIsLoading(true)

        // Simulate loading time for smoother transitions
        const loadingTimer = setTimeout(() => {
            setIsLoading(false)
        }, 300)

        const transitions = ['page', 'fade', 'slide', 'scale', 'zoom']
        const currentIndex = transitions.indexOf(transitionType)
        const nextIndex = (currentIndex + 1) % transitions.length
        setTransitionType(transitions[nextIndex])

        return () => clearTimeout(loadingTimer)
    }, [location.pathname])

    return (
        <Preloader isLoading={isLoading}>
            <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    classNames={transitionType}
                    timeout={600}
                    appear={true}
                >
                    <div className="page-transition-wrapper">
                        {children}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Preloader>
    )
}

export default PageTransition