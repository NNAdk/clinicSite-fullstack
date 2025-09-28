import { Button } from '@/components/ui/button';
import { Calendar, Phone, MapPin, Clock } from 'lucide-react';
import cab from '../assets/cab.jpg'; // Импорт уже есть!


interface HeroProps {
  onBookAppointment: () => void;
}

const Hero = ({ onBookAppointment }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-yellow-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Створюємо
                <span className="block text-emerald-600">Стоматологічні Традиції</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Забезпечуємо дбайливий, професійний стоматологічний догляд для всієї вашої родини.
                Від планових оглядів до складних процедур, ми робимо кожен візит комфортним та безстресовим. 
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onBookAppointment}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Записатися на прийом
              </Button>
              
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 sm:pt-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-sm sm:text-base">+38 (096) 220-9797</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-sm sm:text-base">Гарматна, 20, Київ</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span className="text-sm sm:text-base">Пн - Пт: 8:00 - 20:00</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-3xl p-8 sm:p-12 shadow-2xl">
              
              {/* 🟢 IMG FIX */}
              <img
                src={cab}
                alt="Интерьер современного стоматологического кабинета"
                className="aspect-square w-full h-full object-cover rounded-2xl shadow-lg"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm sm:text-base">Довіряють понад 5000 пацієнтів</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: "🏆", title: "Нагорода", desc: "Найкраща стоматологічна клініка 2023 року" },
              { icon: "👨‍⚕️", title: "Команда експертів", desc: "10+ років досвіду" },
              { icon: "🔬", title: "Сучасна техніка", desc: "Новітнє обладнання" },
              { icon: "😊", title: "Довольні пацієнти", desc: "99% пацієнтів задоволені" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base mb-1">{item.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;