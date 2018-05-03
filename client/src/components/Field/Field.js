import React from 'react'
import { Field } from 'redux-form'
import './Field.css'

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="field">
    <label className="field-label">{label}</label>
    <div>
      <input className="field-input" {...input} placeholder={label} type={type} />
    </div>
    {touched && error && <span className="field-error">{error}</span>}
  </div>
)

export default props => {
  const { name, label, type } = props
  
  return <Field name={name} type={type} label={label} component={renderField} />
}