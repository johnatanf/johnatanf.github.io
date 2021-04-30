import React from 'react'

const Navigation = props => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li>
          <a href="#section-portfolio" className="navigation__link">Portfolio</a>
        </li>
        <li>
          <a href="#section-contact" className="navigation__link">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation