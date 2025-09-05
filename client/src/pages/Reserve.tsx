// src/pages/Reserve.tsx
import React, { useState } from 'react';

const Reserve: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment submitted! (Фейковая отправка)');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', message: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h2 style={{ color: '#0d3b66', marginBottom: '24px', textAlign: 'center' }}>
          Book an Appointment
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            width: '48%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box',
            marginRight: '4%'
          }}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={{
            width: '48%',
            padding: '12px 16px',
            marginBottom: '16px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <textarea
          name="message"
          placeholder="Additional Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          style={{
            width: '100%',
            padding: '12px 16px',
            marginBottom: '24px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box',
            resize: 'vertical'
          }}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '14px 0',
          fontSize: '18px',
          fontWeight: 600,
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#0d3b66',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b2e53'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0d3b66'}
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default Reserve;
