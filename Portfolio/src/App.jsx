import './css/stylesheet.css'

import { Headersection } from './components/headerSection.jsx'
import { Footersection } from './components/footerSection.jsx'
import Home from './pages/home.jsx'
import ParticlesJS from './components/particles.jsx'


function App() {
    return (
        <>
            <Headersection />
            <ParticlesJS />
            <Home />
            <Footersection />
        </>
    )
}

export default App
