import { Instagram, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={32} />
              <h3 className="text-2xl font-bold">Coffee Milka</h3>
            </div>
            <p className="text-amber-100">
              Where good mornings last all day
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-amber-100 mb-2">Байтурсынова, 141</p>
            <p className="text-amber-100 mb-2">08:00 — 22:00 Daily</p>
            <a href="tel:+77771725414" className="text-amber-100 hover:text-white transition-colors">
              +7 777 172 5414
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <a
              href="https://instagram.com/coffeemilkaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-100 hover:text-white transition-colors"
            >
              <Instagram size={24} />
              <span>@coffeemilkaaa</span>
            </a>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8 text-center">
          <p className="text-amber-100">
            © {new Date().getFullYear()} Coffee Milka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
