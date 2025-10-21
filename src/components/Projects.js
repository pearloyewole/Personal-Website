import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  Divider,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import {
  Work,
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
        sx={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 2 }}
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
        sx={{ width: "100%", height: 300, borderRadius: 2, backgroundColor: "#000", objectFit: "cover" }}
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
        p: 2,
        backgroundColor: "#fefefe",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          textAlign: "left",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
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
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: '"Newsreader", serif',
              fontWeight: 400,
              fontSize: "3rem",
              color: "#5b8165",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.2rem",
              fontFamily:
                '"Inter","SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
              color: "#666",
              mb: 2,
            }}
          >
            Yes, I code for fun. My projects utilize different skills and tools, and I’m always excited to pick up a new stack and see what I can build with it.
          </Typography>
        </Box>
      </Paper>

      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {projects.map((p) => (
          <Card
            key={p.id}
            sx={{
              mb: 4,
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              },
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ p: 3, pb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Avatar
                    sx={{
                      mr: 2,
                      background: "linear-gradient(45deg, #8fbfa3, #5b8165)",
                      width: 56,
                      height: 56,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Work sx={{ color: "#fff" }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      sx={{
                        fontFamily:
                          '"Inter","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
                        fontWeight: 600,
                        fontSize: "1.5rem",
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
                        fontSize: "1.05rem",
                        textAlign: "left",
                      }}
                    >
                      {p.org}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 1,
                        flexWrap: "wrap",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: 16, color: "#8fbfa3" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.9rem",
                            fontFamily: '"Sometype Mono", monospace',
                            color: "#666",
                            textAlign: "left",
                          }}
                        >
                          {p.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: "#5b8165" }} />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.9rem",
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

              <Box sx={{ p: 3, pt: 2 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
                    gap: 3,
                    alignItems: "start",
                  }}
                >
                  <Box>
                    <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {p.tags.map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: "0.8rem",
                            borderRadius: "16px",
                            borderColor: "#8fbfa3",
                            color: "#5b8165",
                            backgroundColor: "rgba(143,191,163,0.1)",
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.6,
                        color: "#333",
                        fontSize: "1.08rem",
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
                            startIcon={action.icon ?? undefined}
                            sx={{
                              textTransform: "none",
                              fontWeight: 600,
                              borderRadius: "999px",
                              px: 2.5,
                              background:
                                "linear-gradient(135deg, #8fbfa3 0%, #5b8165 100%)",
                              "&:hover": { filter: "brightness(0.95)" },
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
                      p: 2,
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
