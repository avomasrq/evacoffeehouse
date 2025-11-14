import { Heart, Users, Coffee, Leaf, Bean, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f1eb' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c4b550]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c4b550]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 text-[#c4b550] text-sm uppercase tracking-wider mb-6 font-medium">
            <Leaf size={16} className="animate-pulse" />
            <span>{t('about.title')}</span>
            <Leaf size={16} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2c2416] mb-6 tracking-tight relative">
            <span className="relative">
              {t('about.heading')}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#c4b550] to-transparent opacity-40" />
            </span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c4b550]/40 to-transparent mx-auto mb-6" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <div className="group text-center relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-light text-[#2c2416] mb-4 group-hover:text-[#c4b550] transition-colors">{t('about.petFriendly')}</h3>
              <p className="text-[#2c2416]/70 leading-relaxed font-light">
                {t('about.petFriendlyDesc')}
              </p>
            </div>
          </div>

          <div className="group text-center relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30">
                <Coffee className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-light text-[#2c2416] mb-4 group-hover:text-[#c4b550] transition-colors">{t('about.cozyInteriors')}</h3>
              <p className="text-[#2c2416]/70 leading-relaxed font-light">
                {t('about.cozyInteriorsDesc')}
              </p>
            </div>
          </div>

          <div className="group text-center relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-light text-[#2c2416] mb-4 group-hover:text-[#c4b550] transition-colors">{t('about.friendlyStaff')}</h3>
              <p className="text-[#2c2416]/70 leading-relaxed font-light">
                {t('about.friendlyStaffDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* What They Offer Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-[#2c2416] mb-4">
              {t('about.whatWeOffer')}
            </h3>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c4b550]/40 to-transparent mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:shadow-xl hover:border-[#c4b550]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4b550]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30 transition-all duration-300">
                  <Bean className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#2c2416] mb-2">{t('about.arabicaCoffee')}</h4>
                  <p className="text-[#2c2416]/70 leading-relaxed font-light">
                    {t('about.arabicaCoffeeDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:shadow-xl hover:border-[#c4b550]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4b550]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30 transition-all duration-300">
                  <UtensilsCrossed className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#2c2416] mb-2">{t('about.allDayBreakfast')}</h4>
                  <p className="text-[#2c2416]/70 leading-relaxed font-light">
                    {t('about.allDayBreakfastDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c4b550]/20 via-transparent to-[#c4b550]/20 rounded-3xl blur opacity-50" />
          <div className="relative bg-gradient-to-br from-[#faf9f7] to-white rounded-3xl p-12 md:p-16 text-center border border-[#c4b550]/20 shadow-xl">
            <div className="text-6xl text-[#c4b550]/20 mb-8 font-serif">"</div>
            <p className="text-2xl md:text-3xl text-[#2c2416] leading-relaxed font-light mb-6">
              {t('about.quote')}
            </p>
            <p className="text-xl md:text-2xl text-[#c4b550] font-light italic">
              {t('about.quoteEnd')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
