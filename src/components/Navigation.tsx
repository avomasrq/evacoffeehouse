import { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';

interface NavigationProps {
  onCartOpen: () => void;
}

export default function Navigation({ onCartOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isLanguageMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const languageMenu = target.closest('.relative');
      if (!languageMenu) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Coffee
                className={`transition-colors ${
                  isScrolled ? 'text-amber-900' : 'text-white'
                }`}
                size={28}
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] bg-clip-text text-transparent' 
                  : 'text-white'
              }`}
            >
              Coffee <span className="italic text-[#c4b550]">Milka</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      language === 'en' ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ru');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      language === 'ru' ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('kz');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      language === 'kz' ? 'bg-gray-50 font-medium' : ''
                    }`}
                  >
                    Қазақша
                  </button>
                </div>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onCartOpen}
              className="relative px-4 py-2.5 bg-amber-900 text-white rounded-full text-sm font-medium hover:bg-amber-800 transition-colors flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`transition-colors ${
                  isScrolled ? 'text-amber-900' : 'text-white'
                }`}
                size={24}
              />
            ) : (
              <MenuIcon
                className={`transition-colors ${
                  isScrolled ? 'text-amber-900' : 'text-white'
                }`}
                size={24}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher Mobile */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Language</div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-amber-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLanguage('ru');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    language === 'ru'
                      ? 'bg-amber-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => {
                    setLanguage('kz');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    language === 'kz'
                      ? 'bg-amber-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  KZ
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                onCartOpen();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2.5 bg-amber-900 text-white rounded-full text-sm font-medium hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              {t('nav.orderNow')}
              {itemCount > 0 && (
                <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
