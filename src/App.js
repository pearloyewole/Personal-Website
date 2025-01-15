import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <nav className="nav-menu">
          <a href="ProfessionalExperience">Professional Experience</a>
          <a href="Research">Research</a>
          <a href="PersonalProjects">Personal Projects</a>
          <a href="AboutMe">About Me</a>
        </nav>
      
      </header>
      <div className="content">
        <img 
          src="/intro-photo.png" 
          alt="Profile" 
          className="profile-image"
        />
        <h1 className='Intro'> Hi! I'm Pearl. </h1>
        <h3> Freshman @ Caltech, Studying Computer Science</h3>
        <p>I am an undergraduate Computer Science student at the California Institute of Technology (Caltech). I am interested in using technology to work on impactful, real-world problems! This website also serves as an example of my website development capabilities.</p>
        <button>Contact Me!</button>
      </div>
    </div>
  );
}

export default App;
