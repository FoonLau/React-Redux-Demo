import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from './RegisterForm'
import Header from './Header/Header'
import Content from './Content/Content'

it('should render header and content', () => {
  const wrapper = shallow(<RegisterForm />)

  expect(wrapper.find(Header)).toHaveLength(1)
  expect(wrapper.find(Content)).toHaveLength(1)
})