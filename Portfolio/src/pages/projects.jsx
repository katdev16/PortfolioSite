
    import React, { useState } from 'react'
import '../css/Project_new.css'

// Placeholder project data
const projectData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "web-development",
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
        category: "web-development",
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
        technologies: ["React", "CSS3", "Vite", "Particles.js"],
        category: "web-development",
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 4,
        title: "Mobile App UI Design",
        description: "Clean and intuitive mobile app design for a fitness tracking application with focus on user experience and accessibility.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
        technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
        category: "designs",
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 5,
        title: "Brand Identity Design",
        description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=250&fit=crop",
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Brand Strategy"],
        category: "designs",
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 6,
        title: "UX Research Case Study",
        description: "Comprehensive UX research and design process for a healthcare application, including user interviews, prototyping, and testing.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
        technologies: ["User Research", "Wireframing", "Usability Testing", "Analytics"],
        category: "case-studies",
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 7,
        title: "API Integration Project",
        description: "Complex API integration for a financial dashboard with real-time data visualization and automated reporting features.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        technologies: ["REST API", "Python", "Django", "Chart.js"],
        category: "web-development",
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 8,
        title: "Landing Page Design",
        description: "High-converting landing page design for a SaaS product with A/B testing optimization and conversion rate improvement.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        technologies: ["HTML", "CSS", "JavaScript", "Conversion Optimization"],
        category: "designs",
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    }
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [filteredProjects, setFilteredProjects] = useState(projectData)

    const handleDomainClick = (category) => {
        setActiveFilter(category)
        if (category === 'All') {
            setFilteredProjects(projectData)
        } else {
            setFilteredProjects(projectData.filter(project => project.category === category))
        }
    }

    const categories = [
        { id: 'All', label: 'All Projects' },
        { id: 'web-development', label: 'Web Development' },
        { id: 'designs', label: 'Designs' },
        { id: 'case-studies', label: 'Case Studies' }
    ]

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1 className="projects-title">My Projects</h1>
                <p className="projects-subtitle">
                    Here are some of the projects I've worked on. Each project represents a unique challenge
                    and showcases different skills and technologies.
                </p>
            </div>

            <div className="filter-section">
                <div className="filter-buttons">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                            onClick={() => handleDomainClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-grid">
                {filteredProjects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                loading="lazy"
                            />
                            {project.featured && (
                                <div className="featured-badge">Featured</div>
                            )}
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15,3 21,3 21,9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="no-projects">
                    <h3>No projects found in this category</h3>
                    <p>Try selecting a different filter to see more projects.</p>
                </div>
            )}
        </div>
    )
}

export default Projects