import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProfessionalExperience from './components/ProfessionalExperience';
import IndustryExperience from './components/IndustryExperience';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';
import ParticleAvatar from './ParticleAvatar';

function App() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "I am a Computer Science student at the California Institute of Technology (Caltech). I am interested in using technology to work on impactful, real-world problems! This website also serves as an example of my website development capabilities.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="nav-menu">
            <Link to="/">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/industry-experience">Industry Experience</Link>
            <Link to="/professional-experience">Research Experience</Link>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <div className="text-content">
                  <h1 className="Intro"> Hi! I'm Pearl. </h1>
                  <h3> Undergraduate Student @ Caltech, Studying Computer Science</h3>
                  <p className="typing-text">
                    {displayText}
                    <span className="cursor">|</span>
                  </p>
                  <a 
  href="https://docs.google.com/document/d/1c3R7eHMeMLUmr6eyqvcmS8Y6ApgiPGXoLEhsQwmK4jY/edit?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>View My Resume</button>
</a>

                </div>
                <ParticleAvatar
                  src="/intro-photo.png"
                  width={320}
                  density={5}
                  dotSize={1.7}
                  cycleSeconds={6}
                />
              </div>
            }
          />
          <Route path="/professional-experience" element={<ProfessionalExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industry-experience" element={<IndustryExperience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
