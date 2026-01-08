import React from 'react'
import katImg from '../assets/KAT.jpeg'
import timeIcon from '../assets/time_auto_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import locationIcon from '../assets/location_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrowIcon from '../assets/keyboard_double_arrow_up_24dp_1F1F1F.svg'
import schoolIcon from '../assets/school_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import workIcon from '../assets/work_history_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import growthIcon from '../assets/trending_up_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import '../css/AboutStylesheet.css'
export const About = () => {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <>
            <div className="About">
                <div className="AboutMe">
                    <h1>About Me</h1>
                    <p>
                        I am passionate about transforming
                        <br /> ideas into tangible software <br /> solutions. I continuously strive to
                        <br /> enhance my skills and knowledge. <br /> My goal is to stay at the forefront of
                        <br /> technological advancements by <br /> embracing lifelong learning and
                        <br /> professional development. I am <br /> dedicated to building efficient,
                        <br /> scalable, and innovative applications <br /> that make a difference.
                    </p>

                    <button>Contact Me</button>
                </div>

                <img src={katImg} alt="Circular Image" className="Image" />
            </div>

            <hr />

            <div className="Section">
                <div className="MainBackground">
                    <div style={{ display: 'none' }} id="MainBackgroundText">
                        <div className="Background">
                            <div className="Edu">
                                <h1>Education</h1>
                                <p>
                                    Professional background
                                    <br /> and career progression
                                </p>
                            </div>
                            <div className="Exp">
                                <h1>Experience</h1>
                                <p>
                                    Professional background
                                    <br /> and career progression
                                </p>
                            </div>
                        </div>

                        <div className="Background2">
                            <div className="Edu">
                                <h3>Ui/Ux Designer - Nagarro</h3>
                                <div className="date">
                                    <img src={timeIcon} alt="time" className="Calendar" />
                                    <p>April 2025 - Present</p>
                                </div>
                                <div className="date">
                                    <img src={locationIcon} alt="location" className="Calendar" />
                                    <p>Johannesburg</p>
                                </div>
                                <p>
                                    As a UI/UX Designer at Nagarro, I am responsible for creating intuitive and
                                    engaging user interfaces for web and mobile applications. My role involves
                                    collaborating with cross-functional teams to understand user needs, conducting
                                    user research, and translating insights into effective design solutions. I
                                    utilize design tools such as Figma and Adobe XD to create wireframes,
                                    prototypes, and high-fidelity designs that enhance user experience and drive
                                    business goals.
                                </p>
                            </div>
                            <div className="Exp">
                                <h3>Ui/Ux Designer - Nagarro</h3>
                                <div className="date">
                                    <img src={timeIcon} alt="time" className="Calendar" />
                                    <p>April 2025 - Present</p>
                                </div>
                                <div className="date">
                                    <img src={locationIcon} alt="location" className="Calendar" />
                                    <p>Johannesburg</p>
                                </div>
                                <p>
                                    Intense software development programs focusing on Java development along with
                                    OOP principles along with problem-solving skills in software engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={arrowIcon} className="slider1" onClick={scrollToTop} alt="scroll up" />
            </div>

            <h1>Background</h1>
            <div className="MainBackground2">
                <div className="Content">
                    <img src={schoolIcon} className="work" alt="school" />
                    <h3>Education</h3>
                    <p>Information Technology</p>
                </div>
                <div className="Content">
                    <img src={workIcon} className="work" alt="work" />
                    <h3>Experience</h3>
                    <p>+ 6 Months work experience</p>
                </div>
                <div className="Content">
                    <img src={growthIcon} className="work" alt="growth" />
                    <h3>Growth</h3>
                    <p>
                        Ui/Ux Desinger and Developer at Nagarro
                        <br />
                    </p>
                </div>
            </div>
        </>
    )
}
export default About