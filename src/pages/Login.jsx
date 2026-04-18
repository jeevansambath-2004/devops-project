import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({ email, name: 'Jeevan Sambath' });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Elevate your experience with StellarTickets</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
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
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <div className="auth-footer">
            <a href="#">Forgot Password?</a>
          </div>
          
          <button type="submit" className="book-btn" style={{marginTop: '1rem'}} disabled={isLoading}>
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <LogIn size={18} style={{marginRight: '0.5rem'}} />
                Sign In
              </>
            )}
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
