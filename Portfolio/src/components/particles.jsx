import { useEffect } from 'react'

export default function ParticlesJS({ theme }) {
  useEffect(() => {
    let active = true
    let script

    const initializeParticles = () => {
      if (!active) return

      window.pJSDom?.forEach(({ pJS }) => pJS.fn.vendors.destroypJS())
      window.pJSDom = []

      const isDarkMode = theme === 'dark'
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: isDarkMode ? ['#ff8c00', '#f1f3f6'] : ['#ff8c00', '#000000'] },
          size: { value: 5, random: true, anim: { enable: false, speed: 40, size_min: 0.1 } },
          move: { enable: true, speed: 2 },
          line_linked: {
            enable: true,
            distance: 150,
            color: isDarkMode ? '#c0c8d3' : '#000000',
            opacity: isDarkMode ? 0.35 : 0.4,
            width: 1,
          },
        },
      });
    };

    if (window.particlesJS) {
      initializeParticles()
    } else {
      script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
      script.async = true
      script.onload = initializeParticles
      document.body.appendChild(script)
    }

    return () => {
      active = false
      if (script?.isConnected) script.remove()
      window.pJSDom?.forEach(({ pJS }) => pJS.fn.vendors.destroypJS())
      window.pJSDom = []
    }
  }, [theme])

  return <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, pointerEvents: 'none' }} />
}