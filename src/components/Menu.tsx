import { useState } from 'react';
import { Coffee, Droplet, IceCream, CupSoda, UtensilsCrossed, Sparkles, Plus, Check, GlassWater } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  id: string;
  name: string;
  nameRu: string;
  price: number;
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
    icon: <UtensilsCrossed size={24} />,
    items: [
      { id: 'bf-1', name: 'Village Breakfast', nameRu: 'Деревенский завтрак', price: 3690, description: 'Fried eggs from 2 eggs, with beef sausages, mushrooms, marinated mixed salad, potato wedges, and crispy bread' },
      { id: 'bf-2', name: 'Scrambled Breakfast with Salmon / Turkey', nameRu: 'Скрамбл завтрак с лососем / индейкой', price: 3890, description: 'Scrambled eggs from 2 eggs with smoked salmon and avocado. Served with green mixed salad, cream cheese, and crispy bread' },
      { id: 'bf-3', name: 'Almaty Breakfast', nameRu: 'Алматы завтрак', price: 3590, description: 'Fried eggs from 2 eggs, with beef sausages, with Halloumi cheese, fresh vegetables, and crispy bread' },
      { id: 'bf-4', name: 'American Steak Breakfast', nameRu: 'Американский стейк завтрак', price: 3890, description: 'Fried eggs from 2 eggs with grilled Ribeye steak and green mixed salad (doneness of your choice)' },
      { id: 'bf-5', name: 'English Breakfast with Hashbrown', nameRu: 'Английский завтрак с хашбрауном', price: 3990, description: 'Fried eggs from 2 eggs, with beef bacon, mushrooms, chicken sausages, potato hashbrown, and crispy bread' },
      { id: 'bf-6', name: 'Good Morning', nameRu: 'Good Morning', price: 2690, description: 'Fried potatoes with fried eggs from 3 eggs and toasted bread' },
      { id: 'bf-7', name: 'Happy Milka', nameRu: 'Happy Milka', price: 3890, description: 'Omelette from 2 eggs, with beef sausages, with Halloumi cheese, fresh vegetables, and crispy bread' },
      { id: 'bf-8', name: 'Shakshuka with Mozzarella', nameRu: 'Шакшука с Моцареллой', price: 3390, description: 'Dish of 3 eggs in tomato sauce, with Mozzarella, hot pepper, onion, spices, and crispy bread' },
      { id: 'bf-9', name: 'Fitness Breakfast', nameRu: 'Фитнес завтрак', price: 3490, description: 'Buckwheat porridge with boiled egg, with homemade turkey sausages, mushrooms, Feta cheese with fresh cucumbers' },
      { id: 'bf-10', name: 'Warm Breakfast', nameRu: 'Теплый завтрак', price: 2590, description: 'Toasted lavash with egg and cheese, and fresh cucumber salad, lettuce dressed with Philadelphia sauce' },
      { id: 'bf-11', name: 'Japanese Omurice', nameRu: 'Японский Омурайсу', price: 3890, description: 'Traditional Japanese dish. Omelette with basmati rice, chicken fillet, and ketchup filling. Served as a roll with green mixed salad and two pieces of crispy bread' },
      { id: 'bf-12', name: 'Eggs Benedict with Beef Ham / Salmon', nameRu: 'Яйца Бенедикт с говяжьей ветчиной / лососем', price: 3690, description: 'Aromatic bun with cream cheese, beef ham / salmon, two poached eggs, and topped with Hollandaise sauce' },
      { id: 'bf-13', name: 'Croissant Sandwich with Turkey / Salmon / Tuna', nameRu: 'Круассан сэндвич с индейкой / лососем / тунцом', price: 3290, description: 'Classic croissant with smoked turkey / salmon / tuna, fresh vegetables, iceberg lettuce, Caesar sauce, fried egg, and green mixed salad' },
      { id: 'bf-14', name: 'Avocado Toast', nameRu: 'Авокадо тост', price: 2890, description: 'Toasted crispy bread, with avocado puree and cream cheese and 2 eggs' },
      { id: 'bf-15', name: 'Grilled Hawaiian Sandwich with Turkey and Mozzarella', nameRu: 'Гриль-гавайский сэндвич с индейкой и сыром Моцарелла', price: 3390, description: 'Toasted bread with turkey, tomatoes, and Mozzarella cheese, with green mixed salad' },
      { id: 'bf-16', name: 'Burritos', nameRu: 'Бурритос', price: 3490, description: 'Wheat tortilla with chicken fillet, fried mushrooms, red beans, Suluguni cheese, green mixed salad, and scrambled egg' },
      { id: 'bf-17', name: 'Omelette Sandwich', nameRu: 'Омлет сэндвич', price: 3190, description: 'Sandwich based on toasted bread, fried in a tender omelette with cheese and ham' },
      { id: 'bf-18', name: 'Bagel with Salmon / Tuna / Turkey', nameRu: 'Бейгл с лососем / тунцом / индейкой', price: 3690, description: 'Signature Bagel bun with delicate sauce, arugula, avocado, lettuce, cream cheese, salmon / tuna / turkey' },
      { id: 'bf-19', name: 'The Most Delicious Potato Pancakes', nameRu: 'Самые вкусные картофельные дранники', price: 3590, description: 'Fried potato pancakes, mixed salad with cherry tomatoes, with smoked salmon, boiled egg, and Tartar sauce' },
      { id: 'bf-20', name: 'Salmon Avo & Cream Cheese', nameRu: 'Salmon Avo & cream cheese', price: 4090, description: '2 toasted pieces of "Zdravie" bread with cheese, avocado, and pieces of salmon' },
      { id: 'bf-21', name: 'Chicken Quesadilla', nameRu: 'Кесаделья с курицей', price: 3490, description: 'Fried chicken with onion, scrambled egg, Cheddar cheese, bell pepper, cucumbers, and corn' },
      { id: 'bf-22', name: 'Mom\'s Recipe', nameRu: 'Мамин рецепт', price: 3690, description: 'Tender pieces of beef in a creamy mushroom sauce with light notes of spices. Served with mashed potato garnish' },
    ],
  },
  {
    id: 'coffee-espresso',
    title: 'Coffee Drinks Based on Espresso',
    titleRu: 'Кофейные напитки на основе эспрессо',
    icon: <Coffee size={24} />,
    items: [
      { id: 'ce-1', name: 'Espresso', nameRu: 'Эспрессо', price: 1000 },
      { id: 'ce-2', name: 'Americano', nameRu: 'Американо', price: 1200 },
      { id: 'ce-3', name: 'Espresso DOPPIO', nameRu: 'Эспрессо ДОППИО', price: 1200 },
    ],
  },
  {
    id: 'coffee-milk',
    title: 'Coffee with Milk and Cream',
    titleRu: 'Кофейные напитки с молоком и сливками',
    icon: <Droplet size={24} />,
    items: [
      { id: 'cm-1', name: 'Cappuccino', nameRu: 'Капучино', price: 1400 },
      { id: 'cm-2', name: 'Latte', nameRu: 'Латте', price: 1300 },
      { id: 'cm-3', name: 'Flat White', nameRu: 'Флэт-Уайт', price: 1200 },
      { id: 'cm-4', name: 'Raf', nameRu: 'Раф', price: 1500 },
      { id: 'cm-5', name: 'Lavender Latte', nameRu: 'Латте Лавандовый', price: 1400 },
      { id: 'cm-6', name: 'Mocha', nameRu: 'Мокко', price: 1600 },
      { id: 'cm-7', name: 'Coffee with Halva', nameRu: 'Кофе с Халвой', price: 1700 },
    ],
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee Drinks',
    titleRu: 'Кофейные холодные напитки',
    icon: <IceCream size={24} />,
    items: [
      { id: 'cc-1', name: 'Espresso Tonic', nameRu: 'Эспрессо Тоник', price: 1600 },
      { id: 'cc-2', name: 'Bumble', nameRu: 'Бамбл', price: 1900 },
      { id: 'cc-3', name: 'Iced Latte', nameRu: 'Айс-Латте', price: 1500 },
      { id: 'cc-4', name: 'Iced Cappuccino', nameRu: 'Айс-Капучино', price: 1600 },
      { id: 'cc-5', name: 'Frappuccino', nameRu: 'Фраппучино', price: 1800 },
      { id: 'cc-6', name: 'Oreo Latte', nameRu: 'Орео-Латте', price: 1800 },
      { id: 'cc-7', name: 'Spanish Affogato', nameRu: 'Spanish Аффогато', price: 1700 },
    ],
  },
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    titleRu: 'Горячие напитки',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'hd-1', name: 'Cocoa with Marshmallows', nameRu: 'Какао с маршмеллоу', price: 1600 },
      { id: 'hd-2', name: 'Hot Chocolate', nameRu: 'Горячий шоколад', price: 1500 },
      { id: 'hd-3', name: 'Hazelnut Chocolate', nameRu: 'Фундучный шоколад', price: 2000 },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha Tea',
    titleRu: 'Матча Чай',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'mt-1', name: 'Blue Matcha', nameRu: 'Голубая матча', price: 1800 },
      { id: 'mt-2', name: 'Green Matcha', nameRu: 'Зелёная матча', price: 1900 },
      { id: 'mt-3', name: 'Iced Matcha', nameRu: 'Айс-Матча', price: 1700 },
      { id: 'mt-4', name: 'Iced Mango Matcha', nameRu: 'Айс манго матча', price: 2000 },
      { id: 'mt-5', name: 'Iced Raspberry Matcha', nameRu: 'Айс малина матча', price: 2000 },
    ],
  },
  {
    id: 'tea-house',
    title: 'House-Made Tea',
    titleRu: 'Чай собственного приготовления',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'th-1', name: 'Moroccan Tea', nameRu: 'Марокканский Чай', price: 1400 },
      { id: 'th-2', name: 'Tashkent Tea', nameRu: 'Ташкентский Чай', price: 1400 },
      { id: 'th-3', name: 'Kazakh Tea with Milk', nameRu: 'Казахский с молоком', price: 1400 },
      { id: 'th-4', name: 'Ginger Tea', nameRu: 'Имбирный Чай', price: 1400 },
      { id: 'th-5', name: 'Berry Tea', nameRu: 'Ягодный Чай', price: 1400 },
      { id: 'th-6', name: 'Sea Buckthorn Tea', nameRu: 'Облепиховый Чай', price: 1400 },
    ],
  },
  {
    id: 'tea-loose',
    title: 'Loose Leaf Tea',
    titleRu: 'Чай Листовой',
    icon: <GlassWater size={24} />,
    items: [
      { id: 'tl-1', name: 'Assam Black', nameRu: 'Ассам чёрный', price: 900 },
      { id: 'tl-2', name: 'Jasmine', nameRu: 'Жасминовый', price: 900 },
      { id: 'tl-3', name: 'Milk Oolong', nameRu: 'Молочный Улун', price: 900 },
      { id: 'tl-4', name: 'Strawberry', nameRu: 'Земляника', price: 900 },
      { id: 'tl-5', name: 'Sencha', nameRu: 'Сенча', price: 900 },
      { id: 'tl-6', name: 'Earl Grey', nameRu: 'Эрл-Грей', price: 900 },
    ],
  },
  {
    id: 'fresh',
    title: 'Fresh Juices',
    titleRu: 'Фреш',
    icon: <Droplet size={24} />,
    items: [
      { id: 'fr-1', name: 'Orange', nameRu: 'Апельсиновый', price: 2500 },
      { id: 'fr-2', name: 'Apple', nameRu: 'Яблочный', price: 2500 },
      { id: 'fr-3', name: 'Mix', nameRu: 'Микс', price: 2500 },
    ],
  },
  {
    id: 'milkshakes',
    title: 'Milkshakes',
    titleRu: 'Милк-Шейк',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'ms-1', name: 'Classic', nameRu: 'Классический', price: 2000 },
      { id: 'ms-2', name: 'Strawberry', nameRu: 'Клубничный', price: 2000 },
      { id: 'ms-3', name: 'Banana', nameRu: 'Банановый', price: 2000 },
      { id: 'ms-4', name: 'Berry', nameRu: 'Ягодный', price: 2000 },
      { id: 'ms-5', name: 'Snickers', nameRu: 'Сникерс', price: 2000 },
    ],
  },
  {
    id: 'lemonades',
    title: 'Lemonades',
    titleRu: 'Лимонады',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'lm-1', name: 'Melon-Raspberry', nameRu: 'Дыня-Малина', price: 1380 },
      { id: 'lm-2', name: 'Mango-Passion Fruit', nameRu: 'Манго-Маракуйя', price: 1380 },
      { id: 'lm-3', name: 'Pear-Lemongrass', nameRu: 'Груша-Лемонграсс', price: 1380 },
      { id: 'lm-4', name: 'Tropical', nameRu: 'Тропический', price: 1380 },
      { id: 'lm-5', name: 'Watermelon-Mango', nameRu: 'Арбуз-Манго', price: 1380 },
      { id: 'lm-6', name: 'Citrus', nameRu: 'Цитрусовый', price: 1380 },
      { id: 'lm-7', name: 'Coffee', nameRu: 'Кофейный', price: 1380 },
      { id: 'lm-8', name: 'Mojito', nameRu: 'Мохито', price: 1380 },
      { id: 'lm-9', name: 'Pomegranate-Raspberry', nameRu: 'Гранат-малина', price: 1380 },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    titleRu: 'Смузи',
    icon: <CupSoda size={24} />,
    items: [
      { id: 'sm-1', name: 'Chocolate with Banana', nameRu: 'Шоколадный с Бананом', price: 2400 },
      { id: 'sm-2', name: 'Berry with Banana', nameRu: 'Ягодный с бананом', price: 2400 },
      { id: 'sm-3', name: 'Strawberry with Yogurt', nameRu: 'Клубничный с Йогуртом', price: 2400 },
      { id: 'sm-4', name: 'Fruit', nameRu: 'Фруктовый', price: 2400 },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('breakfasts');
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());
  const { addItem } = useCart();
  const { t, language } = useLanguage();

  const activeMenu = menuData.find(cat => cat.id === activeCategory);

  const handleAddToCart = (item: MenuItem, categoryId: string) => {
    addItem({
      id: item.id,
      name: item.name,
      nameRu: item.nameRu,
      price: item.price,
      category: categoryId,
    });
    setAddedItems(new Set(addedItems).add(item.id));
    setTimeout(() => {
      setAddedItems((prev) => {
        const next = new Set(prev);
        next.delete(item.id);
        return next;
      });
    }, 2000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + '₸';
  };

  const getItemName = (item: MenuItem) => {
    if (language === 'ru') return item.nameRu;
    if (language === 'kz') return item.nameRu;
    return item.name;
  };

  const getCategoryName = (category: MenuCategory) => {
    if (language === 'ru') return category.titleRu;
    if (language === 'kz') return category.titleRu;
    return category.title;
  };

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#faf9f7] via-white to-[#faf9f7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c4b550]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c4b550]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 relative">
          {/* Decorative coffee drip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-20">
            <div className="w-2 h-12 bg-[#c4b550] rounded-full animate-coffee-drip" />
          </div>
          
          <div className="inline-flex items-center gap-2 text-[#c4b550] text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6 font-medium">
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-pulse" />
            <span>{t('menu.title')}</span>
            <Sparkles size={14} className="sm:w-4 sm:h-4 animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#2c2416] mb-4 sm:mb-6 tracking-tight px-4 relative">
            <span className="relative">
              {t('menu.heading')}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#c4b550] to-transparent" />
            </span>
          </h2>
          <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-[#c4b550]/40 to-transparent mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-[#2c2416]/70 max-w-xl mx-auto font-light px-4">
            {t('menu.description')}
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex overflow-x-auto scrollbar-hide pb-2 gap-2 sm:gap-3 sm:justify-center sm:flex-wrap">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 relative overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] text-white shadow-lg shadow-[#c4b550]/20'
                    : 'bg-white text-[#2c2416]/70 hover:bg-gradient-to-r hover:from-white hover:to-[#faf9f7] border border-[#2c2416]/10 hover:border-[#c4b550]/30 hover:shadow-md'
                }`}
              >
                <span className={activeCategory === category.id ? 'opacity-100' : 'opacity-60'}>
                  {category.icon}
                </span>
                <span className="hidden sm:inline">{getCategoryName(category)}</span>
                <span className="sm:hidden">{getCategoryName(category).split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {activeMenu?.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#2c2416]/5 relative overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-[#faf9f7] via-amber-50/50 to-orange-50/50 rounded-lg sm:rounded-xl mb-4 sm:mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#c4b550]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#c4b550]/20 to-[#c4b550]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <UtensilsCrossed className="text-[#c4b550]/40 group-hover:text-[#c4b550]/60" size={20} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-medium text-[#2c2416] mb-1 sm:mb-2 group-hover:text-amber-900 transition-colors leading-tight">
                    {getItemName(item)}
                  </h3>
                  {language === 'en' && (
                    <p className="text-xs sm:text-sm text-[#2c2416]/60 font-light line-clamp-2">{item.nameRu}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <span className="text-lg sm:text-xl font-medium text-[#2c2416] whitespace-nowrap">{formatPrice(item.price)}</span>
                </div>
              </div>
              {item.description && (
                <p className="text-xs sm:text-sm text-[#2c2416]/60 mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">{item.description}</p>
              )}
              <button
                onClick={() => handleAddToCart(item, activeCategory)}
                className={`w-full py-2.5 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                  addedItems.has(item.id)
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] text-white hover:from-[#4a3428] hover:to-[#2c2416] hover:shadow-lg hover:shadow-[#c4b550]/20'
                }`}
              >
                {!addedItems.has(item.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                )}
                {addedItems.has(item.id) ? (
                  <>
                    <Check size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{t('menu.addedToCart')}</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span>{t('menu.addToCart')}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
