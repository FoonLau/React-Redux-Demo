import validate from './validate'

it('should apply all validations', () => {

  const values = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: '123@null.com',
    iban: '1'
  }
  const errors = validate(values)

  expect(errors.firstName).toBe(undefined)
  expect(errors.lastName).toBe(undefined)
  expect(errors.email).toBe(undefined)
  expect(errors.iban).toBe(undefined)
})