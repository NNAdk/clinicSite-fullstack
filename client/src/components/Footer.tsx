import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import etnoDentLogo from '../assets/etnoDent.png';


const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x">
              <div className="">
                <span className="text-white font-bold text-lg"></span>
              </div>
              {/* img*/}
              <img
                src={etnoDentLogo}
                alt="Логотип EtnoDent"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">EtnoDent</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ваш надійний партнер для комплексного стоматологічного догляду. Ми прагнемо допомогти вам досягти та підтримувати 
              оптимальне здоров'я порожнини рота за допомогою персоналізованого, професійного лікування.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-gray-700 hover:bg-emerald-500 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-400">Контактна інформація</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-emerald-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">вул. Гарматна 20</p>
                  <p className="text-gray-300">Київ</p>
                  <p className="text-gray-300">Україна</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-emerald-400 flex-shrink-0" size={20} />
                <p className="text-gray-300">+38 (096) 220-9797</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-emerald-400 flex-shrink-0" size={20} />
                <p className="text-gray-300">info@etnodent.com</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-400">Час роботи</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Пн - Пт</span>
                <span className="text-white">8:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Суббота</span>
                <span className="text-white">9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Неділя</span>
                <span className="text-white">Зачинено</span>
              </div>
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-emerald-400">Швидка навігація</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Послуги
              </a>
              <a href="#about" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Про Нас
              </a>
              <a href="#doctors" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Наша команда
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                Контаки
              </a>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-full mt-4">
                Записатися на прийом
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EtnoDent Dental Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;