import React from 'react'
import iconSet from "../img/sprite.json"
import IcomoonReact from "icomoon-react"
import HeadingPrimary from "./typography/HeadingPrimary"

const Header = props => {
  return (
    <header className="header">
      <HeadingPrimary 
        name="Johnatan Fallen"
        jobTitle="Web Developer"
      />

      <div className="social__container u-margin-top-medium">
        <a href="https://github.com/johnatanf/" target="_blank" className="social-item">
          <IcomoonReact className="icon icon--social" iconSet={iconSet} icon="github" />
        </a>
        <a href="https://www.linkedin.com/in/johnatanfallen/" target="_blank" className="social-item">
          <IcomoonReact className="icon icon--social" iconSet={iconSet} icon="linkedin2" />
        </a>
      </div>

      <a href="#section-portfolio" className="button button--heading">
        <div className="button__content">
          View portfolio
          <IcomoonReact className="icon icon--dark" iconSet={iconSet} icon="circle-down" />
        </div>
      </a>
    </header>
  )
}

export default Header