import { useState, useEffect } from 'react'; // <-- ДОДАЄМО useEffect
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { X, Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DURATION = 300; 

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [shouldRender, setShouldRender] = useState(false); 

  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    if (isOpen) {

      setShouldRender(true);
      setTimeout(() => setIsVisible(true), 10); 
    } else if (shouldRender) {

      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, DURATION); 
      
      return () => clearTimeout(timer); 
    }
  }, [isOpen, shouldRender]);


  const handleClose = () => {
    setIsSubmitted(false); 
    onClose(); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booking:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 1. Анімація для заднього фону (Backdrop) */}
      <div 
        className={`absolute inset-0 bg-black backdrop-blur-sm transition-opacity duration-${DURATION}`}
        style={{ opacity: isVisible ? 0.5 : 0 }} 
        onClick={handleClose}
      />
      
      {/* 2. Анімація для самої Модалки (Modal) */}
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto 
                  transition-all duration-${DURATION} ease-out transform`}
        style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)' 
        }}
      >
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <Calendar className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Записатися на прийом</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-emerald-100 mt-2">Заплануйте свій візит до EtnoDent</p>
        </div>

        {isSubmitted ? (
          <div className="p-10 flex flex-col items-center justify-center text-center">
            <CheckCircle className="text-emerald-500 mb-4" size={48} />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Запит успішно надіслано!</h3>
            <p className="text-gray-600 mb-6">
              Дякуємо! Ми отримали вашу заявку. Ми зв'яжемося з вами для підтвердження деталей та часу.
            </p>
            <Button 
              onClick={handleClose}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Закрити
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <User className="text-emerald-500" size={20} />
                <span>Особиста інформація</span>
              </h3>
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">Повне ім'я *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введіть ваше повне ім'я"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 flex items-center space-x-1">
                    <Phone size={16} />
                    <span>Телефон *</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 flex items-center space-x-1">
                    <Mail size={16} />
                    <span>Електронна пошта *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <Stethoscope className="text-emerald-500" size={20} />
                <span>Вибір послуги</span>
              </h3>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-gray-700">Бажана послуга *</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="Оберіть послугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">Консультація та діагностика</SelectItem>
                    <SelectItem value="restoration">Фотополімерна реставрація</SelectItem>
                    <SelectItem value="root">Первинне лікування кореневих каналів</SelectItem>
                    <SelectItem value="whitening">Відбілювання</SelectItem>
                    <SelectItem value="gnathology">Гнатологія</SelectItem>
                    <SelectItem value="sleep">Лікування уві сні</SelectItem>
                    <SelectItem value="surgery">Хірургія</SelectItem>
                    <SelectItem value="orthodontics">Ортодонтія</SelectItem>
                    <SelectItem value="aligners">Лікування елайнерами</SelectItem>
                    <SelectItem value="kids">Дитяча Стоматологія</SelectItem>
                    <SelectItem value="ndodontics">Ендодонтія</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <Clock className="text-emerald-500" size={20} />
                <span>Бажана дата та час</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-gray-700">Бажана дата *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-gray-700">Бажаний час *</Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                      <SelectValue placeholder="Оберіть час" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="08:00">8:00</SelectItem>
                      <SelectItem value="09:00">9:00</SelectItem>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:00">11:00</SelectItem>
                      <SelectItem value="13:00">12:00</SelectItem>
                      <SelectItem value="14:00">13:00</SelectItem>
                      <SelectItem value="15:00">14:00</SelectItem>
                      <SelectItem value="16:00">15:00</SelectItem>
                      <SelectItem value="17:00">16:00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-gray-700">Додаткові примітки (Необов'язково)</Label>
              <Textarea
                id="notes"
                placeholder="Будь-які особливі питання чи запити..."
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 min-h-[80px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Скасувати
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                Записатися на прийом
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;