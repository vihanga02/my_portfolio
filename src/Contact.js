import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>What's Up?</h1>
            <h2>Lets Collab....</h2>
            <div className="name">
                <form className="contact-form">
                    <label htmlFor="name-text" className="input-label">Name</label>
                    <input type="text" className="text-input" id="name-text" placeholder="Enter name" required/>
                    <label htmlFor="email-text" className="input-label">Email</label>
                    <input type="text" className="text-input" id="email-text" placeholder="Enter email" required/>
                    <label htmlFor="message-text" className="input-label">Message</label>
                    <input type="text" className="text-input" id="message-text" placeholder="Type here" required/>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;