// src/pages/Contacts.tsx
import React from 'react';

const Contacts: React.FC = () => {
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
      <div style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#0d3b66', marginBottom: '24px' }}>
          Contact Us
        </h2>

        <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6, marginBottom: '20px' }}>
          We’d love to hear from you! Here’s how you can reach us:
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#555555', lineHeight: 2 }}>
          <li>📍 Address: 123 Street, Kyiv City, </li>
          <li>📞 Phone: +38 (000) 000-0000</li>
          <li>✉️ Email: contact@dentalclinic.com</li>
          <li>🕒 Working Hours: Mon - Fri: 8:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
