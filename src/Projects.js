import './Projects.css';
import React, {useState} from 'react';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const handleViewMore = () => {
        setShowAll(!showAll);
    }

    return (
        <div className="projects">
            <h1><span>Pro</span>jects</h1>
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
            {showAll && (
                <div className="view-more-div">
                    <div className="dummy-project">
                        <img src="https://github.com/vihanga02/my_portfolio/blob/main/src/img/Web-Development-Projects-1-2048x1001.png?raw=true" alt="dummy" />
                        <div className="project-content">
                            <h2>Dummy Project</h2>
                            <p>This is a dummy project to test the web page. I add this for increase the number of project divs in this page to testing purpuse. In future i will add more frojects to this section and remove this dummy projects.I hope now you know enough about this now. Enjoy my page.</p>
                            <p className="project-git"><a>Check this out!</a></p>
                        </div>         
                    </div> 
                    <div className='view-more-less'>
                        <button onClick={handleViewMore} className='view-less-button'>View Less</button>
                    </div>     
                </div>
            )}
            {!showAll && (
                <div className="view-more-less">
                    <button onClick={handleViewMore} className='view-more-button'>View More</button>
                </div>
            )}
            
        </div>
    );
}

export default Projects;