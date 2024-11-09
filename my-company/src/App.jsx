import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='./components/Home.jsx' element={<Home />} />
          <Route path='./components/About.jsx' element={<About />} />
          <Route path='./components/Services.jsx' element={<Services />} />
          <Route path='./components/Contact.jsx' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
  </Router>
  )
}

export default App;
