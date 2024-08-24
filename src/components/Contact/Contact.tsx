import Nav from "../Nav/Nav";
import './Contact.css';

const Contact = () => (
  <section className="contact-section">
    <Nav title="Contact Me" />
    <div className="contact-container">
      <h1>Let's Build Your Website</h1>
      <p>Are you looking to create a stunning website for your business or personal project? I'm here to help!</p>

      <div className="services-info">
        <h2>My Web Design Services</h2>
        <ul>
          <li>React-Based Web Applications</li>
          <li>Responsive Design with CSS and Bootstrap</li>
          <li>HTML5 & CSS3 for Modern Web Standards</li>
          <li>JavaScript for Interactive Features</li>
          <li>Content Management Systems (CMS) Integration</li>
          <li>Website Performance Optimization</li>
          <li>Ongoing Website Maintenance & Support</li>
        </ul>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: your.email@example.com</p>
        <p>Phone: (+351) 965619393</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tiago-soares-5b1ab4282" target="_blank" rel="noopener noreferrer"> My LinkedIn</a></p>
      </div>

      <div className="contact-form">
        <h2>Get a Quote</h2>
        <p>Fill out the form below, and I'll get back to you with a personalized quote and discuss how we can bring your vision to life.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
