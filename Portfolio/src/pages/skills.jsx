
    import React from 'react'
    import frontendImg from '../assets/frontend_online_3.jpg'
    import uxImg from '../assets/4421964.jpg'
    import group80 from '../assets/Group 80.svg'
    import group81 from '../assets/Group 81.svg'
    import icon1 from '../assets/icon (1).png'
    import group78 from '../assets/Group 78.svg'
    import group82 from '../assets/Group 82.svg'
    import iconReactNative from '../assets/icon.png'
    import '../css/Skills.css'

const Skills = () => {
    return (
        <div className="skills-container">
            {/* Hero Section */}
            <section className="skills-hero">
                <div className="hero-content">
                    <h1 className="skills-title">My Skills</h1>
                    <p className="skills-subtitle">
                        Here are some of the skills I've acquired along my journey.
                    </p>
                </div>

                <div className="main-skills-grid">
                    <div className="skill-card main-skill-card">
                        <div className="skill-image-container">
                            <img src={frontendImg} alt="Development" className="skill-image" />
                            <div className="skill-overlay">
                                <h3>Development</h3>
                                <p>Building robust and scalable applications</p>
                            </div>
                        </div>
                    </div>

                    <div className="skill-card main-skill-card">
                        <div className="skill-image-container">
                            <img src={uxImg} alt="UI/UX Design" className="skill-image" />
                            <div className="skill-overlay">
                                <h3>UI/UX Design</h3>
                                <p>Creating intuitive and engaging user experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="technical-skills">
                <div className="technical-header">
                    <h2>Technical Stacks</h2>
                    <p>Technologies I work with</p>
                </div>

                <div className="tech-grid">
                    <div className="tech-category">
                        <h3>Frontend Development</h3>
                        <div className="tech-items">
                            <div className="tech-item">
                                <img src={group80} alt="Javascript" />
                                <span>Javascript</span>
                            </div>
                            <div className="tech-item">
                                <img src={group81} alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div className="tech-item">
                                <img src={group78} alt="CSS" />
                                <span>CSS</span>
                            </div>
                        </div>
                    </div>

                    <div className="tech-category">
                        <h3>Frameworks & Tools</h3>
                        <div className="tech-items">
                            <div className="tech-item">
                                <img src={icon1} alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-item">
                                <img src={iconReactNative} alt="React Native" />
                                <span>React Native</span>
                            </div>
                            <div className="tech-item">
                                <img src={group82} alt="Figma" />
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

    export default Skills