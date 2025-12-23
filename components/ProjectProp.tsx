type Project = {
  _id: string;
  projectName: string;
  description: string;
  startDate: string;
  endDate?: string;
  deploymentLink?: string;
  githubLink: string;
};

type ProjectPropProps = {
  project: Project;
};

export default function ProjectProp({ project }: ProjectPropProps) {
  return (
    <section>
      <h2>{project.projectName}</h2>


      <p>{project.description}</p>

      <p>
        {project.startDate} – {project.endDate ?? 'Present'}
      </p>

      {project.deploymentLink && (
        <p>
          <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </p>
      )}

      <p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}
