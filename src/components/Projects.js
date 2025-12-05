import React, { useState } from "react";
import "./Projects.css";
import ProjectNodeMap from "./ProjectNodeMap";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import {
  CalendarToday,
  LocationOn,
  PlayCircle,
  Code,
  Language,
} from "@mui/icons-material";

// Import all media files
import edenDemo from '../assets/eden-demo.mp4';
import edenPoster from '../assets/eden.png';
import soroImage from '../assets/soro.png';
import bsuWebsite from '../assets/bsu-website.png';
import pcCity from '../assets/pc_city.png';
import sortWise from '../assets/sort_wise.png';
import flappyJoyride from '../assets/flappy_joyride.mp4';
import flappyPoster from '../assets/flappy-joyride.png';

function Media({ mediaType, mediaUrl, poster, alt = "Project media" }) {
  if (!mediaType || !mediaUrl) return null;
  if (mediaType === "image") {
    return (
      <Box
        component="img"
        src={mediaUrl}
        alt={alt}
        sx={{ width: "100%", height: { xs: 200, sm: 250, md: 300 }, objectFit: "cover", borderRadius: 2 }}
      />
    );
  }
  if (mediaType === "video") {
    return (
      <Box
        component="video"
        src={mediaUrl}
        poster={poster}
        controls
        sx={{ width: "100%", height: { xs: 200, sm: 250, md: 300 }, borderRadius: 2, backgroundColor: "#000", objectFit: "cover" }}
      />
    );
  }
  if (mediaType === "embed") {
    return (
      <Box sx={{ position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 2, overflow: "hidden", backgroundColor: "#000" }}>
        <Box
          component="iframe"
          src={mediaUrl}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        />
      </Box>
    );
  }
  return null;
}

export default function Projects() {
  const projects = [
     {
      id: 6,
      title: "Eden: AI Sustainability Tracker Chrome Extension for Claude.ai",
      org: "HackMIT 2025",
      date: "September 2025",
      location: "Cambridge, MA",
      tags: ["JSON", "React", "Typescript", "Claude API", "FastAPI", "Render", "PostgreSQL", "Git", "Figma", "CORs & origins" ],
      description: "Eden is a Chrome extension for claude.ai that monitors user's AI conversations and analyzes the environmental impact, shares better prompt engineering practices, and encourages users to think about AI sustainability.", 
      mediaType: "video",
      mediaUrl: edenDemo,
      poster: edenPoster,
      cta: [{ label: "GitHub", href: "https://github.com/lidiann/HackMIT2025", icon: <Code /> }, 
        {label: "Pitch Deck", href: "https://www.canva.com/design/DAGy7gCmidM/uAykTP6-pMAfoC0CreVSwg/view?utm_content=DAGy7gCmidM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0a1d6c5647", icon: <Language />}
      ],
    },
    {
      id: 0,
      title: "Soro - Yoruba Learning App",
      org: "Solo Developer",
      date: "Present",
      location: "Houston, TX",
      tags: ["XCode, React Native", "Expo", "TypeScript", "Firebase", "Git", "Figma"],
      description:
        "Designed and built a mobile app that helps learners practice Yoruba vocabulary, phrases, and pronunciation with a clean, focused experience. Integrated Firebase for auth and data, configured EAS builds, and prepared App Store distribution. This project taught me a lot about error handling and creating products that real users will interact with. I spent hours recreating crashes or bugs that would only occur in certain Testflights. Very fun to build and I update it regularly.",
      mediaType: "image",
      mediaUrl: soroImage, 
      poster: "",
      cta: [
        {
          label: "Download on the App Store",
          href: "https://apps.apple.com/app/6752268695",
          icon: <Language />,
        },
      ],
    },
    {
      id: 1,
      title: "Caltech BSU Website",
      org: "California Institute of Technology",
      date: "Present",
      location: "Pasadena, CA",
      tags: ["React.js", "Next.js", "Typescript", "HTML/CSS", "Supabase", "SMTP", "SQL", "Git", "Figma"],
      description:
        "Redesigned a legacy club website and rebuilt it in React + Typescript to meet the growing needs of the Black Student Union. Implemented Supabase auth and a database to centralize member and alumni information and resumes.",
      mediaType: "image",
      mediaUrl: bsuWebsite,
      poster: "",
      cta: [{ label: "View Site", href: "https://caltech-bsu.vercel.app/", icon: <Language /> }],
    },
    {
      id: 2,
      title: "PC City: City Simulation Game",
      org: "Jane Street Immersion Program",
      date: "August 2025",
      location: "New York, NY",
      tags: ["OCaml", "Bonsai", "HTML/CSS", "JavaScript", "Git", "Figma"],
      description:
        "PC City is a city-building simulation game built using OCaml, with the Bonsai framework for reactive UI development in the browser. This game  combines functional programming, interactive web interfaces, complex logic engines, and real-time game state management.",
      mediaType: "image",
      mediaUrl: pcCity,
      cta: [
        { label: "Play Game", href: "https://pearloyewole.github.io/pc_city-play/", icon: <PlayCircle /> },
        { label: "GitHub", href: "https://github.com/christineogo/PC_city", icon: <Code /> },
      ],
    },
    {
      id: 3,
      title: "SortWise",
      org: "Hackathon Project",
      date: "July 2025",
      location: "Remote",
      tags: ["React.js", "Vite.js", "HTML/CSS", "Python,", "Tensorflow", "Scikit-learn", "Pandas", "Jupyter Notebook", "Git", "FastAPI", "Figma"],
      description:
        "SortWise is a web application that uses a 90% accurate custom-trained machine learning model built with TensorFlow to classify images of waste into categories like plastic, paper, or metal. Built with React and connected to a FastAPI backend, it guides users on how to dispose of trash responsibly.",
      mediaType: "image",
      mediaUrl: sortWise,
      cta: [
        { label: "Try it out", href: "https://sort-wise.vercel.app/", icon: <PlayCircle /> },
        { label: "GitHub", href: "https://github.com/pearloyewole/SortWise", icon: <Code /> },
      ],
    },
    {
      id: 4,
      title: "Flappy Joyride: Physics Engine Game",
      org: "Introduction to Software Design (CS 3) Final Project",
      date: "June 2025",
      location: "Pasadena, CA ",
      tags: ["C (Programming Language)", "SDL", " HTTP servers", "POSIX Sockets"],
      description:
        "Developed a 2D side-scrolling physics engine game in C with SDL, implementing player movement, gravity, collision detection, power-ups, AI enemies, and a survival-time scoring system. Additionally, created a lightweight HTTP web server in C to support the web functionality of the game.",
      mediaType: "video",
      mediaUrl: flappyJoyride,
      poster: flappyPoster,
      cta: [{ label: "GitHub", href: "https://github.com/pearloyewole/flappy-joyride", icon: <Code /> }],
    },
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        pt: { xs: 4, md: 6 },
        backgroundColor: "#fefefe",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          mx: { xs: 1, md: 2 },
          textAlign: "left",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "none",
          border: "none",
          backdropFilter: "blur(10px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 60,
            height: 60,
            background:
              "linear-gradient(135deg, rgba(143, 191, 163, 0.08) 0%, rgba(91, 129, 101, 0.08) 100%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 50,
            height: 50,
            background:
              "linear-gradient(135deg, rgba(91, 129, 101, 0.08) 0%, rgba(143, 191, 163, 0.08) 100%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 3, md: 4 },
            alignItems: 'center'
          }}>
            {/* Text Content */}
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontFamily: '"Newsreader", serif',
                  fontWeight: 400,
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "#5b8165",
                  mb: 2,
                }}
              >
                Projects
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  fontFamily:
                    '"Inter","SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                  color: "#666",
                  mb: 2,
                  whiteSpace: 'pre-line',
                }}
              >
                Yes, I code for fun. My projects utilize different skills and tools, and I'm always excited to pick up a new stack and see what I can build with it.{'\n\n'}Explore my projects and the tools I have used to build them!
              </Typography>
            </Box>

            {/* 3D Node Map - Embedded */}
            <Box sx={{ 
              height: { xs: '300px', md: '400px', lg: '450px' },
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              backgroundColor: 'transparent'
            }}>
              <ProjectNodeMap 
                projects={projects}
                embedded={true}
                onNodeClick={(project) => {
                  // Scroll to the project card
                  const element = document.getElementById(`project-${project.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Highlight the card briefly
                    element.style.animation = 'highlight 1s ease-out';
                    setTimeout(() => {
                      element.style.animation = '';
                    }, 1000);
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>

      <Box sx={{ 
        maxWidth: 1400, 
        mx: "auto", 
        px: { xs: 1, md: 2 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: 2, md: 4 }
      }}>
        {projects.map((p, index) => (
          <Card
            key={p.id}
            id={`project-${p.id}`}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
            sx={{
              height: '100%',
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
              "&:hover": {
                transform: "translateY(-8px) scale(1.02)",
                boxShadow: "0 25px 70px rgba(91, 129, 101, 0.2)",
                '&::before': {
                  opacity: 1
                }
              },
              "&:hover .project-content": {
                transform: "translateY(-2px)"
              }
            }}
          >
            <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }} className="project-content">
              <Box sx={{ p: { xs: 2, md: 3 }, pb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      sx={{
                        fontFamily:
                          '"Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: "1.2rem", md: "1.5rem" },
                        color: "#5b8165",
                        textAlign: "left",
                      }}
                    >
                      {p.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#8fbfa3",
                        fontWeight: 500,
                        mb: 1,
                        fontFamily:
                          '"Inter","SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        textAlign: "left",
                      }}
                    >
                      {p.org}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1, md: 2 },
                        mb: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: { xs: 14, md: 16 }, color: "#8fbfa3" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            fontFamily: '"Sometype Mono", monospace',
                            color: "#666",
                            textAlign: "left",
                          }}
                        >
                          {p.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: { xs: 14, md: 16 }, color: "#5b8165" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                            fontFamily: '"Sometype Mono", monospace',
                            color: "#666",
                            textAlign: "left",
                          }}
                        >
                          {p.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ mx: 3, opacity: 0.3 }} />

              <Box sx={{ p: { xs: 2, md: 3 }, pt: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                    gap: { xs: 2, md: 3 },
                    alignItems: "start",
                    flex: 1
                  }}
                >
                  <Box>
                    <Box sx={{ mb: { xs: 1.5, md: 2 }, display: "flex", flexWrap: "wrap", gap: { xs: 0.75, md: 1 } }}>
                      {p.tags.map((t, i) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          variant="outlined"
                          style={{
                            animation: `chipFadeIn 0.5s ease-out ${i * 0.05 + 0.3}s both`
                          }}
                          sx={{
                            fontSize: { xs: "0.7rem", md: "0.8rem" },
                            borderRadius: "16px",
                            borderColor: "#8fbfa3",
                            color: "#5b8165",
                            backgroundColor: "rgba(143,191,163,0.1)",
                            height: { xs: 24, md: 28 },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              transform: 'translateY(-2px) scale(1.1)',
                              backgroundColor: 'rgba(143, 191, 163, 0.2)',
                              borderColor: '#5b8165',
                              boxShadow: '0 4px 12px rgba(91, 129, 101, 0.2)'
                            }
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        color: "#333",
                        fontSize: { xs: "0.9rem", md: "1.08rem" },
                        fontFamily:
                          '"Inter","SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                        textAlign: "left",
                      }}
                    >
                      {p.description}
                    </Typography>

                    {Array.isArray(p.cta) && p.cta.length > 0 && (
                      <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: "wrap" }}>
                        {p.cta.map((action, i) => (
                          <Button
                            key={i}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            size="medium"
                            startIcon={action.icon ? <Box sx={{ fontSize: { xs: 16, md: 20 } }}>{action.icon}</Box> : undefined}
                            sx={{
                              textTransform: "none",
                              fontWeight: 600,
                              borderRadius: "999px",
                              px: { xs: 1.5, md: 2.5 },
                              py: { xs: 0.75, md: 1 },
                              fontSize: { xs: "0.75rem", md: "0.875rem" },
                              background:
                                "linear-gradient(135deg, #8fbfa3 0%, #5b8165 100%)",
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
                              "&:hover": { 
                                filter: "brightness(1.1)",
                                transform: 'translateY(-2px) scale(1.05)',
                                boxShadow: '0 8px 20px rgba(91, 129, 101, 0.4)',
                                '&::before': {
                                  width: '300px',
                                  height: '300px'
                                }
                              },
                            }}
                          >
                            {action.label}
                          </Button>
                        ))}
                      </Stack>
                    )}
                  </Box>

                  <Box
                    sx={{
                      p: { xs: 1.5, md: 2 },
                      backgroundColor: "#f8f9ff",
                      borderRadius: "16px",
                      border: "1px solid #e8eaff",
                    }}
                  >
                    <Media
                      mediaType={p.mediaType}
                      mediaUrl={p.mediaUrl}
                      poster={p.poster}
                      alt={p.title}
                    />
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
