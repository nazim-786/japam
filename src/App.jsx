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
import RoseQuartzWearables from "./pages/RoseQuartzWearables";
import TigerEyeWearables from "./pages/TigerEyeWearables";
import AmethystWearables from "./pages/AmethystWearables";
import HematiteWearables from "./pages/HematiteWearables";
import PyriteWearables from "./pages/PyriteWearables";
import SpiritualBracelets from "./pages/SpiritualBracelets";
import SpiritualNecklaces from "./pages/SpiritualNecklaces";
import DiwaliCelebration from "./pages/DiwaliCelebration";
import RakhiCelebration from "./pages/RakhiCelebration";
import TrackOrder from "./pages/TrackOrder";
import ContactUs from "./pages/ContactUs";

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
          <Route path="/rose-quartz-wearables" element={<RoseQuartzWearables />} />
          <Route path="/tiger-eye-wearables" element={<TigerEyeWearables />} />
          <Route path="/amethyst-wearables" element={<AmethystWearables />} />
          <Route path="/hematite-wearables" element={<HematiteWearables />} />
          <Route path="/pyrite-wearables" element={<PyriteWearables />} />
          <Route path="/spiritual-bracelets" element={<SpiritualBracelets />} />
          <Route path="/spiritual-necklaces" element={<SpiritualNecklaces />} />
          <Route path="/diwali-celebration" element={<DiwaliCelebration />} />
          <Route path="/rakhi-celebration" element={<RakhiCelebration />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <CustomerFeedback />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;