import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProfessionalExperience from './components/ProfessionalExperience';
import IndustryExperience from './components/IndustryExperience';
import Projects from './components/Projects';
import SEO from './components/SEO';
import { useState, useEffect } from 'react';
import ParticleAvatar from './ParticleAvatar';
import { LinkedIn, GitHub } from '@mui/icons-material';
import introPhoto from './assets/intro-photo.png';

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
          <header className="App-header" role="banner">
            <nav className="nav-menu" role="navigation" aria-label="Main navigation">
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
                <>
                  <SEO 
                    title="Pearl Oyewole | Computer Science Student at Caltech | Software Engineer & Researcher"
                    description="Pearl Oyewole is a Computer Science student at Caltech with experience in software engineering, machine learning, and data visualization. Explore her research at NASA JPL, internships at Norric and Jane Street, and innovative projects."
                    keywords="Pearl Oyewole, Caltech, Computer Science, Software Engineer, Machine Learning, Data Visualization, NASA JPL, Norric, Jane Street, React, Python, JavaScript, Portfolio, Research, Internship"
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

                    <ParticleAvatar
                      src={introPhoto}
                      alt="Pearl Oyewole, Computer Science student at Caltech"
                      width={320}
                      density={5}
                      dotSize={1.7}
                      cycleSeconds={6}
                    />
                  </div>
                </>
              }
            />
            <Route path="/professional-experience" element={
              <>
                <SEO 
                  title="Research Experience | Pearl Oyewole | NASA JPL, Caltech Research"
                  description="Explore Pearl Oyewole's research experience including data visualization work at NASA JPL, machine learning research at Caltech, and NASA SEES internship. View research posters and publications."
                  keywords="Pearl Oyewole, Research Experience, NASA JPL, Caltech, Data Visualization, Machine Learning, Research Posters, Scientific Research, Computer Science Research"
                  url="https://pearloyewole.com/professional-experience"
                />
                <ProfessionalExperience />
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
            <Route path="/industry-experience" element={
              <>
                <SEO 
                  title="Industry Experience | Pearl Oyewole | Norric, Jane Street Internships"
                  description="Learn about Pearl Oyewole's industry experience including software engineering internships at Norric and Jane Street Capital. Experience with full-stack development, machine learning, and financial technology."
                  keywords="Pearl Oyewole, Industry Experience, Software Engineering Intern, Norric, Jane Street Capital, Full-stack Development, Machine Learning, Financial Technology, OCaml"
                  url="https://pearloyewole.com/industry-experience"
                />
                <IndustryExperience />
              </>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
