import React from 'react'
import { 
  Grid,
  Row,
  Col } from 'react-bootstrap'
import RegisterForm from './RegisterForm/RegisterForm'

export default () => (
  <Grid>
    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <RegisterForm />
      </Col>
    </Row>
  </Grid>
)
