const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="nano-processor">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/basys-3-0.png?raw=true" alt="board" />
                <h2>Nano-Processor</h2>
                <p>The assigned lab task is to design and develop a 4-bit nanoprocessor capable of executing 4 instructions. This includes several components that need to be developed or extended from the previous labs and this is a group project for Computer Organization and Digital Design module for semester 2. We used Vivado to all the coding and simulatioin works.</p>
                <p className="project-git"><a href="https://github.com/vihanga02/Nano-Processor.git"></a>Check this out!</p>
            </div>
            <div className="grocery-shop">
                <img src="" alt="" />
            </div>
        </div>
    );
}

export default Projects;