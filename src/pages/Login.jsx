import React from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Elevate your experience with StellarTickets</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input type="email" placeholder="Email Address" required />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="auth-footer">
            <a href="#">Forgot Password?</a>
          </div>
          
          <button type="submit" className="book-btn" style={{marginTop: '1rem'}}>
            <LogIn size={18} style={{marginRight: '0.5rem'}} />
            Sign In
          </button>
        </form>
        
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Create One</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
