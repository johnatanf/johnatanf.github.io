import React from 'react'
import Project from './Project'

const Projects = props => {
  return (
    <div className="projects-container">
      {props.projects.map(project => (
        <Project 
          name={project.name}
          description={project.description}
          demoLink={project.demoLink}
          sourceCodeLink={project.sourceCodeLink}
          imageName={project.imageName}
        />
      ))}
    </div>
  )
}

export default Projects