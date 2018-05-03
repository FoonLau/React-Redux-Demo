import validate from './firstName'

it('should has value', () => {
  expect(validate()).toEqual('First name is required')
})

it('should contain only small and capital letters', () => {
  expect(validate('John1')).toEqual('First name should contain only small and capital letters')
})

it('should pass validation for correct value', () => {
  expect(validate('Peter')).toBe(undefined)
})