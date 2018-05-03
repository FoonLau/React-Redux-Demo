import React from 'react'
import { 
  Row,
  Col } from 'react-bootstrap'
import Header from './Header/Header'
import Content from './Content/Content'
import './RegisterForm.css'

export default () => (
  <Row className="register-form">
    <Col xs={12}>
      <Header />
    </Col>
    <Col xs={12}>
      <Content />
    </Col>
  </Row>
)