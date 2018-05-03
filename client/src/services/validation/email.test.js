import validate from './email'

it('should has value', () => {
  expect(validate()).toBe('Email is required')
})

it('should be a valid email', () => {
  expect(validate('123')).toBe('Value should be a valid email')
})

it('should pass validation for correct email', () => {
  expect(validate('123@null.com')).toBe(undefined)
})