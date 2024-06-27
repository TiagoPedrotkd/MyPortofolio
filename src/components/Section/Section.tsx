import React, { useState, useEffect, useRef } from 'react';
import './Section.css'; // Certifique-se de criar e importar seu arquivo CSS

interface SectionProps {
  title: string;
  text: string;
  imageSrc: string;
  className: string;
}

const Section: React.FC<SectionProps> = ({ title, text, imageSrc, className }) => {
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
        </div>
        <img src={imageSrc} alt={title} />
      </div>
    </section>
  );
};

export default Section;