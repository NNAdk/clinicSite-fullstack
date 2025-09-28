// AdminPage.jsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
// !!! Примітка: Для реальних Shadcn/ui Select-компонентів вам знадобляться:
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// =========================================================================
// === КОНСТАНТИ ===========================================================
// =========================================================================

// Секретний пароль (!!! УВАГА: НЕБЕЗПЕЧНО ДЛЯ ПРОДАКШЕНА !!!)
const SECRET_PASSWORD = '123'; 

// Ключ для імітації збереження даних у браузері
const LOCAL_STORAGE_KEY = 'admin_data_records';

// Визначення статуcів та стилів
const STATUS_OPTIONS = {
  'NotCalled': { label: 'Не дзвонили', color: 'bg-red-100 text-red-800 border-red-300' },
  'Pending': { label: 'Очікує', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
  'Called': { label: 'Передзвонили', color: 'bg-green-100 text-green-800 border-green-300' },
};
const statusKeys = Object.keys(STATUS_OPTIONS);

// Емуляція початкових даних
const initialMockData = [
  { id: 1, name: 'Іван Петренко', email: 'ivan.p@example.com', createdAt: '2025-09-01', status: 'NotCalled' },
  { id: 2, name: 'Олена Ковальчук', email: 'olena.k@example.com', createdAt: '2025-09-05', status: 'Pending' },
  { id: 3, name: 'Андрій Сидоренко', email: 'andriy.s@example.com', createdAt: '2025-09-10', status: 'Called' },
  { id: 4, name: 'Марія Дмитрук', email: 'maria.d@example.com', createdAt: '2025-09-15', status: 'NotCalled' },
  { id: 5, name: 'Василь Прокопенко', email: 'vasyl.p@example.com', createdAt: '2025-09-18', status: 'Called' },
];


// =========================================================================
// === КОМПОНЕНТ АВТОРИЗАЦІЇ (AdminAuth) ====================================
// =========================================================================

const AdminAuth = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      onLogin();
    } else {
      setError('Невірний пароль. Спробуйте ще раз.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 p-6 text-center">
      <div className="space-y-6 max-w-sm w-full bg-white p-8 rounded-xl shadow-2xl">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-blue-600">Вхід до Admin Panel</h1>
          <p className="text-muted-foreground text-gray-500">Введіть пароль для доступу.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="password" 
            placeholder="Пароль" 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                setError('');
            }}
            className="w-full"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          
          <Button type="submit" className="w-full">
            Увійти
          </Button>
        </form>
      </div>
    </div>
  );
};


// =========================================================================
// === КОМПОНЕНТ ДАШБОРДУ (AdminDashboard) =================================
// =========================================================================

const AdminDashboard = ({ data, handleStatusChange, searchQuery, handleSearchChange }) => {

    // Логика фильтрации данных
    const filteredData = data.filter(record => 
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Подсчет статусов для счетчиков
    const counts = {
        total: data.length,
        Called: data.filter(r => r.status === 'Called').length,
        Pending: data.filter(r => r.status === 'Pending').length,
        NotCalled: data.filter(r => r.status === 'NotCalled').length,
    };
    
    // Карта стилей для карточек счетчиков
    const countCardStyles = {
        total: 'bg-gray-100 border-gray-300 text-gray-700',
        Called: 'bg-green-50 border-green-300 text-green-700',
        Pending: 'bg-yellow-50 border-yellow-300 text-yellow-700',
        NotCalled: 'bg-red-50 border-red-300 text-red-700',
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Панель адміністратора</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">Управління записами</h2>

                {/* --- Блоки счетчиков --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {/* Общее количество */}
                    <div className={`p-4 rounded-lg border text-center ${countCardStyles.total}`}>
                        <p className="text-xl font-bold">{counts.total}</p>
                        <p className="text-sm">Усього записів</p>
                    </div>
                    {/* Счетчик "Передзвонили" */}
                    <div className={`p-4 rounded-lg border text-center ${countCardStyles.Called}`}>
                        <p className="text-xl font-bold">{counts.Called}</p>
                        <p className="text-sm">Передзвонили</p>
                    </div>
                    {/* Счетчик "Очікує" */}
                    <div className={`p-4 rounded-lg border text-center ${countCardStyles.Pending}`}>
                        <p className="text-xl font-bold">{counts.Pending}</p>
                        <p className="text-sm">Очікує</p>
                    </div>
                    {/* Счетчик "Не дзвонили" */}
                    <div className={`p-4 rounded-lg border text-center ${countCardStyles.NotCalled}`}>
                        <p className="text-xl font-bold">{counts.NotCalled}</p>
                        <p className="text-sm">Не дзвонили</p>
                    </div>
                </div>
                
                {/* --- Панель управления (Поиск и кнопки) --- */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
                    <Input 
                        placeholder="Пошук за іменем або email..." 
                        className="w-full sm:max-w-sm" 
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline">
                        Експорт до Excel
                    </Button>
                </div>

                {/* --- Таблица --- */}
                <div className="overflow-x-auto border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ім'я
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Дата створення
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-40">
                                    Статус дзвінка
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredData.length > 0 ? (
                                filteredData.map((record) => {
                                    const currentStatus = STATUS_OPTIONS[record.status] || STATUS_OPTIONS['NotCalled'];
                                    return (
                                        <tr key={record.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{record.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{record.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.createdAt}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <select
                                                    value={record.status}
                                                    onChange={(e) => handleStatusChange(record.id, e.target.value)}
                                                    className={`py-1 px-2 rounded-md border text-xs font-medium cursor-pointer appearance-none focus:outline-none focus:ring-2 ${currentStatus.color}`}
                                                    style={{ minWidth: '120px' }} 
                                                >
                                                    {statusKeys.map(key => (
                                                        <option key={key} value={key}>
                                                            {STATUS_OPTIONS[key].label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                        Записів не знайдено, спробуйте змінити критерії пошуку.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


// =========================================================================
// === ОСНОВНИЙ КОМПОНЕНТ (AdminPage) ======================================
// =========================================================================

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // --- Логіка Завантаження/Збереження (Імітація БД) ---

  // 1. Завантаження даних з localStorage при першому рендері
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    try {
        if (savedData) {
            setData(JSON.parse(savedData));
        } else {
            setData(initialMockData);
        }
    } catch (e) {
        // Якщо дані в localStorage пошкоджені
        console.error("Помилка парсингу localStorage, використовуються початкові дані.", e);
        setData(initialMockData);
    }
  }, []);

  // 2. Збереження даних у localStorage при кожній зміні 'data'
  useEffect(() => {
    // Зберігаємо, тільки якщо дані не порожні, щоб уникнути помилок
    if (data.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);


  // --- Логіка Управління ---

  // Обробник зміни статусу з випадаючого списку
  const handleStatusChange = (id, newStatus) => {
    setData(prevData => {
      const newData = prevData.map(record => 
        record.id === id ? { ...record, status: newStatus } : record
      );
      
      // В реальному додатку тут був би API-виклик для збереження на сервері!
      // saveStatusToServer(id, newStatus); 
      
      return newData;
    });
  };

  // Обробник зміни поля пошуку
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };


  // --- Рендеринг ---

  if (!isAuthenticated) {
    return <AdminAuth onLogin={handleLogin} />;
  }

  return (
    <AdminDashboard 
        data={data} 
        handleStatusChange={handleStatusChange} 
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
    />
  );
}