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

const BookingModal = ({ event, onClose }) => {
  const [persons, setPersons] = useState(1);
  const [details, setDetails] = useState({ name: '', phone: '', email: '' });
  const pricePerPerson = parseInt(event.price.replace('₹', ''));
  const totalAmount = pricePerPerson * persons;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass">
        <h2 className="modal-title">Complete Your Booking</h2>
        
        <div className="modal-event-details">
          <div className="modal-event-info">
            <h3>{event.title}</h3>
            <p>{event.location}</p>
          </div>
          <p className="modal-price">{event.price} / person</p>
        </div>

        <div className="booking-form">
          <div className="input-group-grid">
            <div className="modal-input-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" value={details.name} onChange={handleInputChange} required />
            </div>
            <div className="modal-input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91 98765 43210" value={details.phone} onChange={handleInputChange} required />
            </div>
          </div>
          <div className="modal-input-group" style={{marginTop: '1rem'}}>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="john@example.com" value={details.email} onChange={handleInputChange} required />
          </div>

          <div className="counter-section" style={{marginTop: '2rem'}}>
            <label>Number of People</label>
            <div className="person-counter">
              <button onClick={() => setPersons(Math.max(1, persons - 1))}>-</button>
              <span>{persons}</span>
              <button onClick={() => setPersons(persons + 1)}>+</button>
            </div>
          </div>
        </div>

        <div className="total-summary">
          <span>Total Amount</span>
          <span className="total-price">₹{totalAmount}</span>
        </div>

        <div className="modal-actions">
          <button className="book-btn outline" onClick={onClose}>Cancel</button>
          <button className="book-btn" onClick={() => {
            if(!details.name || !details.phone || !details.email) {
              alert('Please fill all details');
              return;
            }
            alert(`Booking confirmed!\nBooker: ${details.name}\nTickets: ${persons}\nTotal: ₹${totalAmount}`);
            onClose();
          }}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {selectedEvent && (
        <BookingModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
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
              onClick={() => setSelectedEvent(event)}
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
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // In a real app, we'd store a token in localStorage here
  };

  const handleLogout = () => {
    setUser(null);
  };

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
            
            {user ? (
              <div className="user-profile-nav" onClick={handleLogout}>
                <div className="avatar">
                  {user.name.charAt(0)}
                </div>
                <span className="user-nav-text">Hi, {user.name.split(' ')[0]}</span>
              </div>
            ) : (
              <Link to="/login" className="user-nav-link">
                <User size={20} color="#94a3b8" />
                <span className="user-nav-text">Sign In</span>
              </Link>
            )}
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
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
