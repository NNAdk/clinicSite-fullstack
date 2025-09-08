import React from 'react';
import cabImage from '../assets/cab.jpg';
import Bogdan from '../assets/Bogdan.jpg';
import Yaroslav from '../assets/Yaroslav.jpg';
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import SmileIcon from '../assets/smile.svg';
import TeethIcon from '../assets/teeth.svg';
import Teeth2Icon from '../assets/teeth2.svg';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import cabinet from '../assets/cabinet.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const teamMembers = [
    { name: "Богдан Ярославович –– Стоматолог-Терапевт", desc: "Завдяки 30-річному досвіду роботи, Богдан Ярославович став справжнім професіоналом своєї справи! Його золоті руки та відданість роботі допомогли безлічі пацієнтів повернути здорові усмішки та впевненість у собі!", img: Bogdan },
    { name: "Ярослав Богданович ––  Cтоматолог-Терапевт-Ендодонтист", desc: "Ярослав - не просто стоматолог, він - майстер своєї справи, який кожен день допомагає нашим пацієнтам зберегти красу та здоров’я їхніх посмішок.", img: Yaroslav },
    { name: "Ксенія Володимирівна –– Хірург-Пародонтолог", desc: "З перших днів вступу до університету Ксенія шукала можливості розвиватися не тільки в теорії, а й на практиці. До закінчення університету вона вже набула великого досвіду. Для неї важливо бачити результат своєї праці та щасливі посмішки!", img: doc2 },
    { name: "Кіра Юрханьян –– Дитячий стоматолог", desc: "Мріяла стати лікарем з дитинства та присвятила своє життя стоматології. Має понад 10 років досвіду у лікуванні та профілактиці стоматологічних захворювань, забезпечуючи пацієнтам високий рівень комфорту та професіоналізму.", img: doc3 },
    { name: "Віола Валеріївна –– Стоматолог-Терапевт", desc: "Спеціалізується на лікуванні зубів та кореневих каналів, забезпечуючи комплексний та високоякісний догляд за здоров’ям порожнини рота. Працює з сучасними методами для максимального комфорту та довготривалого результату пацієнтів.", img: doc5 },
    { name: "Наталя Шевченко –– Адміністратор", desc: "Забезпечує безперебійну роботу клініки та комфорт пацієнтів. Координує прийоми, відповідає на запити та стежить за високим рівнем обслуговування кожного відвідувача.", img: doc4 },
   
  ];

  const visibleCards = 4;
  const cardWidth = 425;
  const gap = 20;
  const containerWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;

  const arrowStyle: React.CSSProperties = {
  backgroundColor: '#0d3b66',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '24px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  transition: 'all 0.3s ease',
};

const handleArrowHover = (e: React.MouseEvent<HTMLButtonElement>) => {
  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0b2e53';
};

const handleArrowLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0d3b66';
};


const prevSlide = () => {
  setCurrentIndex(prev => (prev === 0 ? teamMembers.length - visibleCards : prev - 1));
};

const nextSlide = () => {
  setCurrentIndex(prev => (prev >= teamMembers.length - visibleCards ? 0 : prev + 1));
};


  

  const [decorativeSVGs] = React.useState(() => {
    const svgIcons = [SmileIcon, TeethIcon, Teeth2Icon];
    const arr: { src: string, top: string, left: string, width: string, opacity: number, rotate: string }[] = [];
    const rows = 4;
    const cols = 5;
    const spacingY = 100 / rows;
    const spacingX = 100 / cols;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        arr.push({
          src: svgIcons[Math.floor(Math.random() * svgIcons.length)],
          top: `${i * spacingY + Math.random() * (spacingY - 10)}%`,
          left: `${j * spacingX + Math.random() * (spacingX - 10)}%`,
          width: `${30 + Math.random() * 50}px`,
          opacity: 0.03 + Math.random() * 0.07,
          rotate: `${-30 + Math.random() * 60}deg`
        });
      }
    }
    return arr;
  });

  const [whySVGs] = React.useState(() => {
    const svgIcons = [SmileIcon, TeethIcon, Teeth2Icon];
    const arr: { src: string, top: string, left: string, width: string, opacity: number, rotate: string }[] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 5; j++) {
        arr.push({
          src: svgIcons[Math.floor(Math.random() * svgIcons.length)],
          top: `${i * 25 + Math.random() * 20}%`,
          left: `${j * 20 + Math.random() * 15}%`,
          width: `${30 + Math.random() * 50}px`,
          opacity: 0.03 + Math.random() * 0.07,
          rotate: `${-30 + Math.random() * 60}deg`
        });
      }
    }
    return arr;
  });

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
        {decorativeSVGs.map((icon, i) => (
          <img key={i} src={icon.src} alt="" style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            width: icon.width,
            opacity: icon.opacity,
            transform: `rotate(${icon.rotate})`,
            pointerEvents: 'none',
            zIndex: 0
          }} />
        ))}
        <h1 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', color: '#5b9454ff', position: 'relative', zIndex: 1 }}>
          Створюємо Стоматологічні Традиції
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
          Забезпечуємо дбайливий, професійний стоматологічний догляд для всієї вашої родини. Від планових оглядів до складних процедур, ми робимо кожен візит комфортним та безстресовим.
        </p>
        <button style={{
          padding: '14px 32px',
          fontSize: '18px',
          fontWeight: 600,
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#5b9454ff',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginBottom: '40px',
          position: 'relative',
          zIndex: 1
        }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3E6047')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5b9454ff')}
          onClick={() => navigate('/reserve')}
        >
          Записатися на прийом
        </button>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <img src={cabImage} alt="Dental Office" style={{ width: '100%', maxWidth: '800px', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
        </div>
      </section>

     {/* Команда */}
<section id="our-team" style={{ position: 'relative', padding: '80px 20px', backgroundColor: '#fff', overflow: 'hidden' }}>
  <h2 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', color: '#5b9454ff', textAlign: 'center', zIndex: 1 }}>
    Віддані вашій усмішці
  </h2>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '0 auto' }}>
    {/* Левая стрелка */}
    <button
      onClick={prevSlide}
      style={arrowStyle}
      onMouseEnter={handleArrowHover}
      onMouseLeave={handleArrowLeave}
    >
      <AiOutlineLeft size={24} />
    </button>

    {/* Слайдер */}
    <div style={{ overflow: 'hidden', width: `${containerWidth}px` }}>
      <div style={{
        display: 'flex',
        gap: `${gap}px`,
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`
      }}>
        {teamMembers.map((doc, i) => (
          <div key={i} style={{
            width: `${cardWidth}px`,
            flexShrink: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
            backgroundColor: '#f9f9f9'
          }}>
            <img src={doc.img} alt={doc.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
            <h3 style={{ padding: '10px', fontWeight: 700, color: '#0d3b66' }}>{doc.name}</h3>
            <p style={{ padding: '0 10px 10px 10px', fontSize: '14px', color: '#555' }}>{doc.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Правая стрелка */}
    <button
      onClick={nextSlide}
      style={arrowStyle}
      onMouseEnter={handleArrowHover}
      onMouseLeave={handleArrowLeave}
    >
      <AiOutlineRight size={24} />
    </button>
  </div>
</section>


      {/* Why Choose Us */}
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
        {whySVGs.map((icon, i) => (
          <img key={i} src={icon.src} alt="" style={{
            position: 'absolute',
            top: icon.top,
            left: icon.left,
            width: icon.width,
            opacity: icon.opacity,
            transform: `rotate(${icon.rotate})`,
            pointerEvents: 'none',
            zIndex: 0
          }} />
        ))}

        <div style={{ width: '100%', textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', color: '#5b9454ff', textAlign: 'center', zIndex: 1 }}>Чому Обирають Нас</h2>
        </div>

        <div style={{ flex: 1, minWidth: '300px', position: 'relative', zIndex: 1 }}>
          {[
            { title: "Професіоналізм та досвід", text: "Наша команда складається з висококваліфікованих стоматологів, які постійно підвищують свою кваліфікацію та слідкують за сучасними методиками лікування." },
            { title: "Індивідуальний підхід", text: "Ми уважно слухаємо пацієнтів і підбираємо оптимальні рішення саме для вашого випадку." },
            { title: "Сучасне обладнання", text: "Використовуємо передові технології та матеріали для точного діагностування та комфортного лікування." }
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

        <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <img src={cabinet} alt="Dental Equipment" style={{ width: '100%', maxWidth: '700px', borderRadius: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
