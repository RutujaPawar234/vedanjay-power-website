import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/chatbot/Chatbot.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Industries from './pages/Industries.jsx';
import Projects from './pages/Projects.jsx';
import Leadership from './pages/Leadership.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';

/**
 * Lightweight stub for routes whose full pages are not built yet.
 * Keeps navigation links functional without implementing those pages.
 */
function PagePlaceholder({ title }) {
  return (
    <main className="page-placeholder" id="main-content">
      <div className="container text-center">
        <span className="eyebrow">Vedanjay Power Pvt. Ltd.</span>
        <h1 className="section-title mt-2">{title}</h1>
        <p className="text-muted-green mx-auto" style={{ maxWidth: '640px' }}>
          This section is being prepared. Please explore our homepage in the meantime.
        </p>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PagePlaceholder title="Page Not Found" />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  );
}
