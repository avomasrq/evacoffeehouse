import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useCart } from './contexts/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen">
      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-amber-900 text-white rounded-full shadow-2xl hover:bg-amber-800 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Open cart"
      >
        <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>
    </div>
  );
}

export default App;
