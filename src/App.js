import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProfessionalExperience from './components/ProfessionalExperience';
import IndustryExperience from './components/IndustryExperience';
import { useState, useEffect } from 'react';

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
    }, 30); // Speed of typing (lower = faster)
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        
        <header className="App-header"> 
          <nav className="nav-menu">
            <Link to="/">About Me</Link>
            <Link to="/personal-projects">Personal Projects</Link>
            <Link to="/industry-experience">Industry Experience</Link>
            <Link to="/professional-experience">Research Experience</Link>
  
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <div className="content">
              <div className="text-content">
                <h1 className='Intro'> Hi! I'm Pearl. </h1>
                <h3> Undergraduate Student @ Caltech, Studying Computer Science</h3>
                <p className="typing-text">
                  {displayText}
                  <span className="cursor">|</span>
                </p>
                <button>View My Resume</button>
              </div>
              <img 
                src="/intro-photo.png" 
                alt="Profile" 
                className="profile-image"
              />
            </div>
          } />
          <Route path="/professional-experience" element={<ProfessionalExperience />} />
          <Route path="/industry-experience" element={<IndustryExperience />} />
          {/* Add other routes as you create the components */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
