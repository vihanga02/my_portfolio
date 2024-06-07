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
                            img
                        </div>
                    </div>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>C++</p>
                </div>
            </div>
        </div>
    );
}

export default About;