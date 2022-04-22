
import './Header.css'


import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <section className='shadow-sm'>
          <Container >
              <Row>
                  <Col md={3}>
                      <div className="header-img">    
                      <Link to="/"><img  src="https://3.imimg.com/data3/CW/YX/MY-13215058/rk-logo-500x500.png" alt="" /></Link>                 
                      </div>
                  </Col>
                  <Col md={9} className='d-flex align-content-center'>
                      <div className="mamu_items">                      
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/registration">Registration</Link></li>
                        </ul>
                      </div>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Header;