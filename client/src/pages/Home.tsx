import React from 'react';
import cabImage from '../assets/cab.jpg';
import humanImage from '../assets/human.jpg';
import jawImage from '../assets/jaw.jpg';

// Импорт SVG иконок
import SmileIcon from '../assets/smile.svg';
import TeethIcon from '../assets/teeth.svg';
import Teeth2Icon from '../assets/teeth2.svg';

import { useNavigate } from 'react-router-dom';



const Home: React.FC = () => {

const navigate = useNavigate()
const svgIcons = [SmileIcon, TeethIcon, Teeth2Icon];
const decorativeSVGs: { src: string, top: string, left: string, width: string, opacity: number, rotate: string }[] = [];

const rows = 4;
const cols = 5;
const spacingY = 100 / rows; 
const spacingX = 100 / cols;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    decorativeSVGs.push({
      src: svgIcons[Math.floor(Math.random() * svgIcons.length)],
      top: `${i * spacingY + Math.random() * (spacingY - 10)}%`,
      left: `${j * spacingX + Math.random() * (spacingX - 10)}%`,
      width: `${30 + Math.random() * 50}px`,
      opacity: 0.03 + Math.random() * 0.07,
      rotate: `${-30 + Math.random() * 60}deg`
    });
  }
}


const whySVGs: { src: string, top: string, left: string, width: string, opacity: number, rotate: string }[] = [];

for (let i = 0; i < 4; i++) {       
  for (let j = 0; j < 5; j++) {       
    whySVGs.push({
      src: svgIcons[Math.floor(Math.random() * svgIcons.length)],
      top: `${i * 25 + Math.random() * 20}%`, 
      left: `${j * 20 + Math.random() * 15}%`, 
      width: `${30 + Math.random() * 50}px`,
      opacity: 0.03 + Math.random() * 0.07,
      rotate: `${-30 + Math.random() * 60}deg`
    });
  }
}



  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f9f9f9' }}>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#f2f7fa',
        borderRadius: '0 0 40px 40px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        overflow: 'hidden'
      }}>
        {/* Render decorative SVGs */}
        {decorativeSVGs.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt=""
            style={{
              position: 'absolute',
              top: icon.top,
              left: icon.left,
              width: icon.width,
              opacity: icon.opacity,
              transform: `rotate(${icon.rotate})`,
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        ))}

        {/* Hero Content */}
        <h1 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', color: '#0d3b66', position: 'relative', zIndex: 1 }}>
          Your Smile, Our Priority
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#555555',
          marginBottom: '30px',
          maxWidth: '650px',
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.6,
          position: 'relative',
          zIndex: 1
        }}>
          Providing gentle, professional dental care for your whole family. From routine check-ups to advanced treatments, we make every visit comfortable and stress-free.
        </p>
        <button style={{
          padding: '14px 32px',
          fontSize: '18px',
          fontWeight: 600,
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#0d3b66',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0b2e53')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0d3b66')}
          onClick={() => navigate('/reserve')}
        >
          Book an Appointment
        </button>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <img src={cabImage} alt="Dental Office" style={{ width: '100%', maxWidth: '800px', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" style={{ position: 'relative', textAlign: 'center', padding: '80px 20px', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        {decorativeSVGs.map((icon, i) => (
          <img
            key={`team-${i}`}
            src={icon.src}
            alt=""
            style={{
              position: 'absolute',
              top: icon.top,
              left: icon.left,
              width: icon.width,
              opacity: icon.opacity / 2, // чуть менее ярко
              transform: `rotate(${icon.rotate})`,
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        ))}

        <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '60px', color: '#0d3b66', position: 'relative', zIndex: 1 }}>
          Our Team
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1
        }}>
          {[{
            name: "Dr. Anna Petrova – Orthodontist",
            desc: "Specializing in creating perfect smiles, Dr. Anna has over 10 years of experience in braces and Invisalign treatments."
          },
          {
            name: "Dr. Ivan Kovalenko – Pediatric Dentist",
            desc: "Passionate about caring for little smiles, Dr. Ivan makes dental visits fun and stress-free for children."
          },
          {
            name: "Dr. Maria Shevchenko – Cosmetic Dentist",
            desc: "Dr. Maria transforms smiles with professional teeth whitening, veneers, and cosmetic treatments."
          }].map((doc, i) => (
            <div key={i} style={{
              maxWidth: '250px',
              textAlign: 'center',
              borderRadius: '16px',
              padding: '16px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              transition: 'transform 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img src={humanImage} alt={doc.name} style={{ width: '100%', borderRadius: '16px', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#0d3b66' }}>{doc.name}</h3>
              <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.5 }}>{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>

            {/* Why Choose Us Section */}
        <section style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 20px',
        gap: '40px',
        flexWrap: 'wrap',
        backgroundColor: '#f2f7fa',
        borderRadius: '40px 40px 0 0',
        overflow: 'hidden'
        }}>
        {/* Decorative SVGs */}
        {whySVGs.map((icon, i) => (
            <img
            key={i}
            src={icon.src}
            alt=""
            style={{
                position: 'absolute',
                top: icon.top,
                left: icon.left,
                width: icon.width,
                opacity: icon.opacity,
                transform: `rotate(${icon.rotate})`,
                pointerEvents: 'none',
                zIndex: 0
            }}
            />
        ))}

        {/* Section Title */}
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '40px', fontWeight: 700, color: '#0d3b66' }}>
            Why Choose Us
            </h2>
        </div>

        {/* Text Left */}
        <div style={{ flex: 1, minWidth: '300px', position: 'relative', zIndex: 1 }}>
            {[
            { title: "Experienced Professionals", text: "Our team of certified dentists has years of experience in preventive, restorative, and cosmetic dentistry." },
            { title: "State-of-the-Art Equipment", text: "We use the latest dental technologies to ensure safe, effective, and comfortable treatments." },
            { title: "Patient-Centered Care", text: "Every patient receives personalized attention and care tailored to their needs." }
            ].map((item, i) => (
            <div key={i} style={{
                marginBottom: '32px',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s'
            }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px', color: '#0d3b66' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: 1.6 }}>{item.text}</p>
            </div>
            ))}
        </div>

        {/* Image Right */}
        <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <img src={jawImage} alt="Dental Equipment" style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
        </div>
        </section>


    </div>
  );
};

export default Home;
