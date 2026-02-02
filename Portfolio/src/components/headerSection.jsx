import React, { useState, useEffect } from 'react'
import '../css/stylesheet.css'
import { Link, useLocation } from 'react-router-dom';
import closeIcon from '../assets/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import menuIcon from '../assets/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export const Headersection = () => {
    const [sidebarActive, setSidebarActive] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle sidebar toggle
    const showSidebar = () => {
        setSidebarActive(true)
    }

    const closeSidebar = () => {
        setSidebarActive(false)
    }

    // Close sidebar when clicking outside or on a link
    const handleLinkClick = () => {
        setSidebarActive(false)
    }

    // Check if link is active
    const isActiveLink = (path) => {
        return location.pathname === path
    }

    return (
        <div id="home-root" className={isScrolled ? 'scrolled' : ''}>
            {/* Sidebar for Mobile */}
            <ul className={`sidebar ${sidebarActive ? 'active' : 'closed'}`}>
                <li>
                    <img src={closeIcon} onClick={closeSidebar} alt="close" />
                </li>
                <li>
                    <Link
                        to="/"
                        onClick={handleLinkClick}
                        className={isActiveLink('/') ? 'active' : ''}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={handleLinkClick}
                        className={isActiveLink('/about') ? 'active' : ''}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/skills"
                        onClick={handleLinkClick}
                        className={isActiveLink('/skills') ? 'active' : ''}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        onClick={handleLinkClick}
                        className={isActiveLink('/projects') ? 'active' : ''}
                    >
                        Projects
                    </Link>
                </li>
            </ul>

            {/* Desktop Navigation */}
            <div className="hamburger-menu">
                <nav>
                    <ul>
                        <li className="hideOnMobile">
                            <Link
                                to="/"
                                className={isActiveLink('/') ? 'active' : ''}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="hideOnMobile">
                            <Link
                                to="/about"
                                className={isActiveLink('/about') ? 'active' : ''}
                            >
                                About
                            </Link>
                        </li>
                        <li className="hideOnMobile">
                            <Link
                                to="/skills"
                                className={isActiveLink('/skills') ? 'active' : ''}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="hideOnMobile">
                            <Link
                                to="/projects"
                                className={isActiveLink('/projects') ? 'active' : ''}
                            >
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Button */}
            <img
                src={menuIcon}
                onClick={showSidebar}
                className="mobileMenu"
                alt="Menu Icon"
            />
        </div>
    )
}
