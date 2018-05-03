import validate from './iban'

it('should has value', () => {
  expect(validate()).toBe('IBAN is required')
})