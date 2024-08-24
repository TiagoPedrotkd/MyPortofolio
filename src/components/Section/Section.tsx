import React, { useState, useEffect, useRef } from 'react';
import './Section.css';
import Skills from '../Skills/Skills';

interface SectionProps {
  title: string;
  text: string;
  className: string;
}

const Section: React.FC<SectionProps> = ({ title, text, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="no-parallax sections">
      <div
        ref={sectionRef}
        className={`${className}-div ${isVisible ? 'in' : 'out'}`}
      >
        <div>
          <h2 className={`${className}-title`}>{title}</h2>
          <p className={`${className}-text`}>{text}</p>
          <div className={`${className}-social-links`}>
            <a href="https://github.com/TiagoPedrotkd" className='a-github'><i className='ai-github-fill'></i></a>
            <a href="https://www.linkedin.com/in/tiago-soares-5b1ab4282" className='a-linkedin'><i className='ai-linkedin-box-fill'></i></a>
            <a href="https://wa.me/351965619393" className='a-whatsapp'><i className='ai-whatsapp-fill'></i></a>
          </div>
          <div className={`${className}-cube-skills`}>
            <Skills className={isVisible ? 'in' : 'out'} />
          </div>
        </div>
        <div className='card'>
          <div className="contact-card">
            <h2 className={`${className}-card-title`}>{title} Me</h2>
            <p className={`${className}-card-text`}>
              {text}
            </p>
            <button
              className="contact-button"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;