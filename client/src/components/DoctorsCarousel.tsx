import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Award, GraduationCap } from 'lucide-react';
import Bogdan from '../assets/Bogdan.jpg'
import Yaroslav from '../assets/Yaroslav.jpg'
import doc2 from '../assets/doc2.jpg';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';

const DoctorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const doctors = [
    {
      id: 1,
      name: "Богдан Ярославович",
      specialty: "Стоматолог-Терапевт",
      description: "Завдяки 30-річному досвіду роботи, став справжнім професіоналом своєї справи!",
      experience: "30+ Років",
      education: "НМУ імені О.О. Богомольця",
      avatar: Bogdan,
      color: "from-emerald-400 to-emerald-600"
    },
    {
      id: 2,
      name: "Ярослав Богданович",
      specialty: "Cтоматолог-Терапевт-Ендодонтист",
      description: "Ярослав - майстер своєї справи, який кожен день допомагає нашим пацієнтам зберегти красу та здоров’я їхніх посмішок.",
      experience: "12+ років",
      education: "НМУ імені О.О. Богомольця",
      avatar: Yaroslav,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 3,
      name: "Ксенія Володимирівна",
      specialty: "Хірург-Пародонтолог",
      description: "Для неї важливо бачити результат своєї праці та щасливі посмішки!",
      experience: "10+ років",
      education: "НМУ імені О.О. Богомольця",
      avatar: doc2,
      color: "from-emerald-400 to-teal-600"
    },
    {
      id: 4,
      name: "Кіра Юрханьян",
      specialty: "Дитячий стоматолог",
      description: "Має понад 10 років досвіду у лікуванні та профілактиці стоматологічних захворювань.",
      experience: "10+ років",
      education: "НМУ імені О.О. Богомольця",
      avatar: doc3,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 5,
      name: "Віола Валеріївна",
      specialty: "Стоматолог-Терапевт",
      description: "Спеціалізується на лікуванні зубів та кореневих каналів, забезпечуючи комплексний та високоякісний догляд.",
      experience: "8+ років",
      education: "НМУ імені О.О. Богомольця",
      avatar: doc5,
      color: "from-emerald-400 to-green-600"
    },
    {
      id: 6,
      name: "Наталя Шевченко",
      specialty: "Адміністратор",
      description: "Забезпечує безперебійну роботу клініки та комфорт пацієнтів.",
      experience: "14+ років",
      education: "НМУ імені О.О. Богомольця",
      avatar: doc4,
      color: "from-yellow-400 to-amber-600"
    }
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); 
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); 
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3); 
      } else {
        setItemsPerView(4); 
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, doctors.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section id="doctors" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Meet Our Expert Team</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Our experienced dental professionals are committed to providing you with 
            the highest quality care using the latest techniques and technologies.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile when only 1 item visible */}
          {maxIndex > 0 && (
            <>
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-emerald-50 border-emerald-200 text-emerald-600 shadow-lg w-10 h-10 sm:w-12 sm:h-12"
                aria-label="Previous doctor"
              >
                <ChevronLeft size={20} />
              </Button>

              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-emerald-50 border-emerald-200 text-emerald-600 shadow-lg w-10 h-10 sm:w-12 sm:h-12"
                aria-label="Next doctor"
              >
                <ChevronRight size={20} />
              </Button>
            </>
          )}

          {/* Carousel Content */}
          <div className="overflow-hidden px-12 sm:px-16">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * (itemsPerView === 1 ? 0 : itemsPerView === 2 ? 12 : 18) / itemsPerView}px)` }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white h-full">
                    <CardContent className="p-4 sm:p-6 text-center space-y-4 sm:space-y-6 h-full flex flex-col">
                      {/* Doctor Avatar */}
                      <div className="flex justify-center">
                        <div className="w-16 h-22 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg mx-auto">
                          <img
                            src={doctor.avatar}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        </div>

                      {/* Doctor Info */}
                      <div className="space-y-2 sm:space-y-3 flex-grow">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
                          {doctor.name}
                        </h3>
                        
                        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          <Star size={12} className="sm:w-4 sm:h-4" />
                          <span>{doctor.specialty}</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-xs sm:text-sm line-clamp-3">
                          {doctor.description}
                        </p>
                      </div>

                      {/* Credentials */}
                      <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center space-x-2 text-gray-600">
                          <Award className="text-yellow-500 w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-medium">{doctor.experience}</span>
                        </div>
                        
                        <div className="flex items-center justify-center space-x-2 text-gray-600">
                          <GraduationCap className="text-emerald-500 w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs leading-tight text-center">{doctor.education}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Only show if there are multiple slides */}
          {maxIndex > 0 && (
            <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                    currentIndex === index
                      ? 'bg-emerald-500'
                      : 'bg-gray-300 hover:bg-emerald-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Заплануйте зустріч з нашою командою експертів
            </h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Наші досвідчені лікарі готові надати вам персоналізовану,
              високоякісну стоматологічну допомогу, адаптовану до ваших конкретних потреб.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsCarousel;