import React, { StrictMode } from 'react';
import './ProfessionalExperience.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function ProfessionalExperience() {
  // Create the plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="professional-experience">
      <h1>Experience</h1>
      
      <div className="experience-container">
        <div className="experience-card">
          <h2 className="company-name">California Institute of Technology</h2>
          <h3 className='job-title'>Student Researcher</h3>
          <p className="date">June 2024 - September 2024</p>
          <p>Tools: Python Packages include: NumPy, Pandas, Matplotlib, sci-kit-learn, and tqdm.</p>
          <p className="responsibilities"> As part of Caltech's First Year Research Success Initiative's cohort, I worked with Comparative Planetary Evolution Postdoctoral Fellow, Dr. Junjie Dong, and another FSRI student to use machine learning to predict the melting curves of different ice phases. In order to do this, I utilized a variety of machine learning methods--- such as multi-class logistic regression and supervised learning methods (k-fold cross-validation, grid search). I also collected, labeled, and analyzed over 2000 data points of phase stability of hydrogen and water under extreme conditions.  </p>
        </div>
        
        <div className="pdf-viewer">
          <StrictMode>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer 
                fileUrl="/2024 FSRI-Research-Poster_At-the-Core-of-Uranus.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </StrictMode>
        </div>
      </div>

      <div className="experience-card">
        <h2 className="company-name">NASA & University of Texas Center for Space Research</h2>
        <h3 className='job-title'>Research Intern</h3>
        <p className="date">June 2023 - August 2023</p>
        <p>Tools: GMTSAR, Alaska Data thing, Python(Numpy, Matplotlib), MATLAB</p>
        <p className="responsibilities"> I conducted this research as 1 of the top 95 students out of 2000 applicants to the STEM Enhancement in Earth Science (SEES) internship program at NASA
and the University of Texas Center for Space Research. I utilized MATLAB, Python libraries (NumPy, Matplotlib), and geophysical data processing techniques to create interferograms (images of surface deformation) and
analyze satellite data under the guidance of UT Austin assistant professor Dr. Jinyi (Ann) Chen. Presented research poster and abstract at the 2023 American Geophysical Union Fall Meeting Bright Stars Poster Session. </p>
      </div>

      <div className="experience-card">
        <h2 className="company-name">North Carolina State University Game2Learn Lab</h2>
        <h3 className='job-title'>Research Intern</h3>
        <p className="date">June 2021 - July 2022</p>
        <p>Tools: Python Packages include: NumPy, Pandas, Matplotlib, sci-kit-learn, and tqdm.</p>
        <p className="responsibilities"> I developed and programmed innovative computing-infused curriculum and software tools (games, simulations, tutorials, etc.) that was utilized by over 200 K-12 teachers participating in the Game2Learn Lab Research Experience for Teachers (RET). I specifically utilized Python and block-based programming to infuse computational thinking into non-computing courses. The goal of creating these computer science infused curriculums was to improve computer science education accessibility. </p>
      </div>
    </div>
  );
}

export default ProfessionalExperience; 