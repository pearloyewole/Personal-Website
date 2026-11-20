import { useMemo, useState } from 'react';
import './ProjectNodeMap.css';

export default function ProjectNodeMap({ projects }) {
  const [query, setQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = useMemo(() => {
    const projectsBySkill = new Map();
    for (const project of projects) {
      for (const skill of new Set(project.tags)) {
        if (!projectsBySkill.has(skill)) projectsBySkill.set(skill, []);
        projectsBySkill.get(skill).push(project);
      }
    }

    return [...projectsBySkill.entries()].sort(([nameA, projectsA], [nameB, projectsB]) => (
      projectsB.length - projectsA.length || nameA.localeCompare(nameB)
    ));
  }, [projects]);

  const normalizedQuery = query.trim().toLowerCase();
  const matches = skills.filter(([skill]) => skill.toLowerCase().includes(normalizedQuery));
  const [activeSkill, relatedProjects] = matches.find(([skill]) => skill === selectedSkill) ?? matches[0] ?? [];

  if (skills.length === 0) return null;

  return (
    <section className="project-map" aria-labelledby="project-map-title">
      <h2 id="project-map-title">Projects by skill</h2>

      <div className="project-map-grid">
        <div className="project-map-picker">
          <label htmlFor="project-map-search">Find a skill</label>
          <input
            id="project-map-search"
            type="search"
            placeholder="Python, React, SQL"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ul className="project-map-skills" aria-label="Skills">
            {matches.map(([skill, skillProjects]) => (
              <li key={skill}>
                <button
                  type="button"
                  aria-pressed={activeSkill === skill}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <span>{skill}</span>
                  <span className="project-map-count" aria-hidden="true">{skillProjects.length}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="project-map-results">
          {activeSkill ? (
            <>
              <div className="project-map-selection">
                <h3>{activeSkill}</h3>
                <p role="status">
                  {relatedProjects.length} {relatedProjects.length === 1 ? 'project' : 'projects'}
                </p>
              </div>
              <ul className="project-map-projects" aria-label={`Projects using ${activeSkill}`}>
                {relatedProjects.map((project) => (
                  <li key={project.id}>
                    <a href={`#project-${project.id}`}>{project.mapLabel ?? project.title}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p role="status">No skills match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
}
