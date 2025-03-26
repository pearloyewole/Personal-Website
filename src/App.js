import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProfessionalExperience from './components/ProfessionalExperience';
import IndustryExperience from './components/IndustryExperience';

function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header"> 
          <nav className="nav-menu">
            <Link to="/">About Me</Link>
            <Link to="/personal-projects">Personal Projects</Link>
            <Link to="/professional-experience">Research Experience</Link>
            <Link to="/industry-experience">Industry Experience</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <div className="content">
              <div className="text-content">
                <h1 className='Intro'> Hi! I'm Pearl. </h1>
                <h3> Freshman @ Caltech, Studying Computer Science</h3>
                <p>I am an undergraduate Computer Science student at the California Institute of Technology (Caltech). I am interested in using technology to work on impactful, real-world problems! This website also serves as an example of my website development capabilities.</p>
                <button>Contact Me!</button>
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
