import firstName from './firstName'
import lastName from './lastName'
import email from './email'
import iban from './iban'

const validators = [
  { name: 'firstName', func: firstName },
  { name: 'lastName', func: lastName },
  { name: 'email', func: email },
  { name: 'iban', func: iban }
]

export default (values) => {
  const errors = {}

  validators.forEach(({name, func}) => {
    errors[name] = func(values[name])
  })

  return errors
}