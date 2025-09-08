import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import etnoDent from '../assets/etnoDent.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        <img 
          src={etnoDent}
          alt="ETNO DENT Logo"
          style={{ height: '34px', width: '34px', objectFit: 'contain' }}
        />
        <h1 style={{ fontSize: '34px', fontWeight: 800, margin: 0, color: '#5b9454ff' }}>
          ETNO DENT
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
            О НАС
          </li>
          <li
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => navigate('/reserve')}
            onMouseEnter={e => e.currentTarget.style.color = '#0d3b66'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
          >
            ЗАПИС
          </li>
          <li
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => navigate('/contacts')}
            onMouseEnter={e => e.currentTarget.style.color = '#0d3b66'}
            onMouseLeave={e => e.currentTarget.style.color = '#555555'}
          >
            КОНТАКТИ
          </li>
        </ul>
      </nav>

      {/* Auth Buttons / User Menu */}
      <div style={{ flex: '0 0 auto', display: 'flex', gap: '12px', position: 'relative' }}>
        {!user ? (
          <>
            <button
              onClick={() => navigate('/login')}
               style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid #4F7A5A', 
                backgroundColor: '#FFFFFF',  
                color: '#4F7A5A',           
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#4F7A5A'; 
                e.currentTarget.style.color = '#FFFFFF';          
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'; 
                e.currentTarget.style.color = '#4F7A5A';           
              }}
            >
              ВХІД
            </button>

            <button
              onClick={() => navigate('/register')}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#3E6047',
                color: '#ffffff',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#5b9454ff'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3E6047'}
            >
              РЕЄСТРАЦІЯ
            </button>
          </>
        ) : (
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#0d3b66',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {user.userName} ▼
            </button>

            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: '#fff',
                color: '#000',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '8px',
                marginTop: '5px',
                minWidth: '150px',
                zIndex: 10
              }}>
                <button
                  style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={() => navigate('/my-records')}
                >
                  My Records
                </button>
                <button
                  style={{ width: '100%', padding: '10px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
