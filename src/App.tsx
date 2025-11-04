import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onCartOpen={() => setIsCartOpen(true)} />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;
