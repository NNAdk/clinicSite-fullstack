import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register'; // новая страница
import Login from './pages/Login';
import Reserve from './pages/Reserve';
import Contacts from './pages/Contacts';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif'
      }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
