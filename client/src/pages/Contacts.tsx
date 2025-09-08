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
          Зв'яжіться з нами
        </h2>

        <p style={{ fontSize: '16px', color: '#555555', lineHeight: 1.6, marginBottom: '20px' }}>
          Ми будемо раді почути від вас! Ось як ви можете з нами зв'язатися:
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '16px', color: '#555555', lineHeight: 2 }}>
          <li>📍 Адреса: вулиця Гарматна, 20, Київ, Україна  </li>
          <li>📞 Номер телефону: +38 (096) 220-9797</li>
          <li>✉️ Почта: contact@dentalclinic.com</li>
          <li>🕒 Час роботи: Mon - Fri: 8:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
