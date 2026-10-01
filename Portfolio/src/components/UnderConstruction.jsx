import '../css/UnderConstruction.css'

const UnderConstruction = ({ pageName }) => (
    <main className="development-notice" aria-labelledby="development-notice-title">
        <div className="development-notice__art" aria-hidden="true">
            <div className="development-orbit development-orbit--outer">
                <span className="development-orbit__dot" />
            </div>
            <div className="development-orbit development-orbit--inner">
                <span className="development-orbit__dot" />
            </div>

            <div className="development-window">
                <div className="development-window__topbar">
                    <span />
                    <span />
                    <span />
                    <i>building something good</i>
                </div>
                <div className="development-window__code">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className="development-window__progress">
                    <span />
                </div>
            </div>

            <span className="development-float development-float--left">&lt;/&gt;</span>
            <span className="development-float development-float--right">in progress</span>
        </div>

        <div className="development-notice__content">
            <p className="development-notice__eyebrow">
                <span />
                Work in progress
            </p>
            <h1 id="development-notice-title">
                Still in <span>development</span>
            </h1>
            <p className="development-notice__message">
                The {pageName} page is getting a little polish. The content is still here,
                just tucked away while I make improvements. Check back soon!
            </p>
        </div>
    </main>
)

export default UnderConstruction
