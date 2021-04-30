import React from 'react'
import Skill from './Skill'

const Skills = props => {
  return (
    <div className="skills-container">
      {props.skills.map(skill => <Skill skill={skill} />)}
    </div>
  )
}

export default Skills