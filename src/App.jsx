import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import './styles/style.min.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;