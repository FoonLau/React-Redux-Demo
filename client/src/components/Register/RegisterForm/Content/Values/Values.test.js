import React from 'react';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import Values from './Values';

const store = configureMockStore()({
  app: fromJS({}),
  form: {  register: { values: {} } }
})


it('should render correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Values />
    </Provider>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})