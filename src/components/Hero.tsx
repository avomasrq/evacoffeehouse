import { useEffect, useState } from 'react';
import { ArrowDown, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 coffee-gradient opacity-95" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c2416]/80 via-[#2c2416]/60 to-[#2c2416]/90" />
      </div>

      {/* Coffee Bean Pattern Overlay */}
      <div className="absolute inset-0 coffee-bean-pattern opacity-30" />

      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bean opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 2.5}s`,
            }}
          >
            <div className="w-3 h-5 bg-[#c4b550] rounded-full transform rotate-45" />
          </div>
        ))}
      </div>

      {/* Coffee Steam Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-steam opacity-30"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '20%',
              animationDelay: `${i * 0.6}s`,
            }}
          >
            <div className="w-16 h-32 bg-gradient-to-t from-white/40 to-transparent rounded-full blur-sm" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8">
          <span className="inline-block text-white/80 text-sm uppercase tracking-[0.2em] font-medium mb-4">
            {t('hero.welcome')}
          </span>
        </div>

        <div className="relative inline-block mb-4 sm:mb-6">
          {/* Decorative coffee icon */}
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 opacity-20 animate-pulse">
            <Coffee size={80} className="sm:w-24 sm:h-24 text-[#c4b550]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light mb-4 sm:mb-6 tracking-tight leading-none px-2 relative">
            <span className="coffee-text-gradient text-shadow-glow">Eva</span>
            <br />
            <span className="font-normal italic text-white relative">
              Coffee House
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c4b550] to-transparent opacity-60" />
            </span>
          </h1>
        </div>

        <div className="w-16 sm:w-20 md:w-24 h-px bg-white/30 mx-auto mb-6 sm:mb-8" />

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
          {t('hero.tagline')}
          <br />
          <span className="text-sm sm:text-base md:text-lg text-white/70">{t('hero.subtitle')}</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <button
            onClick={scrollToMenu}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#c4b550] via-[#d4af37] to-[#c4b550] text-[#2c2416] rounded-full font-medium text-sm sm:text-base tracking-wide shadow-2xl hover:shadow-[#c4b550]/50 transition-all duration-300 hover:scale-105 uppercase tracking-wider animate-pulse-glow overflow-hidden"
          >
            <span className="relative z-10">{t('hero.viewMenu')}</span>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={scrollToMenu}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-[#c4b550]/50 text-white rounded-full font-medium text-sm sm:text-base tracking-wide hover:border-[#c4b550] hover:bg-[#c4b550]/10 transition-all duration-300 uppercase tracking-wider backdrop-blur-sm"
          >
            <span className="relative z-10">{t('hero.orderOnline')}</span>
            <div className="absolute inset-0 bg-[#c4b550]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider font-medium">{t('hero.scroll')}</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
}
