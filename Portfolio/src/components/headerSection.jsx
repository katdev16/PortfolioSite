import { useEffect, useState } from 'react'
import '../css/stylesheet.css'

const pageSections = [
    { id: 'home', label: 'Introduction' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Services & skills' },
]

export const Headersection = ({ theme, onToggleTheme }) => {
    const [pageProgress, setPageProgress] = useState(0)
    const [activeSection, setActiveSection] = useState(pageSections[0])

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0
            const currentPosition = window.scrollY + window.innerHeight * 0.35

            setPageProgress(Math.min(100, Math.max(0, progress)))

            const currentSection = [...pageSections].reverse().find(({ id }) => {
                const section = document.getElementById(id)
                return section && section.offsetTop <= currentPosition
            })

            if (currentSection) {
                setActiveSection(currentSection)
            }
        }

        updateProgress()
        window.addEventListener('scroll', updateProgress, { passive: true })
        window.addEventListener('resize', updateProgress)

        return () => {
            window.removeEventListener('scroll', updateProgress)
            window.removeEventListener('resize', updateProgress)
        }
    }, [])

    return (
        <header className="site-header">
            {/* <div className="quarter-circle" aria-hidden="true" /> */}
            <div className="site-banner">
                <div className="site-banner__brand">
                    <span className="site-banner__monogram" aria-hidden="true">KD</span>
                    <span>
                        <strong>Katlego Dhlamini</strong>
                        <small>Digital design &amp; development</small>
                    </span>
                </div>
                <div className="site-banner__services">
                    <span>Websites</span>
                    <span>Apps</span>
                    <span>Software solutions</span>
                </div>
                <p className="site-banner__chapter">
                    <span>{String(pageSections.indexOf(activeSection) + 1).padStart(2, '0')}</span>
                    {activeSection.label}
                </p>
                <button
                    className="theme-toggle"
                    type="button"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    aria-pressed={theme === 'dark'}
                    onClick={onToggleTheme}
                >
                    <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
                </button>
            </div>
            <div className="page-progress" role="progressbar" aria-label="Page reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(pageProgress)}>
                <span style={{ transform: `scaleX(${pageProgress / 100})` }} />
            </div>
        </header>
    )
}
