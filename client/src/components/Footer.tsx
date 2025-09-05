import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      padding: '40px 60px',
      backgroundColor: '#111111',
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Верхний блок футера — About, Support и Socials */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px'
      }}>
        {/* About */}
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 700 }}>About</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', fontWeight: 400 }}>
            <li style={{ marginBottom: '8px', cursor: 'pointer' }}>
              <a href="#our-team" style={{ color: '#ffffff', textDecoration: 'none' }}>Our Team</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 700 }}>Support</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', fontWeight: 400 }}>
            <li style={{ marginBottom: '8px', cursor: 'pointer' }}>Contacts</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 700 }}>Socials</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', fontWeight: 400 }}>
        
            <li style={{ marginBottom: '8px', cursor: 'pointer' }}>Instagram</li>
        
          </ul>
        </div>
      </div>

      {/* Нижний блок футера — копирайт */}
      <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 400 }}>
        &copy; 2025 Dental Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
