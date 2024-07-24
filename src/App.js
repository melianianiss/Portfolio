import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Headers from './header/header';
import Home from './home/home';
import About from './about/About';
import Skills from './skills/Skills';
import Services from './services/Services';
import Contact from './services/contact/Contact';
import Footer from './footer/Footer';
import Scroll from './scroll/Scroll';
import Projects from './projects/Projects';


function App() {
  return (
    <div className="App">
      <Headers />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
        <Footer />
        <Scroll />
    </div>
  );
}

export default App;
