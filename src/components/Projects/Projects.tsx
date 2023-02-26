import ProjectCard from "./ProjectCard";
import "./Projects.css";
import projects from "../../data/projects.json";
import { ReactElement } from "react";

export default function Projects(): ReactElement {
  return (
    <div className='Projects' id='Projects'>
      <h1>Projects</h1>
      <div className='flexWrap'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.href}
            backgroundColor={project.backgroundColor}
            symbol={project.symbol}
            title={project.title}
            description={project.description}
            technicalSkills={project.technicalSkills}
          />
        ))}
      </div>
    </div>
  );
}
