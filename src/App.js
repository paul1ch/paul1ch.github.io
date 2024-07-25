import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTopButton from './components/ScrollToTopButton.js';
import './i18n.js';

function App() {
  return (
    <div className="App-background">
      <Header />
      <Sidebar />
      <div className="sections">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
