import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smile, Shield, Zap, Heart, Star, Users } from 'lucide-react';

interface ServicesProps {
  onBookAppointment: () => void;
}

const Services = ({ onBookAppointment }: ServicesProps) => {
  const services = [
    {
      icon: <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />,
      title: "Консультація та діагностика",
      description: "Професійний огляд та індивідуальний план лікування для збереження здоров’я ваших зубів.",
      features: ["Первинна консультація терапевта", "Консультація пародонтолога", "Комп'ютерна томографія (2 щелепи)", "Професійна гігієна"]
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
      title: "Фотополімерна реставрація",
      description: "Відновлення форми та кольору зубів за допомогою сучасних фотополімерних матеріалів.",
      features: ["Перший ступінь", "Другий ступінь", "Третій ступінь", "Композитний вінір", "Художня реставрація переднього зуба"]
    },
    

    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
      title: "Первинне лікування кореневих каналів",
      description: "Сучасне та безболісне лікування кореневих каналів для збереження зуба.",
      features: ["Один канал", "Два канали", "Три канали і більше", "Видалення чужерідного тіла з кореневого каналу"]
    },
    {
      icon: <Star className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />,
      title: "Відбілювання",
      description: "Безпечне та ефективне відбілювання для сяючої білосніжної усмішки.",
      features: ["Домашнє відбілювання", "Відбілювання апаратом Beyound 2 Ultra"]
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />, 
      title: "Гнатологія",
      description: "Діагностика та лікування порушень функцій скронево-нижньощелепного суглоба.",
      features: [
        "Консультація гнатолога",
        "Реєстрація ЦС",
        "Сплінт капа",
      ]
    },
    {
      icon: <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />,
      title: "Лікування уві сні",
      description: "Можливість пройти лікування зубів уві сні без страху та дискомфорту.",
      features: ["Дитяче", "Доросле"]
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />, 
      title: "Пародонтологія",
      description: "Комплексне лікування захворювань ясен та тканин, що оточують зуб.",
      features: [
        "Первинне пародонтологічне чищення I ступеня (надяснєве + Air flow)",
        "Первинне пародонтологічне чищення II ступеня (надяснєве + Air flow)",
        "Первинне пародонтологічне чищення III ступеня (надяснєве + Air flow)",
        "Заповнення пародонтологічної карти",
        "Медикаментозний супровід",
      ]
    },
    {
      icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
      title: "Хірургія",
      description: "Професійні хірургічні втручання для збереження та відновлення здоров’я ротової порожнини.",
      features: ["Консультація хірурга", "Видалення зуба", "Атипове видалення зуба мудрості", "Сінус ліфтинг", "Пластика вуздечки"]
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />, 
      title: "Ортодонтія",
      description: "Вирівнювання зубів та корекція прикусу за допомогою сучасних брекет-систем.",
      features: [
        "Консультація ортодонта",
        "Ортодонтична діагностика (консультація, фотопротокол, 3D сканування, КТ, план лікування)",
        "Зняття брекетів (1 щелепа)",
        "Фіксація ретейнеру (одна щелепа)",
        "Брекет-система Smart: Метал (одна щелепа)",
        "Брекет-система Smart: Кераміка (одна щелепа)",
        "Самолігуюча брекет-система (одна щелепа)",
        "Брекет-система Pitts (одна щелепа)",
        "Часткова брекет-система (метал)",
        "Часткова брекет-система (самолігуючий метал)",
      ]
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-500" />,
      title: "Лікування елайнерами",
      description: "Корекція прикусу прозорими елайнерами без брекетів.",
      features: [
        "Діагностика (Lime): консультація, фотопротокол, 3D сканування, план лікування, 3D візуалізація плану лікування",
        "Діагностика (Clear Correct): консультація, фотопротокол, 3D сканування, план лікування, 3D візуалізація плану лікування",
        "Лікування на елайнерах Lime",
        "Лікування на елайнерах Clear Correct (середній кейс)",
        "Лікування на елайнерах Clear Correct (великий кейс)",
      ]
    },
    {
      icon: <Smile className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />,
      title: "Дитяча Стоматологія",
      description: "Комплексний догляд та лікування зубів у дітей.",
      features: [
        "Профілактичний огляд",
        "Видалення молочного зуба",
        "Лікування карієсу постійного зуба «під ключ» (Перший ступінь)",
        "Лікування карієсу постійного зуба «під ключ» (Другий ступінь)",
        "Лікування карієсу постійного зуба «під ключ» (Третій ступінь)",
        "Коронка (стандартна)",
        "Коронка (цирконієва)",
      ]
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />, 
      title: "Ендодонтія",
      description: "Лікування кореневих каналів (первинне та вторинне).",
      features: [
        "Ендодонтія первинна (1-канальний зуб)",
        "Ендодонтія первинна (2-канальний зуб)",
        "Ендодонтія первинна (3-х і більше-канальний зуб)",
        "Ендодонтія вторинна (1-канальний зуб)",
        "Ендодонтія вторинна (2-канальний зуб)",
        "Ендодонтія вторинна (3-х і більше-канальний зуб)",
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Наші стоматологічні послуги</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ми пропонуємо повний спектр стоматологічних послуг для задоволення всіх ваших потреб у сфері здоров'я порожнини рота
            з використанням найновіших технологій та методів.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 flex flex-col">
              <CardHeader className="text-center space-y-4 pb-4">
                <div className="flex justify-center">
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-2xl group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center">
                  {service.description}
                </p>
                <div className="space-y-2 flex-grow">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Що включено:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-gray-600 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 mt-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 mt-auto">
                  <Button 
                    onClick={onBookAppointment}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                  >
                    Зробити запис
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-yellow-400 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Готові розпочати?</h3>
            <p className="text-lg sm:text-xl mb-6 opacity-90">
              Запишіться на консультацію вже сьогодні та зробіть перший крок до здоровішої та яскравішої посмішки.
            </p>
       
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
