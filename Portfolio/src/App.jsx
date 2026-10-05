import { useEffect, useState } from 'react'
import './css/stylesheet.css'

import { Headersection } from './components/headerSection.jsx'
import { Footersection } from './components/footerSection.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/home.jsx'
import ParticlesJS from './components/particles.jsx'


function App() {
    const [theme, setTheme] = useState(() => (
        localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
    ))

    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', theme === 'dark')
        document.documentElement.style.colorScheme = theme
    }, [theme])

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('portfolio-theme', nextTheme)
        setTheme(nextTheme)
    }

    return (
        <>
            <Headersection theme={theme} onToggleTheme={toggleTheme} />
            <ParticlesJS />
            <Home />
            <WhatsAppButton />
            <Footersection />
        </>
    )
}

export default App
