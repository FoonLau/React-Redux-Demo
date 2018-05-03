import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'react-bootstrap'
import { Form } from './Form'
import Field from 'components/Field/Field'

it('shold render all fileds and the submit button', () => {
  const wrapper = shallow(
    <Form />
  )

  expect(wrapper.find(Field)).toHaveLength(4)
  expect(wrapper.find(Button)).toHaveLength(1)
})