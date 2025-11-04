import { Heart, Users, Coffee } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 bg-amber-400 rounded-full blur-3xl animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Atmosphere
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Pet-Friendly</h3>
            <p className="text-amber-700">
              Bring your furry friends along! We welcome pets with open arms and hearts.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Cozy Interiors</h3>
            <p className="text-amber-700">
              Warm, inviting spaces designed for comfort and relaxation throughout the day.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-3">Friendly Staff</h3>
            <p className="text-amber-700">
              Our team is here to make sure every visit feels like coming home.
            </p>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl text-center">
          <p className="text-xl md:text-2xl text-amber-800 leading-relaxed font-light">
            A pet-friendly space with cozy interiors and friendly staff —
            <br />
            <span className="font-semibold text-amber-900">
              where good mornings last all day.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
