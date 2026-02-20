import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SEO from './components/SEO';
import { useState, useEffect } from 'react';
import ParticleAvatar from './ParticleAvatar';
import { LinkedIn, GitHub } from '@mui/icons-material';
import introPhoto from './assets/intro-photo.png';

function Navigation() {
  return (
    <header className="App-header" role="banner">
      <nav className="nav-menu" role="navigation" aria-label="Main navigation">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          About
        </NavLink>
        <NavLink 
          to="/experience" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Experience
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </NavLink>

      </nav>
    </header>
  );
}

function App() {
  const [displayText, setDisplayText] = useState('');
  const fullText =
    "I am a Computer Science student at the California Institute of Technology (Caltech). I am interested in using technology to work on impactful, real-world problems! This website also serves as an example of my website development capabilities.";

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
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navigation />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO 
                    title="Pearl Oyewole | Computer Science Student at Caltech | Software Engineer & Researcher"
                    description="Pearl Oyewole is a Computer Science student at Caltech with experience in software engineering, machine learning, and data visualization. Explore her research at NASA JPL, internships at CrowdStrike and Jane Street, and innovative projects."
                    keywords="Pearl Oyewole, Caltech, Computer Science, Software Engineer, Machine Learning, Data Visualization, NASA JPL, CrowdStrike, Jane Street, React, Python, JavaScript, Portfolio, Research, Internship"
                    url="https://pearloyewole.com/"
                  />
                  <div className="content">
                    <div className="text-content">
                      <h1 className="Intro"> Hi! I'm Pearl. </h1>
                      <h3> Undergraduate Student @ Caltech, Studying Computer Science</h3>
                      <p className="typing-text">
                        {displayText}
                        <span className="cursor">|</span>
                      </p>

                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        

                        <a
                          href="https://www.linkedin.com/in/pearl-oyewole/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <LinkedIn style={{ marginRight: 8, verticalAlign: 'middle' }} />
                          </button>
                        </a>

                        <a
                          href="https://github.com/pearloyewole"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <GitHub style={{ marginRight: 8, verticalAlign: 'middle' }} />
                          </button>
                        </a>
              
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <ParticleAvatar
                        src={introPhoto}
                        alt="Pearl Oyewole, Computer Science student at Caltech"
                        width={320}
                        density={5}
                        dotSize={1.7}
                        cycleSeconds={6}
                      />
                      <p className="avatar-hint">click on me!:</p>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/experience" element={
              <>
                <SEO 
                  title="Experience | Pearl Oyewole | Industry & Research Experience"
                  description="Explore Pearl Oyewole's experience including industry work at CrowdStrike and Jane Street, and research at NASA JPL and Caltech. Software engineering, machine learning, and data visualization."
                  keywords="Pearl Oyewole, Experience, Industry Experience, Research Experience, NASA JPL, Caltech, CrowdStrike, Jane Street, Software Engineering, Machine Learning, Data Visualization"
                  url="https://pearloyewole.com/experience"
                />
                <Experience />
              </>
            } />
            <Route path="/projects" element={
              <>
                <SEO 
                  title="Projects | Pearl Oyewole | Software Development & Innovation"
                  description="Discover Pearl Oyewole's innovative projects including Eden AI Sustainability Tracker, Soro iOS app, and various software development projects. Built with React, Python, and modern technologies."
                  keywords="Pearl Oyewole, Projects, Software Development, React, Python, JavaScript, iOS Development, AI, Sustainability, Mobile Apps, Web Development"
                  url="https://pearloyewole.com/projects"
                />
                <Projects />
              </>
            } />
            <Route path="/industry-experience" element={<Navigate to="/experience" replace />} />
            <Route path="/professional-experience" element={<Navigate to="/experience" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
