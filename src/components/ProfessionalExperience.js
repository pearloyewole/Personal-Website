import React, { StrictMode } from 'react';
import './ProfessionalExperience.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Avatar, 
  Typography, 
  Box, 
  Chip, 
  IconButton, 
  Divider,
  Paper
} from '@mui/material';
import { 
  Work, 
  LocationOn, 
  CalendarToday, 
  Favorite,
  ChatBubbleOutline,
  IosShare
} from '@mui/icons-material';

function ProfessionalExperience() {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const experiences = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    <Box className="professional-experience" sx={{ 
      p: 2, 
      backgroundColor: '#fefefe', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)'
    }}>
      {/* Profile Header */}
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
        {/* Background decoration */}
        <Box sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: 60,
          height: 60,
          background: 'linear-gradient(135deg, rgba(143, 191, 163, 0.08) 0%, rgba(91, 129, 101, 0.08) 100%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          width: 50,
          height: 50,
          background: 'linear-gradient(135deg, rgba(91, 129, 101, 0.08) 0%, rgba(143, 191, 163, 0.08) 100%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
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
          
          {/* Stats section */}
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            mt: 3,
            flexWrap: 'wrap'
          }}>
            <Box sx={{
              px: 3,
              py: 2,
              backgroundColor: 'rgba(143, 191, 163, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(143, 191, 163, 0.2)',
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <Typography variant="h6" sx={{ 
                color: '#5b8165', 
                fontWeight: 600,
                mb: 0.5
              }}>
                3
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Research Positions
              </Typography>
            </Box>
            <Box sx={{
              px: 3,
              py: 2,
              backgroundColor: 'rgba(91, 129, 101, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(91, 129, 101, 0.2)',
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <Typography variant="h6" sx={{ 
                color: '#5b8165', 
                fontWeight: 600,
                mb: 0.5
              }}>
                15+
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Technologies
              </Typography>
            </Box>
            <Box sx={{
              px: 3,
              py: 2,
              backgroundColor: 'rgba(143, 191, 163, 0.1)',
              borderRadius: '16px',
              border: '1px solid rgba(143, 191, 163, 0.2)',
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <Typography variant="h6" sx={{ 
                color: '#5b8165', 
                fontWeight: 600,
                mb: 0.5
              }}>
                2
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Research Posters
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>

      {/* Experience Feed */}
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        {experiences.map((experience, index) => (
          <Card key={experience.id} sx={{ 
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
                    backgroundColor: 'transparent',
                    background: experience.id === 1 
                      ? 'linear-gradient(45deg, #8fbfa3, #5b8165)'
                      : experience.id === 2
                      ? 'linear-gradient(45deg, #5b8165, #8fbfa3)'
                      : 'linear-gradient(45deg, #8fbfa3, #5b8165)',
                    width: 56,
                    height: 56,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <Work sx={{ color: '#fff' }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ 
                      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                      fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: '1.1rem',
                      textAlign: 'left'
                    }}>
                      {experience.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: 16, color: '#8fbfa3' }} />
                        <Typography variant="body2" sx={{ 
                          fontSize: '0.9rem',
                          fontFamily: '"Sometype Mono", monospace',
                          color: '#666',
                          textAlign: 'left'
                        }}>
                          {experience.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: '#5b8165' }} />
                        <Typography variant="body2" sx={{ 
                          fontSize: '0.9rem',
                          fontFamily: '"Sometype Mono", monospace',
                          color: '#666',
                          textAlign: 'left'
                        }}>
                          {experience.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ mx: 3, opacity: 0.3 }} />

              {/* Content Area - Description and Poster side by side */}
              <Box sx={{ p: 3, pt: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                  {/* Description Column */}
                  <Box sx={{ flex: experience.hasPoster ? '1 1 55%' : '1 1 100%' }}>
                    {/* Tools */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="body2" gutterBottom sx={{ 
                        fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontWeight: 500,
                        mb: 2,
                        color: '#666',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}>
                        🛠️ Tools & Technologies
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1.5, 
                        mb: 3,
                        p: 2,
                        backgroundColor: 'rgba(143, 191, 163, 0.05)',
                        borderRadius: '16px',
                        border: '1px solid rgba(143, 191, 163, 0.1)'
                      }}>
                        {experience.tools.map((tool, toolIndex) => (
                          <Chip 
                            key={toolIndex} 
                            label={tool} 
                            size="small" 
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.8rem',
                              borderRadius: '16px',
                              borderColor: '#8fbfa3',
                              color: '#5b8165',
                              fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                              backgroundColor: 'rgba(143, 191, 163, 0.1)',
                              '&:hover': {
                                borderColor: '#5b8165',
                                color: '#5b8165',
                                backgroundColor: 'rgba(91, 129, 101, 0.15)',
                                transform: 'translateY(-1px)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                              },
                              transition: 'all 0.2s ease'
                            }}
                          />
                        ))}
                      </Box>

                      {/* Description */}
                      <Typography variant="body1" paragraph sx={{ 
                        lineHeight: 1.5,
                        color: '#333',
                        fontSize: '1.1rem',
                        fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontWeight: 400,
                        textAlign: 'left'
                      }}>
                        {experience.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Poster Column - only show if hasPoster is true */}
                  {experience.hasPoster && (
                    <Box sx={{ 
                      flex: '0 0 40%',
                      p: 2, 
                      backgroundColor: '#f8f9ff', 
                      borderRadius: '16px',
                      border: '1px solid #e8eaff',
                      height: 'fit-content'
                    }}>
                      <Typography variant="h6" gutterBottom sx={{ 
                        fontFamily: '"Newsreader", serif',
                        fontWeight: 400,
                        color: '#5b8165',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 2,
                        fontSize: '1.3rem'
                      }}>
                        Research Poster
                      </Typography>
                      <Typography variant="body2" paragraph sx={{ 
                        mb: 2,
                        fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        color: '#666',
                        fontSize: '0.9rem'
                      }}>
                        {experience.id === 1 
                          ? "View my research poster from the Caltech FSRI program"
                          : "View my research poster from the NASA SEES internship program"
                        }
                      </Typography>
                      <Box sx={{ 
                        width: '100%',
                        height: '300px',
                        borderRadius: '12px',
                        overflow: 'visible',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#fff'
                      }}>
                        <div className="pdf-viewer" style={{ 
                          height: '100%',
                          width: '100%'
                        }}>
                          <StrictMode>
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                              <Viewer 
                                fileUrl={experience.id === 1 
                                  ? "/2024 FSRI-Research-Poster_At-the-Core-of-Uranus.pdf"
                                  : "/SEES Poster.pdf"
                                }
                                plugins={[defaultLayoutPluginInstance]}
                                style={{ height: '100%', width: '100%' }}
                              />
                            </Worker>
                          </StrictMode>
                        </div>
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </CardContent>

            {/* Interactive Actions */}
            <CardActions sx={{ 
              px: 3, 
              pb: 3, 
              pt: 1,
              borderTop: '1px solid #f0f0f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton size="small" sx={{ 
                    color: '#8fbfa3',
                    '&:hover': { 
                      backgroundColor: 'rgba(143, 191, 163, 0.1)',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s ease'
                  }}>
                    <Favorite />
                  </IconButton>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 500,
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    {experience.likes}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <IconButton size="small" sx={{ 
                    color: '#5b8165',
                    '&:hover': { 
                      backgroundColor: 'rgba(91, 129, 101, 0.1)',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.2s ease'
                  }}>
                    <ChatBubbleOutline />
                  </IconButton>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 500,
                    fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    {experience.comments}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton size="small" sx={{ 
                  color: '#8fbfa3',
                  '&:hover': { 
                    backgroundColor: 'rgba(143, 191, 163, 0.1)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.2s ease'
                }}>
                  <IosShare />
                </IconButton>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ProfessionalExperience; 