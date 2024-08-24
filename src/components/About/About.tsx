import Nav from '../Nav/Nav';
import Section from '../Section/Section';
import "./About.css";


const About = () => (
    <section style={{ background: "#222", color: "#fff" }}>
      <Nav title="Home" />
      <div className='about'>
        <Section title="Tiago Pedro" text="I'm passionate about crafting engaging content that captivates and inspires audiences worldwide." className="about"/>
        <Section title="Skills" text="My expertise spans content writing, copyediting, SEO optimization, and social media management, delivering exceptional results." className="skills"/>
        <Section title="Contact" text="Contact me to create a customized website that elevates your business or personal project to the next level." className="contact"/>
      </div>
    </section>
);

export default About