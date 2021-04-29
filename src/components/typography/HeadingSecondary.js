import React from 'react'

const HeadingSecondary = props => {
  return (
    <h2 className={`heading-secondary heading-secondary--${props.color === `light` ? `light` : `dark`}`}>{props.children}</h2>
  )
}

export default HeadingSecondary