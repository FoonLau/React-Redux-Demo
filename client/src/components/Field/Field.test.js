import React from 'react';
import { fromJS } from 'immutable'
import { shallow } from 'enzyme'
import { renderField as Field } from './Field';

it('renders correctly', () => {
  const props = {
    label: 'First Name',
    type: 'text',
    meta: { touched: false }
  }
  const wrapper = shallow(
    <Field {...props} />
  )

  expect(wrapper.find('.field-error')).toHaveLength(0)
  expect(wrapper.find('.field-label')).toHaveLength(1)
  expect(wrapper.find('.field-input')).toHaveLength(1)
});

it('should render error', () => {
  const props = {
    label: 'First Name',
    type: 'text',
    meta: { touched: true, error: 'error' }
  }
  const wrapper = shallow(
    <Field {...props} />
  )

  expect(wrapper.find('.field-error')).toHaveLength(1)
  expect(wrapper.find('.field-error').text()).toEqual('error')
});