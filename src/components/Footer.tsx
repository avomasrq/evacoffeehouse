import { Instagram, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-gradient-to-b from-[#2c2416] via-[#1a1510] to-[#2c2416] text-white py-16 overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 coffee-bean-pattern opacity-10" />
      
      {/* Coffee Steam at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-32 h-32 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-white/20 to-transparent rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Coffee size={28} className="text-[#c4b550] animate-pulse" />
                <div className="absolute inset-0 bg-[#c4b550]/30 rounded-full blur-md animate-pulse" />
              </div>
              <h3 className="text-2xl font-light">
                Coffee <span className="italic text-[#c4b550]">Milka</span>
              </h3>
            </div>
            <p className="text-white/70 font-light leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-white/80">{t('footer.contact')}</h4>
            <div className="space-y-3 text-white/70 font-light">
              <p>Байтурсынова, 141</p>
              <p>Almaty, Kazakhstan</p>
              <p>08:00 — 22:00 Daily</p>
              <a
                href="tel:+77771725414"
                className="block hover:text-white transition-colors"
              >
                +7 777 172 5414
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-6 text-white/80">{t('footer.followUs')}</h4>
            <a
              href="https://instagram.com/coffeemilkaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </div>
              <span className="font-light">@coffeemilkaaa</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/60 text-sm font-light">
            © {new Date().getFullYear()} Coffee Milka. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
