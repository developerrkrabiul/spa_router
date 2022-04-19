import './Admin.css'

import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';

const Admin = () => {
  return (
      <section>
          <Container className='my-3'>
              <Row>
                  <Col>
                    <Card>
                        <Card.Header>
                            <h1 className='text-center '>ALL TEAM MEMBERS</h1>
                        </Card.Header>
                        <Card.Body className='all_deves_data'>
                            <Table className='table table-striped table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th>SEL</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Skill</th>
                                        <th>Location</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Rk Rabiul Islam Razu</td>
                                        <td>01626761798</td>
                                        <td>MERN STACK Developer</td>
                                        <td>Cumilla</td>
                                        <td><img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" /></td>
                                        <td>
                                            <Button><i class="fa fa-eye" aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-edit  " aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-trash" aria-hidden="true"></i></Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Rk Rabiul Islam Razu</td>
                                        <td>01626761798</td>
                                        <td>MERN STACK Developer</td>
                                        <td>Cumilla</td>
                                        <td><img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" /></td>
                                        <td>
                                            <Button><i class="fa fa-eye" aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-edit  " aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-trash" aria-hidden="true"></i></Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Rk Rabiul Islam Razu</td>
                                        <td>01626761798</td>
                                        <td>MERN STACK Developer</td>
                                        <td>Cumilla</td>
                                        <td><img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" /></td>
                                        <td>
                                            <Button><i class="fa fa-eye" aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-edit  " aria-hidden="true"></i></Button>
                                            <Button><i class="fa fa-trash" aria-hidden="true"></i></Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
          </Container>
      </section>
  )
}

export default Admin;