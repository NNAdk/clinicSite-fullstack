import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTeam = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById('our-team');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); 
    } else {
      const el = document.getElementById('our-team');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#f2f7fa',
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      fontFamily: 'Inter, sans-serif',
      zIndex: 1000,
      boxSizing: 'border-box',
    }}>
      {/* Logo */}
      <div style={{ flex: '0 0 auto', cursor: 'pointer' }} onClick={() => navigate('/')}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, margin: 0, color: '#0d3b66' }}>
          DENTAL CLINIC
        </h1>
      </div>

      {/* Navigation */}
      <nav style={{ flex: '1 1 auto', textAlign: 'center', minWidth: '200px' }}>
        <ul style={{
          display: 'inline-flex',
          gap: '32px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 600,
          color: '#555555',
        }}>
          <li
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={scrollToTeam}
            onMouseEnter={e => e.currentTarget.style.color = '#0d3b66'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
            

          >
            ABOUT
          </li>
          <li
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => navigate('/reserve')}
            onMouseEnter={e => e.currentTarget.style.color = '#0d3b66'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
          >
            RESERVE
          </li>
          <li
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => navigate('/contacts')}
            onMouseEnter={e => e.currentTarget.style.color = '#0d3b66'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
          >
            CONTACTS
          </li>
        </ul>
      </nav>

      {/* Auth Buttons */}
      <div style={{ flex: '0 0 auto', display: 'flex', gap: '12px' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            padding: '10px 20px',
            borderRadius: '12px',
            border: '1px solid #0d3b66',
            backgroundColor: '#ffffff',
            color: '#0d3b66',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#0d3b66';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#0d3b66';
          }}
        >
          LOGIN
        </button>

        <button
          onClick={() => navigate('/register')}
          style={{
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#0d3b66',
            color: '#ffffff',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0b2e53'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0d3b66'}
        >
          REGISTRATION
        </button>
      </div>
    </header>
  );
}

export default Header;
