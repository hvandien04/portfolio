import React from 'react';      
import Header from '../component/Header';
import HeroSection from '../component/HeroSection';
import About from '../component/About';
import Skills from '../component/Skills';
import Projects from '../component/Projects';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Index = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </>
  );
}   

export default Index;