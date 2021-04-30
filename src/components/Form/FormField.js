import React from 'react'

const FormField = props => {
  return (
    <div className="contact-form__field">
      <label htmlFor={`${props.name.toLowerCase()}`}>{props.name}</label>
      <input 
        id={`${props.name.toLowerCase()}`}
        name={`${props.name.toLowerCase()}`}
        type={props.type}
        required
      />
    </div>
  )
}

export default FormField