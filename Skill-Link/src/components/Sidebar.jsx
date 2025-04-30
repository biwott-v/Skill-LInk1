import React, { useState } from 'react'; 
import SkillCard from './SkillCard';
import {
  FaBolt, FaWrench, FaSnowflake, FaHammer, FaCar,
  FaPaintRoller, FaPenNib, FaLaptopCode, FaTshirt,
  FaCut, FaChalkboardTeacher, FaCamera, FaSearch,
  FaFilter, FaPlus
} from 'react-icons/fa';

export const iconMap = {
  1: <FaBolt />,
  2: <FaWrench />,
  3: <FaSnowflake />,
  4: <FaHammer />,
  5: <FaCar />,
  6: <FaPaintRoller />,
  7: <FaPenNib />,
  8: <FaLaptopCode />,
  9: <FaTshirt />,
  10: <FaCut />,
  11: <FaChalkboardTeacher />,
  12: <FaCamera />
};

const categories = [
  { id: 'all', name: 'All Skills' },
  { id: 'home', name: 'Home Services' },
  { id: 'creative', name: 'Creative' },
  { id: 'tech', name: 'Technology' },
  { id: 'personal', name: 'Personal Care' }
];

function Sidebar({ skills, onSelect, searchTerm, onSearch, selectedSkill }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Available Skills</h2>
        <div className="sidebar-actions">
          <button className="icon-button">
            <FaFilter />
          </button>
          <button className="icon-button">
            <FaPlus />
          </button>
        </div>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="skills-list">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(skill => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={onSelect}
              isSelected={selectedSkill?.id === skill.id}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No skills found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;