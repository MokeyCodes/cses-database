'use client';

import { useEffect, useState } from 'react';
import ProjectProp from '../../components/ProjectProp';

type Project = {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  deploymentLink?: string;
  githubLink: string;
};

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/project');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectProp
          key={project._id}
          project={project}
        />
      ))}
    </main>
  );
}
