import React from 'react';
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ProviderCard = ({ provider }) => {
  const providerData = provider || {
    id: 1,
    name: "John Doe",
    rating: 4.5,
    reviews: 42,
    location: "New York, NY",
    skills: ["Electrical", "Installation"]
  };

  return (
    <div className="provider-card">
      <div className="provider-avatar">
        <img src={`https://i.pravatar.cc/150?img=${providerData.id}`} alt={providerData.name} />
        <FaCheckCircle className="verified-badge" />
      </div>
      <div className="provider-info">
        <h3>{providerData.name}</h3>
        <div className="provider-rating">
          <FaStar className="star-icon" />
          <span>{providerData.rating.toFixed(1)}</span>
          <span className="review-count">({providerData.reviews} reviews)</span>
        </div>
        <div className="provider-location">
          <FaMapMarkerAlt />
          <span>{providerData.location}</span>
        </div>
        <div className="provider-skills">
          {providerData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
      <button className="hire-button">Hire</button>
    </div>
  );
};

export default ProviderCard;