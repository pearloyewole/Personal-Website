import React from 'react';
import './IndustryExperience.css';
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

function IndustryExperience() {
  const experiences = [
    {
      id: 1,
      company: "Data to Discovery + NASA Jet Propulsion Laboratory",
      title: "Data Visualization Tools Engineer",
      date: "March 2025 - Present",
      tools: ["D3.js", "Three.js", "React", "WebGL", "HCI", "Data Visualization"],
      description: "Building data visualization tools for NASA JPL's OCO-3 mission to enable researchers to visualize from spaceborne SAM observations. Developed scalable, HCI-driven visualization interfaces using D3.js, Three.js, React, and WebGL for scientific and policy-facing applications. Created 2D/3D simulations to map emissions and productivity across cities, volcanoes, and ecological zones.",
      location: "Pasadena, CA",
    },
    {
      id: 2,
      company: "Jane Street Capital",
      title: "Software Engineering Fellow",
      date: "June 2025 - August 2025",
      tools: ["OCaml", "Trading Systems", "ETC Trading", "Game AI", "Graph Algorithms", "Web Scraping"],
      description: "Selected to join a 8-week, in-person summer program with 11 other top fellows nationwide, focusing on developing with OCaml and collaborative engineering practices with full-time engineers. Developed an ETC trading bot capable of trading and converting bonds, ADRs, and ETFs given market information within a simulated exchange. Projects included implementing image manipulation, game AIs, graph traversals, web scraping, website development.",
      location: "New York, NY",
    }
  ];

  return (
    <Box className="industry-experience" sx={{ 
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
            Industry Experience
          </Typography>
          <Typography variant="body1" sx={{ 
            fontSize: '1.2rem',
            fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: '#666',
            mb: 2
          }}>
            Data Visualization • Software Engineering • Trading Systems • HCI
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
                2
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Internships
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
                10+
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
                Companies
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
                      : 'linear-gradient(45deg, #5b8165, #8fbfa3)',
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
                          fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                          fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          color: '#666',
                          textAlign: 'left'
                        }}>
                          {experience.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Company Link Button */}
                  <a 
                    href={experience.id === 1 
                      ? "https://datavis.caltech.edu/" 
                      : "https://www.janestreet.com/join-jane-street/programs-and-events/jsip/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Box sx={{
                      px: 2.5,
                      py: 1,
                      backgroundColor: '#8fbfa3',
                      color: 'white',
                      borderRadius: '16px',
                      fontFamily: '"Inter", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#5b8165',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      },
                      display: 'inline-block',
                      whiteSpace: 'nowrap'
                    }}>
                      {experience.id === 1 ? 'Learn more about Data to Discovery →' : 'Learn more about Jane Street →'}
                    </Box>
                  </a>
                </Box>
              </Box>

              <Divider sx={{ mx: 3, opacity: 0.3 }} />

              {/* Content Area */}
              <Box sx={{ p: 3, pt: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            </CardContent>

            {/* Interactive Actions */}
            <CardActions sx={{ 
              px: 3, 
              pb: 3, 
              pt: 1,
              borderTop: '1px solid #f0f0f0'
            }}>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default IndustryExperience; 