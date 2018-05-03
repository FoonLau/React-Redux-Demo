import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap'

const DURATION = 3000

class Notification extends Component {

  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  static getDerivedStateFromProps({ lastSubmitSuccess }) {
    return { show: !!lastSubmitSuccess }
  }

  clearTimer() {
    this.timer && clearTimeout(this.timer)
  }

  setTimer() {
    this.clearTimer()
    setTimeout(() => {
      this.setState({ show: false })
    }, DURATION)
  }

  render() {
    const { show } = this.state

    if (show) {
      this.setTimer()
    }

    return (
      show 
        ? <Alert bsStyle="success">Congratz! All data is valid</Alert> 
        : null
    )
  }
}

const mapToState = state => ({
  lastSubmitSuccess: state.app.get('lastSubmitSuccess')
})

export default connect(mapToState)(Notification)