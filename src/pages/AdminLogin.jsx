import React, { useState } from 'react';
import { ShieldCheck, Lock, LogIn, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate Admin Auth
    setTimeout(() => {
      onLogin({ email, name: 'System Admin', isAdmin: true });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-container admin-theme">
      <div className="auth-card glass admin-border">
        <div className="admin-badge">
          <ShieldCheck size={16} />
          ADMIN ACCESS
        </div>
        <h2 className="auth-title">Stellar Console</h2>
        <p className="auth-subtitle">Authorized personnel only</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <ShieldCheck size={18} className="input-icon" />
            <input 
              type="email" 
              placeholder="Admin ID / Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input 
              type="password" 
              placeholder="Secure Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="book-btn admin-btn" disabled={isLoading}>
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <>
                <LogIn size={18} style={{marginRight: '0.5rem'}} />
                Launch Console
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
