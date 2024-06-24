import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/header';
import Footer from './components/footer';
import './style.css';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import ResumeSection from './pages/ResumeDisplay';
import FullScreenGrid from './pages/bigGrid';

function App() {
  return (
    <main>
      <FullScreenGrid/>
    </main>
    // <>
    //   <Header />
    //   <main className="mx-3">
    //     <Element name="about" id="about">
    //       <section><About /></section>
    //     </Element>
    //     <Element name="portfolio" id="portfolio">
    //     <section><Portfolio /></section>
    //     </Element>
    //     <Element name="resume" id="resume">
    //     <section><ResumeSection /></section>
    //     </Element>
    //     <Element name="contact" id="contact">
    //     <section><Contact /></section>
    //     </Element>
    //   </main>
    //   <Footer />
    // </>
  );
}

export default App;