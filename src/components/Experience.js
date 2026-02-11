import React, { useState } from 'react';
import './Experience.css';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip, 
  Divider,
  Paper,
  Button,
  Tabs,
  Tab
} from '@mui/material';
import { LocationOn, CalendarToday, Download, OpenInNew } from '@mui/icons-material';

// Import images
import fsriPoster from '../assets/fsriposter.png';
import seesPoster from '../assets/seesposter.png';

function Experience() {
  const [imageErrors, setImageErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);

  const industryExperiences = [
    {
      id: 1,
      company: "CrowdStrike",
      title: "Customer Success Automation Intern",
      date: "October 2025 - Present",
      tools: ["Python", "Automation", "APIs", "Testing", "Integration Pipelines"],
      description: "As a Customer Success Automation Intern at CrowdStrike, I collaborate with cross-functional teams to design and implement automation solutions that streamline internal workflows and enhance overall system efficiency. My work focuses on developing and maintaining Python-based automation platforms that improve customer ticket resolution and enable automated presentation generation. I also contribute to extending platform capabilities and integration pipelines by writing robust, testable Python code and expanding functional test coverage, driving measurable improvements in performance, reliability, and scalability across customer success operations.",
      location: "Remote",
      type: "Industry",
      link: "https://www.crowdstrike.com/",
      linkText: "Learn more about CrowdStrike →"
    },
    {
      id: 2,
      company: "Jane Street Capital",
      title: "Software Engineering Fellow",
      date: "June 2025 - August 2025",
      tools: ["OCaml", "ETC Trading", "Game AI", "Graph Algorithms", "Web Scraping"],
      description: "Selected to join a 8-week, in-person summer program with 11 other top fellows nationwide, focusing on developing with OCaml and collaborative engineering practices with full-time engineers. Developed an ETC trading bot capable of trading and converting bonds, ADRs, and ETFs given market information within a simulated exchange. Projects included implementing image manipulation, game AIs, graph traversals, web scraping, website development.",
      location: "New York, NY",
      type: "Industry",
      link: "https://www.janestreet.com/join-jane-street/programs-and-events/jsip/",
      linkText: "Learn more about Jane Street →"
    }
  ];

  const researchExperiences = [
    {
      id: 1,
      company: "Data to Discovery + NASA Jet Propulsion Laboratory",
      title: "Data Visualization Developer",
      date: "March 2025 - Present",
      tools: ["D3.js", "Three.js", "React", "WebGL", "HCI", "Data Visualization"],
      description: "Designing and developing full-stack data visualization software to handle large 3D ADCP and satellite datasets. Creating intuitive user interfaces and interactive visualizations that enable researchers to explore complex scientific data. Implementing backend and computation pipelines to support dataset uploads, cross-section extraction, and fluid shear stress calculations, optimizing performance for interactive exploration. Collaborating with researchers to design and deliver a scientific tool that visualizes river systems in 3D, link hydrodynamic forces to erosion patterns, and generate new insights from Alaskan river datasets.",
      location: "Pasadena, CA",
      type: "Research",
      hasPoster: false,
      hasImage: true,
      link: "https://datavis.caltech.edu/",
      linkText: "Learn More About Data to Discovery",
      bottomButtonText: "Try out the software (coming 2026 spring)"
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
      hasPoster: true,
      pdfLink: "/2024 FSRI-Research-Poster_At-the-Core-of-Uranus.pdf",
      link: "https://ccid.caltech.edu/buildcommunity/signature-programs/fsri",
      linkText: "Learn more about FSRI →"
    },
    {
      id: 3,
      company: "NASA & University of Texas Center for Space Research",
      title: "Research Intern",
      date: "June 2023 - August 2023",
      tools: ["GMTSAR", "Alaska Data", "Python", "NumPy", "Matplotlib", "MATLAB"],
      description: "I conducted this research as 1 of the top 95 students out of 2000 applicants to the STEM Enhancement in Earth Science (SEES) internship program at NASA and the University of Texas Center for Space Research. I utilized MATLAB, Python libraries (NumPy, Matplotlib), and geophysical data processing techniques to create interferograms (images of surface deformation) and analyze satellite data under the guidance of UT Austin assistant professor Dr. Jinyi (Ann) Chen. Presented research poster and abstract at the 2023 American Geophysical Union Fall Meeting Bright Stars Poster Session.",
      location: "Austin, TX",
      type: "Research",
      hasPoster: true,
      pdfLink: "/SEES Poster.pdf"
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

  const allExperiences = [
    ...industryExperiences.map(exp => ({ ...exp, category: 'Industry' })),
    ...researchExperiences.map(exp => ({ ...exp, category: 'Research' }))
  ].sort((a, b) => {
    // Sort by date (most recent first) - simplified sorting
    return new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]);
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const experiencesToShow = activeTab === 0 ? allExperiences : activeTab === 1 ? industryExperiences : researchExperiences;

  return (
    <main className="experience" sx={{ 
      p: { xs: 2, md: 4 }, 
      pt: { xs: 4, md: 6 },
      backgroundColor: '#fefefe', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)'
    }}>
      {/* Profile Header */}
      <header>
        <Paper elevation={0} sx={{ 
          p: { xs: 3, md: 4 }, 
          mb: 4, 
          mx: { xs: 1, md: 2 },
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
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#000000ff',
            mb: 2
          }}>
            Experience
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: '#666',
            mb: 3
          }}>
            Industry & Research • Software Engineering • Machine Learning • Data Visualization
          </Typography>
          
          {/* Tabs */}
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                textTransform: 'none',
                color: '#666',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  color: '#8fbfa3',
                  transform: 'translateY(-2px)'
                },
                '&.Mui-selected': {
                  color: '#5b8165',
                  transform: 'scale(1.05)'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#8fbfa3',
                height: 3,
                borderRadius: '3px 3px 0 0',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }
            }}
          >
            <Tab label="All" />
            <Tab label="Industry" />
            <Tab label="Research" />
          </Tabs>
        </Box>
        </Paper>
      </header>

      {/* Experience Feed */}
      <section aria-label="Experience">
        <Box sx={{ 
          maxWidth: 1400, 
          mx: 'auto', 
          px: { xs: 1, md: 2 },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 2, md: 4 }
        }}>
          {experiencesToShow.map((experience, index) => (
            <article 
              key={`${experience.category}-${experience.id}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <Card sx={{ 
                height: '100%',
                borderRadius: '20px', 
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(143, 191, 163, 0.05) 0%, rgba(91, 129, 101, 0.05) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 0
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 25px 70px rgba(91, 129, 101, 0.2)',
                  '&::before': {
                    opacity: 1
                  }
                },
                '&:hover .card-content': {
                  transform: 'translateY(-2px)'
                }
              }}>
            <CardContent sx={{ p: 0, height: '100%', position: 'relative', zIndex: 1 }} className="card-content">
              {/* Header */}
              <Box sx={{ p: { xs: 2, md: 3 }, pb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'flex-start' }, mb: 2, gap: { xs: 1, sm: 0 } }}>
                  <Box sx={{ flex: 1, width: '100%' }}>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      color: '#5b8165',
                      textAlign: 'left'
                    }}>
                      {experience.company}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: '#8fbfa3', 
                      fontWeight: 500,
                      mb: 1,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      textAlign: 'left'
                    }}>
                      {experience.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, mb: 1, flexWrap: 'wrap' }}>
                      <CalendarToday sx={{ fontSize: { xs: 14, md: 16 }, color: '#8fbfa3' }} />
                      <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                        {experience.date}
                      </Typography>
                      <LocationOn sx={{ fontSize: { xs: 14, md: 16 }, color: '#5b8165' }} />
                      <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                        {experience.location}
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Link Button */}
                  {(experience.link || experience.linkText) && (
                    <a 
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', alignSelf: { xs: 'flex-start', sm: 'flex-start' } }}
                    >
                      <Box sx={{
                        px: { xs: 2, md: 2.5 },
                        py: { xs: 0.75, md: 1 },
                        backgroundColor: '#8fbfa3',
                        color: 'white',
                        borderRadius: '16px',
                        fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: { xs: '0.75rem', md: '0.8rem' },
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: 0,
                          height: 0,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.3)',
                          transform: 'translate(-50%, -50%)',
                          transition: 'width 0.6s, height 0.6s'
                        },
                        '&:hover': {
                          backgroundColor: '#a5b780',
                          transform: 'translateY(-3px) scale(1.05)',
                          boxShadow: '0 8px 20px rgba(91, 129, 101, 0.4)',
                          '&::before': {
                            width: '300px',
                            height: '300px'
                          }
                        },
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        mt: { xs: 1, sm: 0 }
                      }}>
                        {experience.linkText || 'Learn More →'}
                      </Box>
                    </a>
                  )}
                </Box>
              </Box>

              <Divider sx={{ mx: 3, opacity: 0.3 }} />

              {/* Content Area - Description and Poster */}
              <Box sx={{ 
                p: { xs: 2, md: 3 }, 
                pt: 2,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: 2, md: 4 }
              }}>
                {/* Description Column */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1.5, color: '#666', fontSize: { xs: '0.875rem', md: '0.9rem' } }}>
                    Tools & Technologies
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, md: 1.5 }, mb: { xs: 2, md: 3 } }}>
                    {experience.tools.map((tool, i) => (
                      <Chip 
                        key={i} 
                        label={tool} 
                        size="small" 
                        variant="outlined"
                        sx={{ 
                          borderColor: '#8fbfa3', 
                          color: '#5b8165',
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          height: { xs: 24, md: 28 },
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          animation: `chipFadeIn 0.5s ease-out ${i * 0.05 + 0.3}s both`,
                          '&:hover': {
                            transform: 'translateY(-2px) scale(1.1)',
                            backgroundColor: 'rgba(143, 191, 163, 0.1)',
                            borderColor: '#5b8165',
                            boxShadow: '0 4px 12px rgba(91, 129, 101, 0.2)'
                          }
                        }} 
                      />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ 
                    color: '#333', 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}>
                    {experience.description}
                  </Typography>
                </Box>

                {/* Image/Poster Column */}
                {(experience.hasPoster || experience.hasImage) && (
                  <Box sx={{ 
                    p: { xs: 1.5, md: 2 }, 
                    backgroundColor: '#f8f9ff', 
                    borderRadius: '16px',
                    border: '1px solid #e8eaff',
                    height: 'fit-content',
                    mt: 'auto'
                  }}>
                    <Box sx={{ width: '100%', height: { xs: '250px', sm: '300px', md: '400px' }, borderRadius: '12px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
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
                          {imageErrors[`${experience.category}-${experience.id}`] ? (
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
                              src={
                                experience.hasImage && experience.company.includes("Data to Discovery")
                                  ? "/image.png"
                                  : experience.company.includes("California Institute of Technology")
                                  ? fsriPoster
                                  : experience.company.includes("NASA")
                                  ? seesPoster
                                  : fsriPoster
                              }
                              alt={experience.hasImage ? `Data Visualization - ${experience.company}` : `Research Poster - ${experience.company}`}
                              onError={(e) => {
                                console.error('Image failed to load:', e.target.src, 'for experience:', `${experience.category}-${experience.id}`);
                                setImageErrors(prev => ({ ...prev, [`${experience.category}-${experience.id}`]: true }));
                              }}
                              onLoad={() => {
                                console.log('Image loaded successfully for experience:', `${experience.category}-${experience.id}`);
                              }}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                borderRadius: '12px',
                                backgroundColor: experience.hasImage && experience.company.includes("Data to Discovery") ? '#000' : 'transparent'
                              }}
                            />
                          )}
                        </Box>
                        
                        {/* Action Buttons */}
                        <Box sx={{ 
                          p: { xs: 1.5, md: 2 }, 
                          backgroundColor: 'white',
                          borderTop: '1px solid #e0e0e0',
                          display: 'flex', 
                          gap: { xs: 1, md: 2 }, 
                          justifyContent: 'center',
                          flexWrap: 'wrap'
                        }}>
                          {experience.link && experience.hasImage ? (
                            <Button
                              variant="contained"
                              startIcon={<OpenInNew sx={{ fontSize: { xs: 16, md: 20 } }} />}
                              href={experience.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{ 
                                backgroundColor: '#8fbfa3',
                                '&:hover': { backgroundColor: '#a5b780' },
                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                                px: { xs: 1.5, md: 2 },
                                py: { xs: 0.75, md: 1 }
                              }}
                            >
                              {experience.bottomButtonText || experience.linkText || 'Learn More'}
                            </Button>
                          ) : experience.pdfLink ? (
                            <Button
                              variant="outlined"
                              startIcon={<Download />}
                              href={experience.pdfLink}
                              download
                              sx={{ borderColor: '#8fbfa3', color: '#8fbfa3' }}
                            >
                              View PDF
                            </Button>
                          ) : null}
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

export default Experience;
