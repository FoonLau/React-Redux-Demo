import React from 'react';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { fromJS } from 'immutable'
import App from './App';

const store = configureMockStore()({
  app: fromJS({}),
  form: {}
})

it('renders without crashing', () => {
  const app = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON()

  expect(app).toMatchSnapshot()
});
