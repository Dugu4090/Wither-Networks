import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import ServerInfo from './components/ServerInfo';
import Home from './pages/Home';
import About from './pages/About';
import GameModes from './pages/GameModes';
import Rules from './pages/Rules';
import Ranks from './pages/Ranks';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <BackgroundElements />
      <Navbar />
      <ServerInfo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game-modes" element={<GameModes />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
