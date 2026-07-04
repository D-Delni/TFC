import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import OurServicesPage from "./pages/OurServicesPage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mortgage-calculator" element={<CalculatorPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/our-services" element={<OurServicesPage />} />
      <Route path="*" element={<PlaceholderPage />} />
    </Routes>
  );
}
