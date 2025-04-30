import React from 'react';
import { iconMap } from './Sidebar';

const SkillCard = ({ skill, onClick, isSelected }) => {
  return (
    <div 
      className={`skill-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(skill)}
    >
      <div className="skill-icon">{iconMap[skill.id]}</div>
      <div className="skill-content">
        <h3>{skill.title}</h3>
        <p className="skill-excerpt">{skill.description.substring(0, 60)}...</p>
      </div>
      <div className="skill-rating">
        <span className="stars">★★★★★</span>
        <span className="reviews">({skill.reviewsCount} reviews)</span>
      </div>
    </div>
  );
};

export default SkillCard;