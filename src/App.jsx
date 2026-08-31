import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import CategoryStrip from "./components/CategoryStrip";
import HeroSection from "./components/HeroSection";
import ProductCarousel from "./components/ProductCarousel";
import LabTestedSection from "./components/LabTestedSection";
import CollectionCarousel from "./components/CollectionCarousel";
import LatestTrending from "./components/LatestTrending";
import PurposeSection from "./components/PurposeSection";
import ExploreEnergyStones from "./components/ExploreEnergyStones";
import LifestyleGallery from "./components/LifestyleGallery";
import SaveCombos from "./components/SaveCombos";
import SiddhDeliverySection from "./components/SiddhDeliverySection";
import RudrakshaBeads from "./components/RudrakshaBeads";
import SpiritualHamper from "./components/SpiritualHamper";
import ChooseYourStyle from "./components/ChooseYourStyle";
import SpiritualJewellery from "./components/SpiritualJewellery";
import CustomerFeedback from "./components/CustomerFeedback";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import RudrakshaBracelets from "./pages/RudrakshaBracelets";
import RudrakshaMalas from "./pages/RudrakshaMalas";
import NepaliRudraksha from "./pages/NepaliRudraksha";

function HomePage() {
  return (
    <>
      <CategoryStrip />
      <HeroSection />
      <ProductCarousel />
      <LabTestedSection />
      <CollectionCarousel />
      <LatestTrending />
      <PurposeSection />
      <ExploreEnergyStones />
      <LifestyleGallery />
      <SaveCombos />
      <SiddhDeliverySection />
      <RudrakshaBeads />
      <SpiritualJewellery />
      <SpiritualHamper />
      <ChooseYourStyle />
      <CustomerFeedback />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AnnouncementBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/rudraksha/bracelets"
            element={<RudrakshaBracelets />}
          />
          <Route path="/rudraksha/malas" element={<RudrakshaMalas />} />
          <Route
            path="/rudraksha/nepali-rudraksha"
            element={<NepaliRudraksha />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;