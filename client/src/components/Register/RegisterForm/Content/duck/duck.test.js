import reducer, {
  submit,
  submitSuccess,
  SUBMIT,
  SUBMIT_SUCCESS,
  initialState
} from './duck'

describe('Action Creators', () => {
  it('should create the SUBMIT action', () => {
    const data = {}
    expect(submit(data)).toEqual({
      type: SUBMIT,
      payload: { data }
    })
  })

  it('should create the SUBMIT_SUCCESS action', () => {
    const data = {}
    expect(submitSuccess()).toEqual({
      type: SUBMIT_SUCCESS
    })
  })
})

describe('reducer', () => {
  it('should set the initial state', () => {
    const action = { type: '@@INIT' }
    const state = reducer(undefined, action)

    expect(state).toEqual(initialState)
  })

  it('should handle the SUBMIT_SUCCESS action', () => {
    const action = submitSuccess()
    const state = reducer(initialState, action)

    expect(state.get('lastSubmitSuccess') > 0).toEqual(true)
  })

  it('should handle unsupported action', () => {
    const state = reducer(initialState, { type: 'other' })

    expect(state).toEqual(initialState)
  })
})