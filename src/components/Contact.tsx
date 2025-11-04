import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4" />
          <p className="text-amber-700 text-lg">
            We're waiting for you with a fresh cup and warm smile
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Location</h3>
                  <p className="text-amber-700">Байтурсынова, 141</p>
                  <p className="text-amber-600 text-sm mt-1">Almaty, Kazakhstan</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Hours</h3>
                  <p className="text-amber-700 font-medium">Every Day</p>
                  <p className="text-amber-600 text-lg mt-1">08:00 — 22:00</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">Contact</h3>
                  <a href="tel:+77771725414" className="text-amber-700 hover:text-amber-900 transition-colors">
                    +7 777 172 5414
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
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

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://wolt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-2">Order on Wolt</h3>
            <p className="text-blue-100">Fast delivery to your door</p>
          </a>

          <a
            href="https://yandex.com/go"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-2">Order on Яндекс Go</h3>
            <p className="text-gray-700">Quick and convenient</p>
          </a>

          <a
            href="https://wa.me/77771725414"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageCircle size={28} />
              <h3 className="text-2xl font-bold">WhatsApp</h3>
            </div>
            <p className="text-green-100">Direct orders & reservations</p>
          </a>
        </div>
      </div>
    </section>
  );
}
