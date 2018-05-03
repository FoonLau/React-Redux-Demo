import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import Field from 'components/Field/Field'
import validate from 'services/validation/validate'
import asyncValidate from 'services/validation/asyncValidate'

const FIELDS = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name'
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email'
  },
  {
    name: 'iban',
    type: 'text',
    label: 'IBAN'
  }
]

export class Form extends Component {

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
        {
          FIELDS.map(({ name, type, label }) => (
            <Field key={name} name={name} type={type} label={label} />
          ))
        }
        <div>
          <Button 
            className="pull-right"
            bsStyle="warning" 
            type="submit" 
            disabled={pristine || submitting}>Submit!</Button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'register',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'iban' ]
})(Form)