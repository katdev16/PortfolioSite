import katImg from '../assets/KAT.jpeg'
import '../css/AboutStylesheet_new.css'

const services = [
    {
        number: '01',
        title: 'UI/UX design',
        description: 'Clear, user-friendly experiences shaped around your customers and the goals of your business.',
        detail: 'Research · Wireframes · Interface design',
    },
    {
        number: '02',
        title: 'Web development',
        description: 'Responsive, reliable websites that communicate what you do and make it easy to take action.',
        detail: 'Front-end development · Responsive builds',
    },
    {
        number: '03',
        title: 'Product improvement',
        description: 'A fresh look at your existing digital product to find friction and make the experience work better.',
        detail: 'UX reviews · Usability improvements',
    },
]

const process = [
    {
        number: '01',
        title: 'Understand',
        description: 'We start with your business, your audience, and what you need the work to achieve.',
    },
    {
        number: '02',
        title: 'Shape',
        description: 'I map out a clear direction and design an experience that fits your goals.',
    },
    {
        number: '03',
        title: 'Build',
        description: 'I bring the approved direction to life and refine the details with you.',
    },
]

const About = () => (
    <section className="about-page" id="about" aria-labelledby="about-heading">
        <section className="about-hero" aria-labelledby="about-heading">
            <div className="about-hero__copy">
                <p className="about-eyebrow">UI/UX design &amp; web development</p>
                <h1 id="about-heading">
                    Digital experiences that help your <span>business move forward.</span>
                </h1>
                <p className="about-hero__intro">
                    I help businesses turn ideas into thoughtful, useful digital experiences—from
                    the first design to a polished website your customers can use with confidence.
                </p>
                <div className="about-hero__actions">
                    <a className="about-button about-button--primary" href="mailto:katlegodhlamini2003@gmail.com">
                        Tell me about your project
                        <span aria-hidden="true">↗</span>
                    </a>
                    <a className="about-button about-button--text" href="#about-services">
                        Explore services
                    </a>
                </div>
                <p className="about-hero__note">Thoughtful design. Practical technology. Built around your goals.</p>
            </div>

            <div className="about-hero__visual">
                <div className="about-portrait">
                    <img src={katImg} alt="Katlego Dhlamini, UI/UX designer and developer" />
                </div>
                <div className="about-portrait__caption">
                    <span className="about-portrait__dot" aria-hidden="true" />
                    <span>
                        <strong>Katlego Dhlamini</strong>
                        <small>Designer &amp; developer</small>
                    </span>
                </div>
                <div className="about-hero__visual-label" aria-hidden="true">
                    <span>DESIGN</span>
                    <span>DEVELOP</span>
                    <span>DELIVER</span>
                </div>
            </div>
        </section>

        <section className="about-services" id="about-services" aria-labelledby="services-heading">
            <div className="about-section-heading">
                <p className="about-eyebrow">How I can help</p>
                <h2 id="services-heading">Good work starts with the right solution.</h2>
                <p>
                    Whether you are starting from scratch or improving what you already have,
                    I bring design and development together to solve real business needs.
                </p>
            </div>
            <div className="about-service-grid">
                {services.map((service) => (
                    <article className="about-service-card" key={service.number}>
                        <span className="about-service-card__number">{service.number}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="about-service-card__detail">{service.detail}</span>
                    </article>
                ))}
            </div>
        </section>

        <section className="about-approach" aria-labelledby="approach-heading">
            <div className="about-approach__intro">
                <p className="about-eyebrow">A straightforward process</p>
                <h2 id="approach-heading">From your idea to a better digital experience.</h2>
                <p>
                    A collaborative process keeps the work focused, transparent, and connected
                    to the outcome your business needs.
                </p>
            </div>
            <ol className="about-process">
                {process.map((step) => (
                    <li className="about-process__step" key={step.number}>
                        <span className="about-process__number">{step.number}</span>
                        <div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-heading">
            <div>
                <p className="about-eyebrow">Have something in mind?</p>
                <h2 id="about-cta-heading">Let’s make it work for your business.</h2>
                <p>Share what you are working on, and we can figure out a useful next step.</p>
            </div>
            <a className="about-button about-button--light" href="mailto:katlegodhlamini2003@gmail.com">
                Start a conversation
                <span aria-hidden="true">↗</span>
            </a>
        </section>
    </section>
)

export default About
