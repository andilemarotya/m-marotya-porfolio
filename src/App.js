import './App.css';

import Navbar from './components/navbar';
import Profile from './pages/profile';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Footer from './components/footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <div id="profile">
        <Profile />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />

    </div>
  );
}

export default App;