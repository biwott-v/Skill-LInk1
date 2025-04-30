import React, { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      if (email && password) {
        onLogin({ email });
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header animated fadeInDown">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group animated fadeInLeft delay-1">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="input-highlight"></div>
          </div>

          <div className="form-group animated fadeInLeft delay-2">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="input-highlight"></div>
          </div>

          <div className="form-options animated fadeIn delay-3">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="animated fadeInUp delay-4"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="divider animated fadeIn delay-5">
          <span>or continue with</span>
        </div>

        <div className="social-login animated fadeIn delay-6">
          <button>
            <FaGoogle /> Google
          </button>
          <button>
            <FaGithub /> GitHub
          </button>
          <button>
            <FaFacebook /> Facebook
          </button>
        </div>

        <div className="signup-link animated fadeIn delay-7">
          Don't have an account? <a href="#signup">Sign up</a>
        </div>
      </div>

      <div className="login-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
};

export default Login;