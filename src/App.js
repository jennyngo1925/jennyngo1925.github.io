//import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
//import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <ScrollToTop>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
