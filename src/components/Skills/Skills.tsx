import React from 'react';
import './Skills.css';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  iconColor?: string;
}

interface SkillsProps {
  className: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {

  return (
    <div className={`skills-container ${className}`}>

    </div>
  );
};

export default Skills;
