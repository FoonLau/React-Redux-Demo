import { combineEpics } from 'redux-observable'
import { submitEpic } from '../components/Register/RegisterForm/Content/duck/epic'

export default combineEpics(submitEpic)