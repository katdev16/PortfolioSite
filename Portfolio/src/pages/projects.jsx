
    import React from 'react'
    import screenshotImg from '../assets/Screenshot 2025-10-27 095249.png'
    import '../css/Project.css'

    const Projects = () => {
        return (
            <div className="section">
                <div className="sectionText">
                    <h1>My Projects</h1>
                    <p>Here are some of the projects I've worked on.</p>
                </div>

                <div className="Domains">
                    <div className="sectionContent" id="All" style={{ backgroundColor: 'orange', color: 'white' }}>
                        <p>All</p>
                    </div>
                    <div className="sectionContent" id="web-development">
                        <p>web-development</p>
                    </div>
                    <div className="sectionContent" id="designs">
                        <p>designs</p>
                    </div>
                    <div className="sectionContent" id="case-studies">
                        <p>case-studies</p>
                    </div>
                </div>

                <div className="projects">
                    <div className="designsProject" id="designsProject">
                        <img src={screenshotImg} alt="Design1" className="Project-Image" />
                        designsProject
                    </div>
                    <div className="case-studiesProject">case-studiesProject</div>
                    <div className="web-developmentProject">web-developmentProject</div>
                    <div className="web-developmentProject">web-developmentProject</div>
                </div>
            </div>
        )
    }

    export default Projects