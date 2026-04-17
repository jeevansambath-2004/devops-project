import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Ticket, Calendar, MapPin, Search, User, LogIn } from 'lucide-react'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

const EVENTS = [
  {
    id: 1,
    title: "Cosmic Symphony 2026",
    date: "May 24, 2026",
    location: "Stellar Arena, NY",
    price: "₹1200",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    category: "Music"
  },
  {
    id: 2,
    title: "Tech Summit Alpha",
    date: "June 12, 2026",
    location: "Neo Convention Center",
    price: "₹2500",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    category: "Conference"
  },
  {
    id: 3,
    title: "Cyberpunk Art Expo",
    date: "July 05, 2026",
    location: "Digital Gallery",
    price: "₹4500",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    category: "Art"
  }
];

const Home = () => {
  const handleBook = (title) => {
    alert('Ticket Booking Initiated for ' + title);
  }

  return (
    <>
      <div className="hero">
        <h1>Experience the <span style={{color: 'var(--primary)'}}>Future</span> of Events</h1>
        <p>Book exclusive tickets to the most premium tech, music, and art experiences globally. Seamless, fast, and secure.</p>
      </div>

      <div className="events-grid">
        {EVENTS.map((event) => (
          <div key={event.id} className="event-card glass">
            <div className="badge">{event.category}</div>
            <div 
              className="event-image" 
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>
            <h2 className="event-title">{event.title}</h2>
            <div className="event-info">
              <Calendar size={14} />
              <span>{event.date}</span>
            </div>
            <div className="event-info">
              <MapPin size={14} />
              <span>{event.location}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="event-price">{event.price}</span>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Per Person</div>
            </div>
            <button 
              className="book-btn"
              onClick={() => handleBook(event.id)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app-container">
        <header>
          <Link to="/" style={{textDecoration: 'none'}}><div className="logo">STELLAR TICKETS</div></Link>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div className={`search-wrapper ${isSearching ? 'active' : ''}`}>
              {isSearching && (
                <input 
                  type="text" 
                  placeholder="Search events..." 
                  className="header-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              )}
              <Search 
                size={20} 
                color={isSearching ? "var(--primary)" : "#94a3b8"} 
                style={{cursor: 'pointer'}} 
                onClick={() => setIsSearching(!isSearching)}
              />
            </div>
            
            <Link to="/login" className="user-nav-link">
              <User size={20} color="#94a3b8" />
              <span className="user-nav-text">Sign In</span>
            </Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <footer style={{ marginTop: '5rem', paddingBottom: '2rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem', opacity: '0.6' }}>
          &copy; 2026 StellarTickets. Built with React & Vite.
        </footer>
      </div>
    </Router>
  )
}

export default App
