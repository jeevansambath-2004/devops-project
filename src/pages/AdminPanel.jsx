import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Users, 
  Ticket, 
  Calendar, 
  MapPin, 
  Settings, 
  ChevronRight,
  TrendingUp,
  CreditCard
} from 'lucide-react';

const AdminPanel = ({ events, setEvents, bookings, users }) => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    price: '',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = {
      ...newEvent,
      id: events.length + 1,
      price: `₹${newEvent.price}`
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      location: '',
      price: '',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    });
    setShowAddEvent(false);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Stellar <span style={{color: 'var(--primary)'}}>Console</span></h1>
        <p>Manage events, users, and ticket inventory from a central interface.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card glass">
          <div className="stat-icon" style={{background: 'rgba(56, 189, 248, 0.1)', color: 'var(--primary)'}}>
            <Calendar size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Events</span>
            <span className="stat-value">{events.length}</span>
          </div>
        </div>
        <div className="stat-card glass">
          <div className="stat-icon" style={{background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7'}}>
            <Ticket size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Bookings</span>
            <span className="stat-value">{bookings.length}</span>
          </div>
        </div>
        <div className="stat-card glass">
          <div className="stat-icon" style={{background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e'}}>
            <Users size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Active Users</span>
            <span className="stat-value">{users.length}</span>
          </div>
        </div>
        <div className="stat-card glass">
          <div className="stat-icon" style={{background: 'rgba(234, 179, 8, 0.1)', color: '#eab308'}}>
            <CreditCard size={20} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Revenue</span>
            <span className="stat-value">₹{bookings.reduce((acc, curr) => acc + curr.totalAmount, 0)}</span>
          </div>
        </div>
      </div>

      <div className="admin-layout">
        <div className="admin-main">
          <div className="section-header">
            <h2>Live Events</h2>
            <button className="book-btn sm" onClick={() => setShowAddEvent(true)}>
              <Plus size={16} /> Add Event
            </button>
          </div>

          <div className="admin-list glass">
            {events.length === 0 ? (
              <div className="empty-state">No events available. Add one to get started.</div>
            ) : (
              events.map(event => (
                <div key={event.id} className="admin-item">
                  <div className="item-img" style={{backgroundImage: `url(${event.image})`}}></div>
                  <div className="item-details">
                    <h3>{event.title}</h3>
                    <span>{event.location} • {event.date}</span>
                  </div>
                  <div className="item-price">{event.price}</div>
                  <button className="icon-btn delete" onClick={() => deleteEvent(event.id)}>
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="section-header" style={{marginTop: '3rem'}}>
            <h2>Recent Bookings</h2>
          </div>
          <div className="admin-list glass">
            {bookings.length === 0 ? (
              <div className="empty-state">No bookings yet.</div>
            ) : (
              bookings.slice().reverse().map((booking, idx) => (
                <div key={idx} className="admin-item">
                  <div className="item-details">
                    <h3>{booking.userName}</h3>
                    <span>{booking.eventTitle} • {booking.persons} Tickets</span>
                  </div>
                  <div className="item-price" style={{color: '#22c55e'}}>+₹{booking.totalAmount}</div>
                  <div className="badge sm">Confirmed</div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="admin-sidebar">
          <div className="section-header">
            <h2>User Activity</h2>
          </div>
          <div className="user-activity-list glass">
            {users.length === 0 ? (
              <div className="empty-state">No users online.</div>
            ) : (
              users.map((user, idx) => (
                <div key={idx} className="user-activity-item">
                  <div className="avatar sm">{user.name.charAt(0)}</div>
                  <div className="user-activity-info">
                    <p>{user.name}</p>
                    <span>{user.email}</span>
                  </div>
                  <div className={`status-dot ${user.isAdmin ? 'admin' : 'online'}`}></div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {showAddEvent && (
        <div className="modal-overlay">
          <div className="modal-content glass" style={{maxWidth: '500px'}}>
            <h2 className="modal-title">Create New Event</h2>
            <form onSubmit={handleAddEvent} className="booking-form">
              <div className="modal-input-group">
                <label>Event Title</label>
                <input 
                  type="text" 
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  placeholder="e.g. Neon Nights 2026"
                  required 
                />
              </div>
              <div className="input-group-grid">
                <div className="modal-input-group">
                  <label>Date</label>
                  <input 
                    type="text" 
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    placeholder="May 24, 2026"
                    required 
                  />
                </div>
                <div className="modal-input-group">
                  <label>Price (₹)</label>
                  <input 
                    type="number" 
                    value={newEvent.price}
                    onChange={(e) => setNewEvent({...newEvent, price: e.target.value})}
                    placeholder="1200"
                    required 
                  />
                </div>
              </div>
              <div className="modal-input-group">
                <label>Location</label>
                <input 
                  type="text" 
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  placeholder="Madurai, India"
                  required 
                />
              </div>
              <div className="modal-actions">
                <button type="button" className="book-btn outline" onClick={() => setShowAddEvent(false)}>Cancel</button>
                <button type="submit" className="book-btn">Add Event</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
