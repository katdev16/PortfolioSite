import React from 'react'
import katImg from '../assets/KAT.jpeg'
import timeIcon from '../assets/time_auto_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import locationIcon from '../assets/location_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrowIcon from '../assets/keyboard_double_arrow_up_24dp_1F1F1F.svg'
import schoolIcon from '../assets/school_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import workIcon from '../assets/work_history_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import growthIcon from '../assets/trending_up_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import '../css/AboutStylesheet_new.css'
import { TopFunction } from '../script'


export const About = () => {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <div className='about-container'>
            {/* About Me Section */}
            <section className='about-hero'>
                <div className="about-content">
                    <div className="about-text">
                        <h1>About Me</h1>
                        <p>
                            I am passionate about transforming ideas into tangible software solutions.
                            I continuously strive to enhance my skills and knowledge. My goal is to stay
                            at the forefront of technological advancements by embracing lifelong learning
                            and professional development.
                        </p>
                        <p>
                            I am dedicated to building efficient, scalable, and innovative applications
                            that make a difference.
                        </p>
                        <button className="contact-btn">Contact Me</button>
                    </div>
                    <div className="about-image">
                        <img src={katImg} alt="Katlego Dhlamini" />
                    </div>
                </div>
            </section>

            {/* Experience & Education Section */}
            <section className="experience-section">
                <h2>Experience & Education</h2>
                <div className="experience-grid">
                    <div className="experience-card">
                        <div className="card-header">
                            <img src={workIcon} alt="work" className="card-icon" />
                            <h3>UI/UX Designer - Nagarro</h3>
                        </div>
                        <div className="card-details">
                            <div className="detail-item">
                                <img src={timeIcon} alt="time" className="detail-icon" />
                                <span>April 2025 - Present</span>
                            </div>
                            <div className="detail-item">
                                <img src={locationIcon} alt="location" className="detail-icon" />
                                <span>Johannesburg</span>
                            </div>
                        </div>
                        <p className="card-description">
                            As a UI/UX Designer at Nagarro, I am responsible for creating intuitive and
                            engaging user interfaces for web and mobile applications. My role involves
                            collaborating with cross-functional teams to understand user needs, conducting
                            user research, and translating insights into effective design solutions.
                        </p>
                    </div>

                    <div className="experience-card">
                        <div className="card-header">
                            <img src={schoolIcon} alt="education" className="card-icon" />
                            <h3>Computer Software Engineering - Wethinkcode</h3>
                        </div>
                        <div className="card-details">
                            <div className="detail-item">
                                <img src={timeIcon} alt="time" className="detail-icon" />
                                <span>Sep 2023 - Dec 2024</span>
                            </div>
                            <div className="detail-item">
                                <img src={locationIcon} alt="location" className="detail-icon" />
                                <span>Johannesburg</span>
                            </div>
                        </div>
                        <p className="card-description">
                            Intense software development programs focusing on Java development along with
                            OOP principles along with problem-solving skills in software engineering.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <h2>My Journey</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <img src={schoolIcon} alt="education" className="stat-icon" />
                        <h3>Education</h3>
                        <p>Information Technology</p>
                    </div>
                    <div className="stat-card">
                        <img src={workIcon} alt="experience" className="stat-icon" />
                        <h3>Experience</h3>
                        <p>+6 Months Professional</p>
                    </div>
                    <div className="stat-card">
                        <img src={growthIcon} alt="growth" className="stat-icon" />
                        <h3>Growth</h3>
                        <p>UI/UX Designer & Developer at Nagarro</p>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            <button className="scroll-top-btn" onClick={scrollToTop}>
                <img src={arrowIcon} alt="scroll to top" />
            </button>
        </div>
    )
}
export default About