import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import CategoryStrip from "./components/CategoryStrip";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import LabTestedSection from "./components/LabTestedSection";
import CollectionCarousel from "./components/CollectionCarousel";
import LatestTrending from "./components/LatestTrending";
import PurposeSection from "./components/PurposeSection";
import ExploreEnergyStones from "./components/ExploreEnergyStones";
import LifestyleGallery from "./components/LifestyleGallery";
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
      <CollectionCarousel />
      <LatestTrending />
      <PurposeSection />
     <ExploreEnergyStones />
     <LifestyleGallery />
    </CartProvider>
  );
}

export default App;