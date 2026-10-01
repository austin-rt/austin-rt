import './index.css';
import { useEffect } from 'react';
import { scrollToTop } from './utils/utilityFunctions';
import { RefProvider } from './context/RefContext';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import OpenSource from "./components/OpenSource/OpenSource";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <RefProvider>
      <Header />
      <Nav />
      <About />
      <Projects />
      <OpenSource />
      <Contact />
      <Footer />
    </RefProvider>
  );
}

export default App;
