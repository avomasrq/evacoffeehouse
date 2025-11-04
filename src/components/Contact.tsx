import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#faf9f7] to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#c4b550]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#c4b550]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 text-[#c4b550] text-sm uppercase tracking-wider mb-6 font-medium">
            <MapPin size={16} className="animate-pulse" />
            <span>{t('contact.title')}</span>
            <MapPin size={16} className="animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2c2416] mb-6 tracking-tight relative">
            <span className="relative">
              {t('contact.heading')}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#c4b550] to-transparent opacity-40" />
            </span>
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#c4b550]/40 to-transparent mx-auto mb-6" />
          <p className="text-lg text-[#2c2416]/70 max-w-xl mx-auto font-light">
            {t('contact.description')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:shadow-xl hover:border-[#c4b550]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4b550]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30 transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2c2416] mb-2">{t('contact.location')}</h3>
                  <p className="text-[#2c2416]/80 text-lg mb-1">Байтурсынова, 141</p>
                  <p className="text-[#2c2416]/60">Almaty, Kazakhstan</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:shadow-xl hover:border-[#c4b550]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4b550]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30 transition-all duration-300">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2c2416] mb-2">{t('contact.hours')}</h3>
                  <p className="text-[#2c2416]/60 mb-2">{t('contact.everyDay')}</p>
                  <p className="text-[#2c2416]/80 text-xl font-light">08:00 — 22:00</p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:shadow-xl hover:border-[#c4b550]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c4b550]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-[#2c2416] to-[#4a3428] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#c4b550]/30 transition-all duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#2c2416] mb-2">{t('contact.contact')}</h3>
                  <a
                    href="tel:+77771725414"
                    className="text-[#2c2416]/80 text-lg hover:text-[#2c2416] transition-colors"
                  >
                    +7 777 172 5414
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] border border-[#2c2416]/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4649!2d76.9297!3d43.2361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzEwLjAiTiA3NsKwNTUnNDcuMCJF!5e0!3m2!1sen!2skz!4v1234567890!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Milka Location"
            />
          </div>
        </div>

        {/* Order Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://eda.yandex.ru/restaurant/coffee_milka?utm_campaign=superapp_taxi_web&utm_medium=referral&utm_source=rst_shared_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:border-[#c4b550]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <span className="text-[#2c2416] font-bold text-lg">Я</span>
              </div>
              <h3 className="text-xl font-medium text-[#2c2416] mb-2 group-hover:text-[#c4b550] transition-colors">{t('contact.yandexGo')}</h3>
              <p className="text-[#2c2416]/60 mb-4">{t('contact.yandexDesc')}</p>
              <div className="flex items-center text-yellow-600 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-medium">{t('contact.orderNow')}</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/77771725414"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-8 border border-[#2c2416]/5 hover:border-[#c4b550]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#c4b550]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-medium text-[#2c2416] mb-2 group-hover:text-[#c4b550] transition-colors">{t('contact.whatsapp')}</h3>
              <p className="text-[#2c2416]/60 mb-4">{t('contact.whatsappDesc')}</p>
              <div className="flex items-center text-green-600 group-hover:translate-x-2 transition-transform">
                <span className="text-sm font-medium">{t('contact.messageUs')}</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
