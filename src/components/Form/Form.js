import React from 'react'
import FormField from './FormField'
import FormSubmitButton from './FormSubmitButton'
import FormTextArea from './FormTextArea'

const Form = props => {
  return (
    <div className="contact-form__container">
      <form action="https://usebasin.com/f/1c2e277eb8a4" method="POST" className="contact-form">
        <FormField 
          name="Name"
          type="text"
        />
        <FormField 
          name="Email"
          type="email"
        />
        <FormTextArea
          name="Message"
        />
        <FormSubmitButton />
      </form>
    </div>
  )
}

export default Form