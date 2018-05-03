import React from 'react'
import { connect } from 'react-redux'

const Values = ({ values }) => {
  const val = JSON.stringify(values)
  return (
    <div>{val}</div>
  )
}

export default connect(({ form: { register: { values } } }) => ({
  values
}))(Values)