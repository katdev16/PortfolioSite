import '../css/Skills.css'

const services = [
    {
        number: '01',
        title: 'Website creation',
        description: 'Responsive, accessible websites that tell your story clearly and help customers take the next step.',
        tags: ['Business websites', 'Landing pages', 'Responsive design'],
    },
    {
        number: '02',
        title: 'Apps & digital products',
        description: 'Useful app experiences shaped around the people who use them and the problems they need solved.',
        tags: ['Mobile experiences', 'UI/UX design', 'Prototyping'],
    },
    {
        number: '03',
        title: 'Software solutions',
        description: 'Practical software that helps streamline workflows, connect processes, and support business growth.',
        tags: ['Custom interfaces', 'Workflow tools', 'Front-end builds'],
    },
]

const skills = [
    { name: 'UI/UX design', tools: 'Figma · User flows · Prototyping' },
    { name: 'Frontend development', tools: 'HTML · CSS · JavaScript · React' },
    { name: 'Mobile development', tools: 'React Native' },
]

const Skills = () => (
    <section className="service-skills" id="skills" aria-labelledby="skills-heading">
        <header className="service-skills__header">
            <p className="service-skills__eyebrow">Services &amp; capabilities</p>
            <h2 id="skills-heading">From a first idea to a solution people can use.</h2>
            <p>
                I combine design and development to create websites, apps, and software
                experiences that fit the way your business works.
            </p>
        </header>

        <div className="service-skills__grid">
            {services.map((service) => (
                <article className="service-card" key={service.number}>
                    <div className="service-card__topline">
                        <span>{service.number}</span>
                        <span className="service-card__spark" aria-hidden="true">✳</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p className="service-card__description">{service.description}</p>
                    <ul className="service-card__tags" aria-label={`${service.title} capabilities`}>
                        {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="service-card__progress">
                        <div className="service-card__progress-label">
                            <span>Plan · Design · Build</span>
                            <span>Full cycle</span>
                        </div>
                        <div className="service-card__track" aria-hidden="true">
                            <span />
                        </div>
                    </div>
                </article>
            ))}
        </div>

        <div className="service-skills__toolkit">
            <div className="service-skills__toolkit-intro">
                <p className="service-skills__eyebrow">My toolkit</p>
                <h3>Design-minded. Build-ready.</h3>
                <p>The tools and skills I bring together to move a project forward.</p>
            </div>
            <ul className="service-skills__list">
                {skills.map((skill) => (
                    <li className="service-skill" key={skill.name}>
                        <div>
                            <h4>{skill.name}</h4>
                            <p>{skill.tools}</p>
                        </div>
                        <span aria-hidden="true">↗</span>
                    </li>
                ))}
            </ul>
        </div>

        <a className="service-skills__contact" href="mailto:katlegodhlamini2003@gmail.com">
            Let’s talk about what you need
            <span aria-hidden="true">↗</span>
        </a>
    </section>
)

export default Skills
