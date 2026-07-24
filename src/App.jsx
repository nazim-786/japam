import './App.css';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import CategoryStrip from './components/CategoryStrip';
import { CartProvider } from './context/CartContext';
import HeroSection from './components/HeroSection';
import ProductCarousel from './components/ProductCarousel';
import ProductSection from './components/ProductSection';

function App() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <CategoryStrip />
      <HeroSection />
      <ProductCarousel />
      <ProductSection />
    </CartProvider>
  );
}

export default App;