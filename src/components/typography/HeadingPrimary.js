import React from 'react'

const HeadingPrimary = props => {
  return (
    <h1 className="heading-primary">
      <span className="heading-primary__name">{props.name}</span>
      <span className="heading-primary__job-title">{props.jobTitle}</span>
    </h1>
  )
}

export default HeadingPrimary