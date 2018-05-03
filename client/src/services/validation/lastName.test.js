import validate from './lastName'

it('should has value', () => {
  expect(validate()).toEqual('Last name is required')
})

it('should contain only small and capital letters', () => {
  expect(validate('John1')).toEqual('Last name should contain only small and capital letters')
})

it('should pass validation for correct value', () => {
  expect(validate('Peter')).toBe(undefined)
})