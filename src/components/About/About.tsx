import Nav from '../Nav/Nav';
import Section from '../Section/Section';

import perfil from "../../images/perfil_image.png";

import "./About.css";


const About = () => (
    <section style={{ background: "#222", color: "#fff" }}>
      <Nav title="Home" />
      <div className='about'>
        <Section title="Tiago Pedro" text="I'm passionate about crafting engaging content that captivates and inspires audiences worldwide." imageSrc={perfil} className="about"/>
        <Section title="Skills" text="My expertise spans content writing, copyediting, SEO optimization, and social media management, delivering exceptional results." imageSrc="" className="skills"/>
        <Section title="Contact" text="Get in touch to book me and start building your dream e-commerce product today." imageSrc="" className="contact"/>
      </div>
    </section>
);

export default About