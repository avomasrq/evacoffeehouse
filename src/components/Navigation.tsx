import { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  onCartOpen: () => void;
}

export default function Navigation({ onCartOpen }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'pt-3' : 'pt-3'
      }`}>
        <div className={`flex items-center justify-between h-16 transition-all duration-300 rounded-full ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/30' 
            : 'bg-white/20 backdrop-blur-md border border-white/20'
        } px-5 md:px-7`}>
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Coffee
                className={`transition-colors ${
                  isScrolled ? 'text-amber-900' : 'text-white'
                }`}
                size={24}
              />
            </div>
            <span
              className={`text-lg font-bold transition-colors ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#2c2416] to-[#4a3428] bg-clip-text text-transparent' 
                  : 'text-white'
              }`}
            >
              Coffee <span className="italic text-[#c4b550]">Milka</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-xs font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className={`text-xs font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.menu')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-xs font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-xs font-medium transition-colors hover:text-amber-700 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.contact')}
            </button>
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Globe size={14} />
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
          <div className={`md:hidden pb-4 pt-4 transition-all duration-300 rounded-2xl mt-2 px-4 space-y-3 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl border border-white/30' 
              : 'bg-white/30 backdrop-blur-md border border-white/20'
          }`}>
            {/* Line 1: Navigation Links */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-2 py-2 text-xs font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-lg transition-colors text-center"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="px-2 py-2 text-xs font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-lg transition-colors text-center"
              >
                {t('nav.menu')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-2 py-2 text-xs font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-lg transition-colors text-center"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-2 py-2 text-xs font-medium text-gray-700 hover:text-amber-700 hover:bg-gray-50 rounded-lg transition-colors text-center"
              >
                {t('nav.contact')}
              </button>
            </div>
            
            {/* Line 2: Language Switcher */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
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
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
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
                className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
                  language === 'kz'
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                KZ
              </button>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}
