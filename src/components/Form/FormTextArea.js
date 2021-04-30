import React from 'react'

const FormTextArea = props => {
  return (
    <div className="contact-form__field">
      <label htmlFor={`${props.name.toLowerCase()}`}>{props.name}</label>
      <textarea 
        id={`${props.name.toLowerCase()}`}
        name={`${props.name.toLowerCase()}`}
        cols={30}
        rows={5}
      />
    </div>
  )
}

export default FormTextArea