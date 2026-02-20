import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import './ProjectNodeMap.css';

// Node component for tools and projects
function Node({ position, label, type, color, onClick, isHovered }) {
  const meshRef = useRef();
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Scale on hover (no rotation)
      const targetScale = (hover || isHovered) ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const nodeColor = hover || isHovered ? '#cbe9d8' : color;
  const size = type === 'project' ? 0.4 : 0.25;
  const textColor = 'rgb(47, 53, 49)'; 

  return (
    <group position={position} ref={meshRef}>
      <Sphere
        args={[size, 32, 32]}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
      >
        <meshStandardMaterial
          color={nodeColor}
          emissive={nodeColor}
          emissiveIntensity={hover || isHovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      <Text
        position={[0, size+0.3, 0]}
        fontSize={0.12}
        color={textColor}
        anchorX="center"
        anchorY="middle"
        maxWidth={5.5}
        outlineOpacity={0.9}
      >
        {label}
      </Text>
    </group>
  );
}

// Connection line between nodes
function Connection({ start, end, color }) {
  const points = useMemo(() => [start, end], [start, end]);
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      dashed={false}
      opacity={0.3}
      transparent
    />
  );
}

// Main 3D scene component
function Scene({ projects, onNodeClick }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  
  // Extract all unique tools/tags
  const allTools = useMemo(() => {
    const toolSet = new Set();
    projects.forEach(project => {
      // Support both 'tags' and 'tools' properties
      const tags = project.tags || project.tools || [];
      if (Array.isArray(tags)) {
        tags.forEach(tag => {
          // Clean up tag names (remove commas, extra spaces)
          const cleanTag = tag.toString().trim().replace(/,$/, '');
          if (cleanTag) toolSet.add(cleanTag);
        });
      }
    });
    return Array.from(toolSet);
  }, [projects]);

  // Generate node positions using spherical distribution
  const nodePositions = useMemo(() => {
    const positions = {};
    const radius = 3;
    
    // Position projects
    projects.forEach((project, i) => {
      const angle = (i / projects.length) * Math.PI * 2;
      const y = (i / projects.length - 0.5) * 2;
      positions[`project-${project.id}`] = [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      ];
    });
    
    // Position tools in a different layer
    allTools.forEach((tool, i) => {
      const angle = (i / allTools.length) * Math.PI * 2;
      const y = (i / allTools.length - 0.5) * 1.5;
      positions[`tool-${tool}`] = [
        Math.cos(angle) * (radius + 1.5),
        y * 0.8,
        Math.sin(angle) * (radius + 1.5)
      ];
    });
    
    return positions;
  }, [projects, allTools]);

  // Generate connections
  const connections = useMemo(() => {
    const conns = [];
    projects.forEach(project => {
      const tags = project.tags || project.tools || [];
      if (Array.isArray(tags)) {
        tags.forEach(tool => {
          const cleanTool = tool.toString().trim().replace(/,$/, '');
          const start = nodePositions[`project-${project.id}`];
          const end = nodePositions[`tool-${cleanTool}`];
          if (start && end) {
            conns.push({
              start,
              end,
              projectId: project.id,
              tool: cleanTool
            });
          }
        });
      }
    });
    return conns;
  }, [nodePositions, projects]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8fbfa3" />
      
      {/* Render project nodes */}
      {projects.map(project => {
        const pos = nodePositions[`project-${project.id}`];
        if (!pos) return null;
        return (
          <Node
            key={`project-${project.id}`}
            position={pos}
            label={project.title}
            type="project"
            color="#cbe9d8"
            onClick={() => onNodeClick && onNodeClick(project)}
            isHovered={hoveredNode === `project-${project.id}`}
          />
        );
      })}
      
      {/* Render tool nodes */}
      {allTools.map(tool => {
        const pos = nodePositions[`tool-${tool}`];
        if (!pos) return null;
        return (
          <Node
            key={`tool-${tool}`}
            position={pos}
            label={tool}
            type="tool"
            color="#d4e8dd"
            onClick={() => setHoveredNode(`tool-${tool}`)}
            isHovered={hoveredNode === `tool-${tool}`}
          />
        );
      })}
      
      {/* Render connections */}
      {connections.map((conn, i) => (
        <Connection
          key={`conn-${i}`}
          start={conn.start}
          end={conn.end}
          color={hoveredNode && (hoveredNode.includes(conn.tool) || hoveredNode.includes(`project-${conn.projectId}`)) 
            ? "#cbe9d8" 
            : "#d4e8dd"}
        />
      ))}
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={8}
        maxDistance={25}
        autoRotate={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default function ProjectNodeMap({ projects, onNodeClick, embedded = false }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!projects || projects.length === 0) return null;

  if (embedded) {
    return (
      <div className="node-map-container embedded">
        <div className="node-map-canvas embedded">
          <Canvas
            camera={{ position: [0, 15, 0], fov: 50, zoom: 0.75 }}
            style={{ background: 'transparent' }}
          >
            <Scene projects={projects} onNodeClick={onNodeClick} />
          </Canvas>
          <div className="node-map-hint">
            <p>drag me around • click project nodes to explore</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="node-map-container">
      <div className="node-map-controls">
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="toggle-button"
        >
          {isVisible ? 'Hide' : 'Show'} 3D Map
        </button>
        <div className="node-map-legend">
          <div className="legend-item">
            <span className="legend-dot project-dot"></span>
            <span>Projects</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot tool-dot"></span>
            <span>Tools</span>
          </div>
        </div>
      </div>
      
      {isVisible && (
        <div className="node-map-canvas">
          <Canvas
            camera={{ position: [0, 15, 0], fov: 50, zoom: 0.75 }}
            style={{ background: 'linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%)' }}
          >
            <Scene projects={projects} onNodeClick={onNodeClick} />
          </Canvas>
        </div>
      )}
      
      <div className="node-map-instructions">
        <p>🖱️ Drag to rotate • Scroll to zoom • Click nodes to explore</p>
      </div>
    </div>
  );
}

