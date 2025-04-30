import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaStar, FaSearch, FaBolt, FaWrench, FaPaintRoller } from 'react-icons/fa';

const Home = () => {
  const popularServices = [
    { id: 1, icon: <FaBolt />, title: 'Electrician', description: 'Wiring, installations, repairs' },
    { id: 2, icon: <FaWrench />, title: 'Plumbing', description: 'Leaks, installations, maintenance' },
    { id: 3, icon: <FaPaintRoller />, title: 'Painting', description: 'Walls, ceilings, exteriors' }
  ];

  return (
    <div className="home-page">
    
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find the perfect <span>service professional</span> for any task</h1>
          <p>Book trusted professionals for all your home services, creative projects, and personal needs.</p>
          <Link to="/login" className="cta-button">
            Get Started <FaArrowRight />
          </Link>
        </div>

        <div className="hero-image">
          <div className="floating-card card-1">
            <FaCheckCircle />
            <span>Verified Pros</span>
          </div>
          <div className="floating-card card-2">
            <FaStar />
            <span>5-Star Reviews</span>
          </div>
          <div className="floating-card card-3">
            <FaSearch />
            <span>Easy Booking</span>
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <h2>Why Choose Our Platform</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-circle verified">
              <FaCheckCircle />
            </div>
            <h3>Verified Professionals</h3>
            <p>All service providers undergo strict verification and background checks for your safety.</p>
          </div>
          <div className="feature-card">
            <div className="icon-circle pricing">
              <FaStar />
            </div>
            <h3>Quality Guaranteed</h3>
            <p>We maintain high standards and only work with top-rated professionals in each field.</p>
          </div>
          <div className="feature-card">
            <div className="icon-circle support">
              <FaSearch />
            </div>
            <h3>Easy to Use</h3>
            <p>Simple booking process with transparent pricing and real-time availability.</p>
          </div>
        </div>
      </section>

      
      <section className="services-section">
        <div className="section-header">
          <h2>Popular Services</h2>
          <Link to="/login" className="see-all">
            See all <FaArrowRight />
          </Link>
        </div>
        <div className="services-grid">
          {popularServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join thousands of satisfied customers who trust us for their service needs.</p>
          <div className="cta-buttons">
            <Link to="/login" className="primary-cta">Sign Up Now</Link>
            <Link to="/login" className="secondary-cta">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;