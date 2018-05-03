import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import reducer from '../components/Register/RegisterForm/Content/duck/duck'

export default combineReducers({
  app: reducer,
  form: formReducer
})