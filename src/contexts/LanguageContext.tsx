import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'kz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
      orderNow: 'Order Now',
    },
    hero: {
      welcome: 'Welcome to',
      tagline: 'Where good mornings last all day',
      subtitle: 'Breakfasts All Day',
      viewMenu: 'View Menu',
      orderOnline: 'Order Online',
      scroll: 'Scroll',
    },
    menu: {
      title: 'Our Menu',
      heading: 'What We Serve',
      description: 'Fresh ingredients, crafted with care, served with love',
      addToCart: 'Add to Cart',
      addedToCart: 'Added!',
    },
    about: {
      title: 'About Us',
      heading: 'Our Atmosphere',
      petFriendly: 'Pet-Friendly',
      petFriendlyDesc: 'Bring your furry friends along! We welcome pets with open arms and hearts.',
      cozyInteriors: 'Cozy Interiors',
      cozyInteriorsDesc: 'Warm, inviting spaces designed for comfort and relaxation throughout the day.',
      friendlyStaff: 'Friendly Staff',
      friendlyStaffDesc: 'Our team is here to make sure every visit feels like coming home.',
      quote: 'A pet-friendly space with cozy interiors and friendly staff —',
      quoteEnd: 'where good mornings last all day.',
    },
    contact: {
      title: 'Visit Us',
      heading: 'Find Us',
      description: "We're waiting for you with a fresh cup and warm smile",
      location: 'Location',
      hours: 'Hours',
      everyDay: 'Every Day',
      contact: 'Contact',
      orderOn: 'Order on',
      yandexGo: 'Yandex Go',
      yandexDesc: 'Quick and convenient',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Direct orders & reservations',
      orderNow: 'Order now',
      messageUs: 'Message us',
    },
    footer: {
      tagline: 'Where good mornings last all day',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    cart: {
      title: 'Your Order',
      empty: 'Your cart is empty',
      total: 'Total',
      showToWaiter: 'Show to Waiter',
      remove: 'Remove',
      close: 'Close',
      item: 'Item',
      quantity: 'Qty',
      price: 'Price',
    },
    categories: {
      breakfasts: 'Breakfasts',
      bowls: 'Bowls',
      salads: 'Salads',
      soups: 'Soups',
      pasta: 'Pasta',
      desserts: 'Desserts',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      menu: 'Меню',
      about: 'О нас',
      contact: 'Контакты',
      orderNow: 'Заказать',
    },
    hero: {
      welcome: 'Добро пожаловать в',
      tagline: 'Где хорошие утра длятся весь день',
      subtitle: 'Завтраки весь день',
      viewMenu: 'Посмотреть меню',
      orderOnline: 'Заказать онлайн',
      scroll: 'Прокрутить',
    },
    menu: {
      title: 'Наше меню',
      heading: 'Что мы предлагаем',
      description: 'Свежие ингредиенты, приготовленные с заботой, подаются с любовью',
      addToCart: 'В корзину',
      addedToCart: 'Добавлено!',
    },
    about: {
      title: 'О нас',
      heading: 'Наша атмосфера',
      petFriendly: 'Для питомцев',
      petFriendlyDesc: 'Приводите своих пушистых друзей! Мы приветствуем домашних животных с распростертыми объятиями.',
      cozyInteriors: 'Уютные интерьеры',
      cozyInteriorsDesc: 'Теплые, приветливые пространства, созданные для комфорта и отдыха в течение всего дня.',
      friendlyStaff: 'Дружелюбный персонал',
      friendlyStaffDesc: 'Наша команда здесь, чтобы каждый визит ощущался как возвращение домой.',
      quote: 'Пространство, дружелюбное к питомцам, с уютными интерьерами и дружелюбным персоналом —',
      quoteEnd: 'где хорошие утра длятся весь день.',
    },
    contact: {
      title: 'Посетите нас',
      heading: 'Найдите нас',
      description: 'Мы ждем вас с свежей чашкой и теплой улыбкой',
      location: 'Адрес',
      hours: 'Часы работы',
      everyDay: 'Ежедневно',
      contact: 'Контакты',
      orderOn: 'Заказать на',
      yandexGo: 'Яндекс Go',
      yandexDesc: 'Быстро и удобно',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Прямые заказы и бронирование',
      orderNow: 'Заказать',
      messageUs: 'Написать нам',
    },
    footer: {
      tagline: 'Где хорошие утра длятся весь день',
      contact: 'Контакты',
      followUs: 'Следите за нами',
      rights: 'Все права защищены.',
    },
    cart: {
      title: 'Ваш заказ',
      empty: 'Ваша корзина пуста',
      total: 'Итого',
      showToWaiter: 'Показать официанту',
      remove: 'Удалить',
      close: 'Закрыть',
      item: 'Блюдо',
      quantity: 'Кол-во',
      price: 'Цена',
    },
    categories: {
      breakfasts: 'Завтраки',
      bowls: 'Боулы',
      salads: 'Салаты',
      soups: 'Супы',
      pasta: 'Пасты',
      desserts: 'Десерты',
    },
  },
  kz: {
    nav: {
      home: 'Басты бет',
      menu: 'Мәзір',
      about: 'Біз туралы',
      contact: 'Байланыс',
      orderNow: 'Тапсырыс беру',
    },
    hero: {
      welcome: 'Қош келдіңіз',
      tagline: 'Жақсы таңдар күні бойы созылатын жер',
      subtitle: 'Таңғы ас күні бойы',
      viewMenu: 'Мәзірді көру',
      orderOnline: 'Онлайн тапсырыс',
      scroll: 'Айналдыру',
    },
    menu: {
      title: 'Біздің мәзір',
      heading: 'Біз не ұсынамыз',
      description: 'Жаңа ингредиенттер, мейіріммен дайындалған, махаббатпен ұсынылады',
      addToCart: 'Себетке қосу',
      addedToCart: 'Қосылды!',
    },
    about: {
      title: 'Біз туралы',
      heading: 'Біздің атмосфера',
      petFriendly: 'Үй жануарлары үшін',
      petFriendlyDesc: 'Түкті достарыңызбен келіңіз! Біз үй жануарларын ашық қолмен қарсы аламыз.',
      cozyInteriors: 'Жайлы интерьерлер',
      cozyInteriorsDesc: 'Бүкіл күні бойы жайлылық пен демалуға арналған жылы, мейірімді кеңістіктер.',
      friendlyStaff: 'Достық персонал',
      friendlyStaffDesc: 'Біздің команда әр келуді үйге оралу сияқты сезіну үшін мұнда.',
      quote: 'Үй жануарларына қолайлы, жайлы интерьерлері бар және достық персоналы бар кеңістік —',
      quoteEnd: 'жақсы таңдар күні бойы созылатын жер.',
    },
    contact: {
      title: 'Бізді келу',
      heading: 'Бізді табыңыз',
      description: 'Біз сізді жаңа шыныаяқпен және жылы күлімсіреумен күтеміз',
      location: 'Мекенжай',
      hours: 'Жұмыс уақыты',
      everyDay: 'Күн сайын',
      contact: 'Байланыс',
      orderOn: 'Тапсырыс беру',
      yandexGo: 'Яндекс Go',
      yandexDesc: 'Жылдам және ыңғайлы',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Тікелей тапсырыстар және брондау',
      orderNow: 'Тапсырыс беру',
      messageUs: 'Бізге хабарласыңыз',
    },
    footer: {
      tagline: 'Жақсы таңдар күні бойы созылатын жер',
      contact: 'Байланыс',
      followUs: 'Бізді бақылаңыз',
      rights: 'Барлық құқықтар қорғалған.',
    },
    cart: {
      title: 'Сіздің тапсырысыңыз',
      empty: 'Сіздің себетіңіз бос',
      total: 'Барлығы',
      showToWaiter: 'Даяшыға көрсету',
      remove: 'Жою',
      close: 'Жабу',
      item: 'Тағам',
      quantity: 'Саны',
      price: 'Бағасы',
    },
    categories: {
      breakfasts: 'Таңғы ас',
      bowls: 'Боулы',
      salads: 'Салаттар',
      soups: 'Сорпалар',
      pasta: 'Пасталар',
      desserts: 'Тәттілер',
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
