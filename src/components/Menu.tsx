import { useState } from 'react';
import { Coffee, Salad, Soup, UtensilsCrossed } from 'lucide-react';

interface MenuItem {
  name: string;
  nameRu: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  id: string;
  title: string;
  titleRu: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'breakfasts',
    title: 'Breakfasts',
    titleRu: 'Завтраки',
    icon: <Coffee size={24} />,
    items: [
      { name: 'English Breakfast', nameRu: 'Английский завтрак', price: '2,500₸' },
      { name: 'Scrambled Eggs', nameRu: 'Яичница', price: '1,800₸' },
      { name: 'Pancakes', nameRu: 'Панкейки', price: '2,000₸' },
      { name: 'Omelette', nameRu: 'Омлет', price: '1,900₸' },
      { name: 'Avocado Toast', nameRu: 'Тост с авокадо', price: '2,200₸' },
    ],
  },
  {
    id: 'bowls',
    title: 'Bowls',
    titleRu: 'Боулы',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { name: 'Poke Bowl', nameRu: 'Поке боул', price: '3,200₸' },
      { name: 'Buddha Bowl', nameRu: 'Будда боул', price: '2,800₸' },
      { name: 'Acai Bowl', nameRu: 'Асаи боул', price: '2,500₸' },
      { name: 'Grain Bowl', nameRu: 'Зерновой боул', price: '2,600₸' },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    titleRu: 'Салаты',
    icon: <Salad size={24} />,
    items: [
      { name: 'Caesar Salad', nameRu: 'Цезарь', price: '2,400₸' },
      { name: 'Greek Salad', nameRu: 'Греческий', price: '2,200₸' },
      { name: 'Caprese', nameRu: 'Капрезе', price: '2,300₸' },
      { name: 'Fresh Mix', nameRu: 'Фреш микс', price: '2,100₸' },
    ],
  },
  {
    id: 'soups',
    title: 'Soups',
    titleRu: 'Супы',
    icon: <Soup size={24} />,
    items: [
      { name: 'Tomato Soup', nameRu: 'Томатный суп', price: '1,800₸' },
      { name: 'Mushroom Cream', nameRu: 'Грибной крем-суп', price: '2,000₸' },
      { name: 'Chicken Broth', nameRu: 'Куриный бульон', price: '1,900₸' },
    ],
  },
  {
    id: 'pasta',
    title: 'Pasta',
    titleRu: 'Пасты',
    icon: <UtensilsCrossed size={24} />,
    items: [
      { name: 'Carbonara', nameRu: 'Карбонара', price: '2,800₸' },
      { name: 'Bolognese', nameRu: 'Болоньезе', price: '2,700₸' },
      { name: 'Alfredo', nameRu: 'Альфредо', price: '2,600₸' },
      { name: 'Pesto', nameRu: 'Песто', price: '2,500₸' },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    titleRu: 'Сладкое меню',
    icon: <Coffee size={24} />,
    items: [
      { name: 'Cheesecake', nameRu: 'Чизкейк', price: '1,800₸' },
      { name: 'Tiramisu', nameRu: 'Тирамису', price: '2,000₸' },
      { name: 'Brownie', nameRu: 'Брауни', price: '1,600₸' },
      { name: 'Macarons', nameRu: 'Макароны', price: '1,500₸' },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfasts');

  const activeMenu = menuData.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4" />
          <p className="text-amber-700 text-lg">
            Fresh, delicious, and made with love
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg scale-105'
                  : 'bg-white text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {category.icon}
              <span>{category.titleRu}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMenu?.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-900 mb-1 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-amber-600 text-sm">{item.nameRu}</p>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 px-4 py-2 rounded-full">
                  <span className="font-bold text-amber-900">{item.price}</span>
                </div>
              </div>
              {item.description && (
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
