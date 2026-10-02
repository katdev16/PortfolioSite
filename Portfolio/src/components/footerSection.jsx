import { useState } from 'react'
import katImg from '../assets/KAT.jpeg'
import linkedinImg from '../assets/icons8-linkedin-48.png'
import InstagramLogo from "../assets/instagram.png"
import githubImg from '../assets/icons8-github-30.png'
import '../css/stylesheet.css'

export const Footersection = () => {
    const [footerOpen, setFooterOpen] = useState(false)

    return (
        <footer className={`portfolio-footer${footerOpen ? ' portfolio-footer--open' : ''}`}>
            <div className="portfolio-footer__inner">
                <div
                    className="portfolio-footer__panel"
                    id="portfolio-footer-panel"
                    aria-hidden={!footerOpen}
                >
                    <section className="portfolio-footer__cta" aria-labelledby="footer-cta-heading">
                        <div>
                            <p className="portfolio-footer__eyebrow">Have a project in mind?</p>
                            <h2 id="footer-cta-heading">Let’s build something useful for your business.</h2>
                        </div>
                        <a className="portfolio-footer__contact-button" href="mailto:katlegodhlamini2003@gmail.com" tabIndex={footerOpen ? 0 : -1}>
                            Start a conversation
                            <span aria-hidden="true">↗</span>
                        </a>
                    </section>

                    <div className="portfolio-footer__details">
                        <section className="portfolio-footer__profile" aria-label="About Katlego">
                            <div className="portfolio-footer__identity">
                                <img src={katImg} alt="" />
                                <div>
                                    <h3>Katlego Dhlamini</h3>
                                    <p>UI/UX designer &amp; developer</p>
                                </div>
                            </div>
                            <p className="portfolio-footer__bio">
                                Thoughtful design and practical technology for better digital experiences.
                            </p>
                            <nav className="portfolio-footer__socials" aria-label="Social links">
                                <a href="https://www.instagram.com/katlegodev_/" tabIndex={footerOpen ? 0 : -1}>
                                    <img src={InstagramLogo} alt="" />
                                    <span>Instagram</span>
                                </a>
                                <a href="https://github.com/katdev16" target="_blank" rel="noopener noreferrer" tabIndex={footerOpen ? 0 : -1}>
                                    <img src={githubImg} alt="" />
                                    <span>GitHub</span>
                                </a>
                            </nav>
                        </section>

                        <section className="portfolio-footer__contact" aria-labelledby="footer-contact-heading">
                            <h3 id="footer-contact-heading">Get in touch</h3>
                            <a href="mailto:katlegodhlamini2003@gmail.com" tabIndex={footerOpen ? 0 : -1}>katlegodhlamini2003@gmail.com</a>
                            <p>Johannesburg, South Africa</p>
                        </section>
                    </div>

                    <div className="portfolio-footer__bottom">
                        <p>© {new Date().getFullYear()} Katlego Dhlamini</p>
                        <p>Designed with purpose.</p>
                    </div>
                </div>

                <button
                    className="portfolio-footer__toggle"
                    type="button"
                    aria-expanded={footerOpen}
                    aria-controls="portfolio-footer-panel"
                    onClick={() => setFooterOpen((open) => !open)}
                >
                    <span>{footerOpen ? 'Close' : 'Let’s connect'}</span>
                    <span className="portfolio-footer__toggle-icon" aria-hidden="true">⌃</span>
                </button>
            </div>
        </footer>
    )
}
