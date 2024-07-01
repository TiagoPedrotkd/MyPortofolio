import React, { useState, useEffect } from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFramer } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Marquee from "react-fast-marquee";
import "./Skills.css";
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  iconColor?: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', icon: RiReactjsLine, iconColor: '#61dafb' },
    { name: 'HTML5', icon: RiHtml5Fill, iconColor: '#e54d26' },
    { name: 'CSS3', icon: FaCss3Alt, iconColor: '#2965f1' },
    { name: 'Java', icon: FaJava, iconColor: '#007396' },
    { name: 'Python', icon: FaPython, iconColor: '#3572A5' },
    { name: 'JavaScript', icon: IoLogoJavascript, iconColor: '#f0db4f' },
    { name: 'Node.js', icon: SiFramer, iconColor: '#68a063' },
    { name: 'Bootstrap', icon: RiTailwindCssFill, iconColor: '#7952b3' },
    { name: 'Angular', icon: SiCanva, iconColor: '#b52e31' },
    { name: 'Database', icon: GrMysql, iconColor: '#00758F' },
    // Adicionar mais habilidades conforme necessário
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % skills.length);
    }, 2000); // Velocidade de rolagem (2 segundos)

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className="skills-container">
      <div className="marquee-wrapper">
        <Marquee>
          {skills.map((skill, index) => (
            <div key={index} className={`skill ${index === position ? 'active' : ''}`} style={{ borderColor: skill.iconColor }}>
              <skill.icon style={{ color: skill.iconColor }} />
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
