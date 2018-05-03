import { fromJS } from 'immutable'

// Action types
export const SUBMIT = 'registerForm/SUBMIT'
export const SUBMIT_SUCCESS = 'registerForm/SUBMIT_SUCCESS'

// Action creators

export const submit = (data) => ({
  type: SUBMIT,
  payload: { data }
})

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS
})

// reducer

export const initialState = fromJS({
  submitting: false,
  lastSubmitSuccess: null
})

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_SUCCESS:
      return state.set('lastSubmitSuccess', new Date().getTime())
    default:
      return state
  }
}

export default reducer