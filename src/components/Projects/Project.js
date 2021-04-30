import React from 'react'
import iconSet from "../../img/sprite.json"
import IcomoonReact from "icomoon-react"
import HeadingTertiary from '../typography/HeadingTertiary'
import Skills from '../Skills/Skills'

const Project = props => {
  return (
    <div className="project-item">
      <div className="project-item__details">
        <HeadingTertiary>{props.name}</HeadingTertiary>
        <p className="project-item__details-description">{props.description}</p>
        <Skills skills={props.skills} />
        <div className="project-item__container-buttons">
          <a href={props.demoLink} target="_blank" className="button button--demo">Live Demo</a>
          <a href={props.sourceCodeLink} target="_blank" className="button button--source">
            <div className="button__content">
              Source Code
              <IcomoonReact className="icon icon--light" iconSet={iconSet} icon="github" />
            </div>
          </a>
        </div>
      </div>
      <div className={`project-item__image project-item__image--${props.imageName}`}></div>
    </div>
  )
}

export default Project