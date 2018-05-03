import React from 'react';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import Register from './Register';

const store = configureMockStore()({
  app: fromJS({}),
  form: {  register: {} }
})


it('should render correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Register />
    </Provider>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})