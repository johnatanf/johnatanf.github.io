import React from 'react'
import iconSet from "../../img/sprite.json"
import IcomoonReact from "icomoon-react"
import HeadingTertiary from '../typography/HeadingTertiary'

const Project = props => {
  return (
    <div className="project-item">
      <div class="project-item__details">
        <HeadingTertiary>{props.name}</HeadingTertiary>
        <p class="project-item__details-description">{props.description}</p>
        <div class="project-item__container-buttons">
          <a href={props.demoLink} target="_blank" class="button button--demo">Live Demo</a>
          <a href={props.sourceCodeLink} target="_blank" class="button button--source">
            <div class="button__content">
              Source Code
              <IcomoonReact className="icon icon--light" iconSet={iconSet} icon="github" />
            </div>
          </a>
        </div>
      </div>
      <div class={`project-item__image project-item__image--${props.imageName}`}></div>
    </div>
  )
}

export default Project