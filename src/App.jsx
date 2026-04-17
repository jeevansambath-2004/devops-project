import React, { useState } from 'react'
import { Ticket, Calendar, MapPin, Search, User } from 'lucide-react'
import './App.css'

const EVENTS = [
  {
    id: 1,
    title: "Cosmic Symphony 2026",
    date: "May 24, 2026",
    location: "Stellar Arena, NY",
    price: "$120",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Music"
  },
  {
    id: 2,
    title: "Tech Summit Alpha",
    date: "June 12, 2026",
    location: "Neo Convention Center",
    price: "$250",
    image: "https://images.unsplash.com/photo-1540575861501-7ad0582373f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Conference"
  },
  {
    id: 3,
    title: "Cyberpunk Art Expo",
    date: "July 05, 2026",
    location: "Digital Gallery",
    price: "$45",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Art"
  }
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleBook = (id) => {
    setSelectedId(id);
    alert('Ticket Booking Initiated for ' + EVENTS.find(e => e.id === id).title);
  }

  return (
    <div className="app-container">
      <header>
        <div className="logo">STELLAR TICKETS</div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Search size={20} color="#94a3b8" />
          <User size={20} color="#94a3b8" />
        </div>
      </header>

      <main>
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
      </main>

      <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem', opacity: '0.6' }}>
        &copy; 2026 StellarTickets. Built with React & Vite.
      </footer>
    </div>
  )
}

export default App
