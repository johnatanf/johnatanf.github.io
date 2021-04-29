import React from 'react'

const Navigation = props => {
  return (
    <nav class="navigation">
      <ul class="navigation__container">
        <li>
          <a href="#section-portfolio" class="navigation__link">Portfolio</a>
        </li>
        <li>
          <a href="#section-contact" class="navigation__link">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation