import './App.css';

import Navbar from './components/navbar';
import Profile from './pages/profile';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Education />
      <Experience/>
      <Skills />
      <Projects />

    </div>
  );
}

export default App;