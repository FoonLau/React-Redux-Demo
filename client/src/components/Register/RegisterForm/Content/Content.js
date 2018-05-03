import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Form from './Form/Form'
import Values from './Values/Values'
import Notification from './Notification/Notification'
import { submit } from './duck/duck'

class Content extends Component {
  submit = (values) => {
    this.props.submit(values)
  }

  render() {
    return (
      <Fragment>
        <Notification />
        <Form onSubmit={this.submit} />
        <Values />
      </Fragment>
    )
  }
}

const mapDispatch = dispatch => bindActionCreators({ submit }, dispatch)

export default connect(null, mapDispatch)(Content)