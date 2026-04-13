import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import StoryDetails from "./pages/StoryDetails";
import Programs from "./pages/Programs";
import Testimonials from "./pages/Testimonials";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faqs from "./pages/Faqs";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/story" element={<StoryDetails />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Fallback Route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
