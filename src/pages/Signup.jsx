import React, { useState } from 'react';
import { Mail, Lock, User, UserPlus, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({ email, name });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h2 className="auth-title">Join Stellar</h2>
        <p className="auth-subtitle">Get early access to exclusive events globally</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <User size={18} className="input-icon" />
            <input 
              type="text" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input 
              type="password" 
              placeholder="Create Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Privacy Policy</label>
          </div>
          
          <button type="submit" className="book-btn" style={{marginTop: '1rem'}} disabled={isLoading}>
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <UserPlus size={18} style={{marginRight: '0.5rem'}} />
                Join Now
              </>
            )}
          </button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>

        <p className="auth-switch" style={{marginTop: '0.5rem', opacity: '0.7'}}>
          Are you staff? <Link to="/admin" style={{color: '#f59e0b'}}>Login as Admin</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
