import { ActionsObservable } from 'redux-observable'
import { 
  submit,
  submitSuccess
} from './duck'
import { submitEpic } from './epic'

it('should map the SUBMIT action to the SUBMIT_SUCCESS action', () => {
  const actions$ = ActionsObservable.of(submit())

  return submitEpic(actions$).toPromise().then(action => {
    expect(action).toEqual(submitSuccess())
  })
})
