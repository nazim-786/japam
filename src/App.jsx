import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import CategoryStrip from "./components/CategoryStrip";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import LabTestedSection from "./components/LabTestedSection";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <CategoryStrip />
      <HeroSection />
      <ProductSection />
      <LabTestedSection />
    </CartProvider>
  );
}

export default App;