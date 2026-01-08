
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
            <>
                <div className="section">
                    <div className="text">
                        <h1>My Skills</h1>
                        <p>Here are some of the skills I've acquired along my journey.</p>
                    </div>
                    <div className="sectionSkills">
                        <div className="section-content">
                            <img src={frontendImg} alt="Development" />
                            <h2>Development</h2>
                        </div>
                        <div className="section-content">
                            <img src={uxImg} alt="Ui/UX Design" />
                            <h2>Ui/UX Design</h2>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="section2">
                    <div className="text">
                        <div className="content">
                            <h1>Technical Stacks</h1>
                            <p>Technologies I work with.</p>
                        </div>
                    </div>
                    <div className="sectionSkills">
                        <div className="section-content2">
                            <div>
                                <img src={group80} alt="Javascript" />
                                <p>Javascript</p>
                            </div>
                            <div>
                                <img src={group81} alt="HTML" />
                                <p>HTML</p>
                            </div>
                            <div>
                                <img src={icon1} alt="React" />
                                <p>React</p>
                            </div>
                        </div>

                        <div className="section-content2">
                            <div>
                                <img src={group78} alt="CSS" />
                                <p>Css</p>
                            </div>
                            <div>
                                <img src={group82} alt="Figma" />
                                <p>Figma</p>
                            </div>
                            <div>
                                <img src={iconReactNative} alt="React Native" />
                                <p>React Native</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Skills