import '../css/stylesheet.css'

const WhatsAppButton = () => (
    <a
        className="whatsapp-float"
        href="https://wa.me/27728078429?text=Hello%20Katlego%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Katlego on WhatsApp"
    >
        <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
                d="M16 4.5a11.2 11.2 0 0 0-9.55 17.05L5 27l5.62-1.42A11.2 11.2 0 1 0 16 4.5Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M12.1 10.7c-.35-.8-.72-.82-1.05-.83h-.9c-.32 0-.83.12-1.26.6-.43.47-1.65 1.61-1.65 3.93s1.69 4.57 1.92 4.89c.24.31 3.26 5.22 8.04 7.11 3.98 1.57 4.79 1.26 5.65 1.18.87-.08 2.8-1.14 3.2-2.25.4-1.1.4-2.05.28-2.25-.12-.2-.43-.32-.9-.55-.48-.24-2.81-1.39-3.24-1.54-.44-.16-.75-.24-1.06.24-.32.47-1.22 1.53-1.5 1.85-.28.31-.55.35-1.03.12-.47-.24-2-.74-3.81-2.35-1.41-1.26-2.37-2.82-2.65-3.29-.28-.47-.03-.73.21-.96.21-.21.47-.55.71-.83.24-.28.32-.47.48-.79.16-.31.08-.59-.04-.83-.12-.24-1.04-2.57-1.45-3.5Z"
                fill="currentColor"
                transform="translate(3 0) scale(.82)"
            />
        </svg>
        <span>Chat on WhatsApp</span>
    </a>
)

export default WhatsAppButton
