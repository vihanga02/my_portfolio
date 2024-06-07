import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/desktop-wallpaper-nillia-webdesign-web-development-management.jpg?raw=true" alt="developer-img" />
                <p id="name">Vihanga Muthumala</p>
                <p id="developer-tag">&lt;Developer&gt;</p>
            </div>
            <div className="thumbs">
                <div className="about-me-img">
                    <Link to="/my_portfolio/about">
                        <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/personal-profile-pixel-perfect-white-linear-icon-for-dark-theme-client-id-purchases-history-online-shopping-thin-line-illustration-isolated-symbol-for-night-mode-editable-stroke-arial-font-used-vector.jpg?raw=true" alt="projects" />
                        <p>Go to About</p>
                    </Link>
                </div>
                <div className="projects-img">
                    <Link to="/my_portfolio/projects">
                        <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/project.jpg?raw=true" alt="about-me" />
                        <p>Go to Projects</p>
                    </Link>
                </div>
                <div className="contact-img">
                    <Link to="/my_portfolio/contact">
                        <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/select-contact-photo-pixel-perfect-white-linear-ui-icon-for-dark-theme-put-profile-picture-line-pictogram-isolated-user-interface-symbol-for-night-mode-editable-stroke-vector.jpg?raw=true" alt="contact-me" />
                        <p>Go to Contacts</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;