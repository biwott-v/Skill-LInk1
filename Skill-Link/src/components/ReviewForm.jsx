import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ skillId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      onSubmit({
        skillId,
        rating,
        comment,
        date: new Date().toISOString()
      });
      setRating(0);
      setComment('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="review-form">
      <h3>Add Your Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="star-rating">
          {[...Array(5)].map((_, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                  size={24}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        
        <div className="form-group">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience..."
            required
            rows={4}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting || rating === 0}
          className="submit-button"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;