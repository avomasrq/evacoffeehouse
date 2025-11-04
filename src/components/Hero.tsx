import { Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            <Coffee className="text-amber-800" size={20 + Math.random() * 30} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-amber-100/30" />

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1500 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <Coffee className="text-amber-800 animate-pulse" size={80} strokeWidth={1.5} />
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-300/30 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tight">
          Coffee Milka
        </h1>

        <div className="relative inline-block mb-6">
          <h2 className="text-2xl md:text-4xl text-amber-800 font-light">
            Breakfasts All Day ☕
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        <p className="text-lg md:text-xl text-amber-700 mb-8 max-w-2xl mx-auto font-light">
          Flavors that lift your mood
        </p>

        <button
          onClick={scrollToMenu}
          className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">View Menu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-amber-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
