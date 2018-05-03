import React from 'react'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import Content from './Content'
import Form from './Form/Form'
import Values from './Values/Values'
import Notification from './Notification/Notification'
import { SUBMIT } from './duck/duck'

const store = configureMockStore()({
  app: fromJS({}),
  form: {  register: {} }
})

it('should render correctly', () =>{
  const wrapper = mount(
    <Provider store={store}>
      <Content />
    </Provider>
  )

  expect(wrapper.find(Notification)).toHaveLength(1)
  expect(wrapper.find(Form)).toHaveLength(1)
  expect(wrapper.find(Values)).toHaveLength(1)
})

it('should dispath submit action when form submit', () => {
  const values = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    iban: 'iban'
  }
  const wrapper = mount(
    <Provider store={store}>
      <Content />
    </Provider>
  )

  wrapper.find(Form).instance().props.onSubmit(values)
  const submitAction = store.getActions().filter(action => action.type === SUBMIT)[0]

  expect(submitAction).toEqual({
    type: SUBMIT,
    payload: { data: values }
  })
})