import React from 'react'
import Project from './Project'

const Projects = props => {
  return (
    <div className="projects-container">
      {props.projects.map(project => (
        <Project 
          key={project.name}
          name={project.name}
          description={project.description}
          demoLink={project.demoLink}
          sourceCodeLink={project.sourceCodeLink}
          imageName={project.imageName}
          skills={project.skills}
        />
      ))}
    </div>
  )
}

export default Projects