import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить логику авторизации
    navigate('/'); // редирект после "логина"
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f7fa',
      fontFamily: 'Inter, sans-serif',
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#0d3b66' }}>Login</h2>

        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#555555' }}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          style={{
            width: '100%',
            padding: '10px 14px',
            marginBottom: '20px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />

        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#555555' }}>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          style={{
            width: '100%',
            padding: '10px 14px',
            marginBottom: '30px',
            borderRadius: '12px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#0d3b66',
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b2e53'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0d3b66'}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
