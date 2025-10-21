import React, { useState } from 'react';
import './ProfessionalExperience.css';
import { 
  Card, 
  CardContent, 
  Avatar, 
  Typography, 
  Box, 
  Chip, 
  Divider,
  Paper,
  Button
} from '@mui/material';
import { Work, LocationOn, CalendarToday, Download, OpenInNew } from '@mui/icons-material';

// Import images
import fsriPoster from '../assets/fsriposter.png';
import seesPoster from '../assets/seesposter.png';
import yukonImage from '../assets/yukon.png';

function ProfessionalExperience() {
  const [imageErrors, setImageErrors] = useState({});

  const experiences = [
    {
      id: 1,
      company: "Data to Discovery + NASA Jet Propulsion Laboratory",
      title: "Data Visualization Tools Engineer",
      date: "March 2025 - Present",
      tools: ["D3.js", "Three.js", "React", "WebGL", "HCI", "Data Visualization"],
      description: "Developing full-stack data visualization software to handle large 3D ADCP and satellite datasets. Implementing backend and computation pipelines to support dataset uploads, cross-section extraction, and fluid shear stress calculations, optimizing performance for interactive exploration. Collaborating with researchers to deliver a scientific tool that visualizes river systems in 3D, link hydrodynamic forces to erosion patterns, and generate new insights from Alaskan river datasets.",
      location: "Pasadena, CA",
      type: "Research",
      hasPoster: false,
      hasImage: true
    },
    {
      id: 2,
      company: "California Institute of Technology",
      title: "Student Researcher",
      date: "June 2024 - September 2024",
      tools: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "tqdm"],
      description: "As part of Caltech's First Year Research Success Initiative's cohort, I worked with Comparative Planetary Evolution Postdoctoral Fellow, Dr. Junjie Dong, and another FSRI student to use machine learning to predict the melting curves of different ice phases. In order to do this, I utilized a variety of machine learning methods--- such as multi-class logistic regression and supervised learning methods (k-fold cross-validation, grid search). I also collected, labeled, and analyzed over 2000 data points of phase stability of hydrogen and water under extreme conditions.",
      location: "Pasadena, CA",
      type: "Research",
      hasPoster: true
    },
    {
      id: 3,
      company: "NASA & University of Texas Center for Space Research",
      title: "Research Intern",
      date: "June 2023 - August 2023",
      tools: ["GMTSAR", "Alaska Data", "Python", "NumPy", "Matplotlib", "MATLAB"],
      description: "I conducted this research as 1 of the top 95 students out of 2000 applicants to the STEM Enhancement in Earth Science (SEES) internship program at NASA and the University of Texas Center for Space Research. I utilized MATLAB, Python libraries (NumPy, Matplotlib), and geophysical data processing techniques to create interferograms (images of surface deformation) and analyze satellite data under the guidance of UT Austin assistant professor Dr. Jinyi (Ann) Chen. Presented research poster and abstract at the 2023 American Geophysical Union Fall Meeting Bright Stars Poster Session.",
      location: "Austin, TX",
      type: "Internship",
      hasPoster: true
    },
    {
      id: 4,
      company: "North Carolina State University Game2Learn Lab",
      title: "Research Intern",
      date: "June 2021 - July 2022",
      tools: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "tqdm"],
      description: "I developed and programmed innovative computing-infused curriculum and software tools (games, simulations, tutorials, etc.) that was utilized by over 200 K-12 teachers participating in the Game2Learn Lab Research Experience for Teachers (RET). I specifically utilized Python and block-based programming to infuse computational thinking into non-computing courses. The goal of creating these computer science infused curriculums was to improve computer science education accessibility.",
      location: "Raleigh, NC",
      type: "Research",
      hasPoster: false
    }
  ];

  return (
    <main className="professional-experience" sx={{ 
      p: 2, 
      backgroundColor: '#fefefe', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)'
    }}>
      {/* Profile Header */}
      <header>
        <Paper elevation={0} sx={{ 
          p: 4, 
          mb: 4, 
          textAlign: 'left', 
          backgroundColor: 'white',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ 
            fontFamily: '"Newsreader", serif',
            fontWeight: 400,
            fontSize: '3rem',
            color: '#5b8165'
          }}>
            Research Experience
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem',
            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: '#666',
            mb: 2
          }}>
            Research & Development • Machine Learning • Data Science/Visualization
          </Typography>
        </Box>
        </Paper>
      </header>

      {/* Experience Feed */}
      <section aria-label="Research Experience">
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          {experiences.map((experience) => (
            <article key={experience.id}>
              <Card sx={{ 
                mb: 4, 
                borderRadius: '20px', 
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                minHeight: '400px',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
                }
              }}>
            <CardContent sx={{ p: 0, height: '100%' }}>
              {/* Header */}
              <Box sx={{ p: 3, pb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Avatar sx={{ 
                    mr: 2, 
                    background: 'linear-gradient(45deg, #8fbfa3, #5b8165)',
                    width: 56,
                    height: 56,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <Work sx={{ color: '#fff' }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ 
                      fontWeight: 600,
                      fontSize: '1.5rem',
                      color: '#5b8165',
                      textAlign: 'left'
                    }}>
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: '#8fbfa3', 
                      fontWeight: 500,
                      mb: 1,
                      fontSize: '1.1rem',
                      textAlign: 'left'
                    }}>
                      {experience.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 16, color: '#8fbfa3' }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {experience.date}
                      </Typography>
                      <LocationOn sx={{ fontSize: 16, color: '#5b8165' }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {experience.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ mx: 3, opacity: 0.3 }} />

              {/* Content Area - Description and Poster */}
              <Box sx={{ p: 3, pt: 2, display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                {/* Description Column */}
                <Box sx={{ flex: experience.hasPoster ? '1 1 55%' : '1 1 100%' }}>
                  <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                    🛠️ Tools & Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                    {experience.tools.map((tool, i) => (
                      <Chip key={i} label={tool} size="small" variant="outlined"
                        sx={{ borderColor: '#8fbfa3', color: '#5b8165' }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ color: '#333', lineHeight: 1.6 }}>
                    {experience.description}
                  </Typography>
                </Box>

                {/* Poster Column */}
                {experience.hasPoster && (
                  <Box sx={{ 
                    flex: '0 0 60%',
                    p: 2, 
                    backgroundColor: '#f8f9ff', 
                    borderRadius: '16px',
                    border: '1px solid #e8eaff',
                    height: 'fit-content'
                  }}>
                    <Box sx={{ width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                      <Box sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        backgroundColor: '#f8f9fa'
                      }}>
                        {/* PDF Preview */}
                        <Box sx={{ 
                          flex: 1, 
                          position: 'relative',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          border: '1px solid #e0e0e0'
                        }}>
                          {imageErrors[experience.id] ? (
                            <Box sx={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: '#f8f9fa',
                              color: '#666'
                            }}>
                              <Typography variant="body2">
                                Image preview not available
                              </Typography>
                            </Box>
                          ) : (
                            <Box
                              component="img"
                              src={experience.id === 1
                                ? yukonImage
                                : experience.id === 2 
                                ? fsriPoster
                                : experience.id === 3
                                ? seesPoster
                                : fsriPoster
                              }
                              alt={`Research Poster - ${experience.company}`}
                              onError={(e) => {
                                console.error('Image failed to load:', e.target.src, 'for experience:', experience.id);
                                setImageErrors(prev => ({ ...prev, [experience.id]: true }));
                              }}
                              onLoad={() => {
                                console.log('Image loaded successfully for experience:', experience.id);
                              }}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '12px'
                              }}
                            />
                          )}
                        </Box>
                        
                        {/* Action Buttons */}
                        <Box sx={{ 
                          p: 2, 
                          backgroundColor: 'white',
                          borderTop: '1px solid #e0e0e0',
                          display: 'flex', 
                          gap: 2, 
                          justifyContent: 'center',
                          flexWrap: 'wrap'
                        }}>
                          {experience.id === 1 ? (
                            <Button
                              variant="contained"
                              startIcon={<OpenInNew />}
                              href="https://datavis.caltech.edu/"
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ 
                                backgroundColor: '#8fbfa3',
                                '&:hover': { backgroundColor: '#a5b780' }
                              }}
                            >
                              Learn More About Data to Discovery
                            </Button>
                          ) : (
                            <Button
                              variant="outlined"
                              startIcon={<Download />}
                              href={experience.id === 2 
                                ? "/2024 FSRI-Research-Poster_At-the-Core-of-Uranus.pdf"
                                : experience.id === 3
                                ? "/SEES Poster.pdf"
                                : "/2024 FSRI-Research-Poster_At-the-Core-of-Uranus.pdf"
                              }
                              download
                              sx={{ borderColor: '#8fbfa3', color: '#8fbfa3' }}
                            >
                              View PDF
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </CardContent>
              </Card>
            </article>
          ))}
        </Box>
      </section>
    </main>
  );
}

export default ProfessionalExperience;
