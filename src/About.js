const About = () => {
    return (
        <div className="about-content">
            <h1>About Me</h1>
            <div className="about-1">
                <h2>Hi there,</h2>
                <p>
                I am a 22-year-old passionate developer from Galle, Sri Lanka. I am currently studying web development and app backend development.  I love to learn new things and do my best at anything that I do.
                </p>
                <p>
                In my free time, I love to travel with my friends and play cricket and football. I love to do new projects and gain knowledge and experience. So feel free to drop me a message.
                </p>
            </div>
            <div className="about-2">
                <h2>Education</h2>
                <div className="school">
                    <p className="time">2008-2021</p>
                    <p className="institute"><a href="https://www.richmondcollege.lk/">Richmond College</a></p>
                    <div className="exams">
                        <p className="passes">3 pasees</p>
                        <p>2021 Advanced Level (Physical Science).</p>
                        <p>Island Rank: 14</p>
                        <p className="passes">9A passes.</p>
                        <p>2028 Ordinary Level</p>
                    </div>
                </div>
                <div className="university">
                    <p className="time">since-2023</p>
                    <p className="institute"><a href="https://uom.lk/">University of Moratuwa</a></p>
                    <p className="degree">BSc (hons) in Computer Science and Engineering.</p>
                </div>
            </div>
            <div className="about-3">
                <h2>Skills</h2>
                <div className="skills">
                    <div className="tech-skills">
                        <h3>Tech Skills</h3>
                        <div className="language-logo">
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/python.svg" alt="python" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/java.svg" alt="java" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/c-plus-plus.svg" alt="cpp" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/react-javascript-js-framework-facebook.svg" alt="react" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/javascript.svg" alt="js" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/html-5.svg" alt="html" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/css-3.svg" alt="css" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/git.svg" alt="git" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/intellij-idea.svg" alt="intellij" />
                            <img src="https://raw.githubusercontent.com/vihanga02/my_portfolio/cb2bba3edb26a80c053193ede377c6f760ece5c8/src/img/vs-code.svg" alt="vs" />
                        </div>
                    </div>
                    <div className="language-skils">
                        <ul>
                            <li>English</li>
                            <li>Sinhala</li>
                        </ul>
                    </div>
                    <div className="other-skills">
                        <ul>
                            <li>HR Management</li>
                            <li>Social Services</li>
                            <li>Volunteering</li>
                            <li>Leadership</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-4">
                <h2>Experience</h2>
                <ul>
                    <li>Main coordinator of R2U workshop program 2022</li>
                    <li>Former Vice secretary of Richmond College Scociel service society</li>
                    <li>Member of Ephilogue'23 Logistic Commitee</li>
                    <li>Member of IESL Student Branch, University of Moratuwa</li>
                    <li>All island art competition participation</li>
                    <li>Volunteer at Sasnaka Sansada Foundation</li>
                </ul>
            </div>
        </div>
    );
}

export default About;