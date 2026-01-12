import { useEffect } from 'react';
 
export default function ParticlesJS() {
  useEffect(() => {
    // Load particles.js from CDN or installed package
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);
 
    script.onload = () => {
      window.particlesJS('particles-js', {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": ["#ff8c00", "#000000"] },
          "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1 } },
          "move": { "enable": true, "speed": 2 },
          "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 }
        }
      });
    };
 
    return () => {
      document.body.removeChild(script);
    };
  }, []);
 
  return <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1 }} />;
}