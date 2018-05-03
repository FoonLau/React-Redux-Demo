import React from 'react';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import { mount } from 'enzyme'
import { Alert } from 'react-bootstrap'
import Notification from './Notification';
import { submitSuccess } from '../duck/duck'
import configStore from 'bootstrap/configStore'

const store = configureMockStore()({
  app: fromJS({}),
  form: {  register: { values: {} } }
})


it('should not render by default', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Notification />
    </Provider>
  )

  expect(wrapper.find(Notification).html()).toBe(null)
})

it('should render when submit success', () => {
  const store = configStore()
  store.dispatch(submitSuccess())
  const wrapper = mount(
    <Provider store={store}>
      <Notification />
    </Provider>
  )

  expect(wrapper.find(Alert)).toHaveLength(1)
})