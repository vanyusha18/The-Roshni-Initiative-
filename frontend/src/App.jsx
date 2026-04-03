import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Removed lucide-react brand icons due to library deprecation
import Home from './pages/Home';
import Register from './pages/Register';
import VolunteerDashboard from './components/VolunteerPassport';
import About from './pages/About';
import Works from './pages/Works';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-roshni-ink text-roshni-sand px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center shadow-lg relative z-50">
          <Link to="/" className="text-3xl font-heading font-bold tracking-wider text-roshni-amber mb-4 md:mb-0">
            Roshni
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans tracking-wide text-sm font-semibold uppercase">
            <Link to="/" className="hover:text-roshni-teal transition-colors">Home</Link>
            <Link to="/about" className="hover:text-roshni-teal transition-colors">About Us</Link>
            <Link to="/works" className="hover:text-roshni-teal transition-colors">Works</Link>
            <Link to="/gallery" className="hover:text-roshni-teal transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-roshni-teal transition-colors">Contact</Link>
            <Link to="/register" className="px-5 py-2.5 bg-roshni-green text-white rounded hover:bg-opacity-90 hover:shadow-lg transition">Volunteer</Link>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<VolunteerDashboard />} />
          </Routes>
        </main>

        <footer className="bg-roshni-ink text-roshni-sand px-6 py-12 text-center border-t border-roshni-sand/10">
          <h3 className="text-2xl font-heading text-roshni-amber mb-6">Roshni Initiative</h3>
          <div className="flex justify-center gap-8 mb-8 font-sans font-bold tracking-widest uppercase text-sm">
            <a href="#" className="hover:text-roshni-teal transition">Twitter</a>
            <a href="#" className="hover:text-roshni-teal transition">Instagram</a>
            <a href="#" className="hover:text-roshni-teal transition">LinkedIn</a>
            <a href="#" className="hover:text-roshni-teal transition">Facebook</a>
          </div>
          <p className="opacity-80 text-sm font-sans tracking-widest uppercase mb-2">Lighting the path from rural darkness to digital possibility.</p>
          <p className="opacity-40 text-xs mt-4">&copy; {new Date().getFullYear()} Roshni Initiative. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
