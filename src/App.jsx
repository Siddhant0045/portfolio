import React from 'react';
import { Fluid } from './components/Fluid/Fluid';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Mainpage from './components/MainPage/Mainpage';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

export const App = () => {
  return (
    <>
      <div className="noise"></div>
      <Header />
      <Fluid />
      <Mainpage />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};