import React from 'react';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h2 className="auth-title">Join Stellar</h2>
        <p className="auth-subtitle">Get early access to exclusive events globally</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <User size={18} className="input-icon" />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input type="password" placeholder="Create Password" required />
          </div>
          
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Privacy Policy</label>
          </div>
          
          <button type="submit" className="book-btn" style={{marginTop: '1rem'}}>
            <UserPlus size={18} style={{marginRight: '0.5rem'}} />
            Join Now
          </button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
