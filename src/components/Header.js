import React from 'react'

const Header = props => {
  return (
    <header class="header">
      <h1 class="heading-primary">
        <span class="heading-primary__name">Johnatan Fallen</span>
        <span class="heading-primary__job-title">Web Developer</span>
      </h1>

      <div class="social__container u-margin-top-medium">
        <a href="https://github.com/johnatanf/" target="_blank" class="social-item">
          {/* <svg class="icon icon--social">
            <use xlink:href="img/sprite.svg#icon-github"></use>
          </svg> */}
        </a>
        <a href="https://www.linkedin.com/in/johnatanfallen/" target="_blank" class="social-item">
          {/* <svg class="icon icon--social">
            <use xlink:href="img/sprite.svg#icon-linkedin2"></use>
          </svg> */}
        </a>
      </div>

      <a href="#section-portfolio" class="button button--heading">
        <div class="button__content">
          View portfolio
          {/* <svg class="icon icon--dark"> // download icomoon-react
            <use xlink:href="img/sprite.svg#icon-circle-down"></use>
          </svg> */}
        </div>
      </a>
    </header>
  )
}

export default Header