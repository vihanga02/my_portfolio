import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="nano-processor">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/basys-3-0.png?raw=true" alt="board" />
                <div className="project-content">
                    <h2>Nano-Processor</h2>
                    <p>The assigned lab task is to design and develop a 4-bit nanoprocessor capable of executing 4 instructions. This includes several components that need to be developed or extended from the previous labs and this is a group project for Computer Organization and Digital Design module for semester 2. We used Vivado to all the coding and simulatioin works.</p>
                    <p className="project-git"><a href="https://github.com/vihanga02/Nano-Processor.git">Check this out!</a></p>
                </div>
            </div>
            <div className="grocery-shop">
                <div className="project-content">
                    <h2>POS System</h2>
                    <p>Required to develop a program to manage an online shopping system. The shopkeepers can login to the system and add new items and edit current items which are available in the shop. Customers can login to the system and track their current shopping cart. Backend is developed by Java and GUI is develop using JavaFX.</p>
                    <p className="project-git"><a href="https://github.com/vihanga02/Grocery_shop_System.git">Check this out!</a></p>
                </div>
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/benefits-supermarket-1024x683.jpg?raw=true" alt="market" />
            </div>
            <div className="dummy-project">
                <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/Web-Development-Projects-1-2048x1001.png?raw=true" alt="dummy" />
                <div className="project-content">
                    <h2>Dummy Project</h2>
                    <p>This is a dummy project to test the web page</p>
                    <p className="project-git"><a>Check this out!</a></p>
                </div>          
            </div>
        </div>
    );
}

export default Projects;