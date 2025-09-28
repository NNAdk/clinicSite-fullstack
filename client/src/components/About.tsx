import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart, Shield, Star } from 'lucide-react';
import cabinet from '../assets/cabinet.jpg';


const About = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />,
      number: "5,000+",
      label: "Довольні пацієнти"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      number: "10+",
      label: "Років опиту"
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />,
      number: "99%",
      label: "Рівень задоволеності"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
      number: "24/7",
      label: "Турбота про вас цілодобово"
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />,
      title: "Передові технології",
      description: "Ми використовуємо найсучасніше стоматологічне обладнання та технології, щоб забезпечити максимально ефективне та комфортне лікування."
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
      title: "Індивідуальний догляд",
      description: "Кожен пацієнт отримує індивідуальні плани лікування, адаптовані до його конкретних потреб та цілей."
    },
    {
      icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />,
      title: "Команда експертів",
      description: "Наші досвідчені стоматологи та персонал прагнуть забезпечити винятковий догляд та бути в курсі найновіших методів лікування."
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
      title: "Сімейний",
      description: "Ми раді пацієнтам будь-якого віку та створюємо комфортну та гостинну атмосферу для всієї родини."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Чому варто обрати ЕтноДент?</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ми прагнемо надавати виняткову стоматологічну допомогу в комфортному, сучасному середовищі, 
            зосереджуючись на вашому загальному здоров'ї та самопочутті.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-4 sm:p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-200">
              <CardContent className="space-y-3 sm:space-y-4 p-0">
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Здоров'я вашої порожнини рота – наш пріоритет
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                В EtnoDent ми вважаємо, що відмінне здоров'я порожнини рота є основою загального благополуччя. 
                Наша команда досвідчених стоматологів прагне забезпечити комплексний, чуйний догляд, використовуючи найсучасніші методи та технології.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Від звичайного прибирання до складних процедур, ми гарантуємо, що кожен пацієнт отримає персоналізоване лікування в комфортній та гостинній обстановці. 
                Наше прагнення до досконалості зробило нас надійним вибором для сімей по всій громаді.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-2xl p-6 sm:p-8">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Наша місія</h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                "Надавати виняткову стоматологічну допомогу, яка покращує здоров'я, 
                комфорт та впевненість наших пацієнтів, одночасно будуючи довгострокові стосунки, засновані на довірі та досконалості."
              </p>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-3xl p-6 sm:p-8 shadow-2xl">
              {/* 🟢 IMG */}
              <img
                src={cabinet}
                alt="Интерьер современного стоматологического кабинета"
                className="aspect-square w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  
                  <div className="p-3 bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-2xl group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;