

import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
      <section>
          <Container className='my-3'>
              <Row>
                  <h1 className='text-center '>DEVELOPER TEAM MEMBERS</h1>
                  <hr />
                  <hr />
                  <Col md={4} className='my-3 shadow-sm'>
                      <div className="member_sec">
                        <Row>
                            <Col md={6}>
                                <div className="member_img_sec text-center">
                                    <img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                                    <Button className='btn btn-primary w-100'>Contact</Button>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="member_con_sec">
                                    <h1>Rk Rabiul Islam Razu</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt?</p>

                                    <div className="member_soc_sec text-center">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                            <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        </ul>
                                        <Button className='btn btn-info w-100'>View Profile</Button>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                      </div>
                  </Col>


              </Row>
          </Container>
      </section>
  )
}

export default Home;