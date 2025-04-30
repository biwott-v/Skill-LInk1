import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const reviewData = review || {
    userId: 3,
    userName: "Sarah Johnson",
    rating: 5,
    date: "2023-10-15",
    content: "Excellent service! The electrician arrived on time and fixed all our issues quickly."
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-avatar">
          <img src={`https://i.pravatar.cc/150?img=${reviewData.userId}`} alt={reviewData.userName} />
        </div>
        <div className="reviewer-info">
          <h4>{reviewData.userName}</h4>
          <div className="review-rating">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < reviewData.rating ? 'star-filled' : 'star-empty'} 
              />
            ))}
          </div>
        </div>
        <div className="review-date">
          {new Date(reviewData.date).toLocaleDateString()}
        </div>
      </div>
      <div className="review-content">
        <p>{reviewData.content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;