
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const HomePage: React.FC = () => (
  <main className="space-y-16 md:space-y-24 pb-12 md:pb-20">
    <Hero />
    <section id="about">
      <About />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
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
    <Router>
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
