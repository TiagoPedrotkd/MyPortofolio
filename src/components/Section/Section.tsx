import React, { useState, useEffect, useRef } from 'react';
import './Section.css'; // Certifique-se de criar e importar seu arquivo CSS

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
          <h2>{title}</h2>
          <p>{text}</p>
          <div className={`${className}-social-links`}>
            <a href="https://github.com/TiagoPedrotkd"><i className='ai-github-fill'></i></a>
            <a href="https://www.linkedin.com/in/tiago-soares-5b1ab4282"><i className='ai-linkedin-box-fill'></i></a>
            <a href="https://wa.me/351965619393"><i className='ai-whatsapp-fill'></i></a>
          </div>
        </div>
        <div className='card'>
        </div>
      </div>
    </section>
  );
};

export default Section;