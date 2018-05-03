import nock from 'nock'
import asyncValidate from './asyncValidate'
import { resolveSoa } from 'dns';

it('should validate success', () => {
  nock(/.*/)
    .post('/')
    .reply(200, { valid: true })

  return expect(asyncValidate({ iban: '1' })).resolves.toBe(undefined)
})

it('should return invalid', () => {
  nock(/.*/)
    .post('/')
    .reply(200, { valid: false })

  return expect(asyncValidate({ iban: '1' })).rejects.toEqual({ iban: 'IBAN should be valid' })
})

it('should validate success', () => {
nock(/.*/)
  .post('/')
  .reply(500, { message: 'Something went wrong. Please, try again' })

  return asyncValidate({ iban: '1' }).catch(e => {
    expect(e).toEqual({ iban: 'Something went wrong. Please, try again' })
  })
})