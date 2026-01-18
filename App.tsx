
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage: React.FC = () => (
  <main className="space-y-12 sm:space-y-16 md:space-y-24 pb-12 md:pb-20">
    <Hero />
    <section id="about" className="scroll-mt-24">
      <About />
    </section>
    <section id="skills" className="scroll-mt-24">
      <Skills />
    </section>
    <section id="projects" className="scroll-mt-24">
      <Projects />
    </section>
    <section id="contact" className="scroll-mt-24">
      <Contact />
    </section>
  </main>
);  

const BlogPage: React.FC = () => (
  <main className="pt-24 min-h-screen">
    <Blog />
  </main>
);

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-zinc-100 flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex-grow max-w-6xl mx-auto px-3 sm:px-4 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
