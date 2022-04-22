import './Admin.css'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {

          // Devs Data State Management
  const [allDeves, setAllDeves] = useState([])

  // Use Effect Hock
  useEffect(() =>{
      axios.get('http://localhost:5050/deves').then(res =>{

    // Data Get Form Server To Axios
        setAllDeves(res.data);
      })
  }, [allDeves])





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
                                        <th>Email</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                    
                                allDeves.map((data, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.skill}</td>
                                        <td>{data.email}</td>
                                        <td><img src={data.photo} alt="" /></td>
                                        <td>
                                            <Link to={`/profile/${ data.id }`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
                                            <Link to={ `/profile/${ data.id }/edite` }><i class="fa fa-edit  " aria-hidden="true"></i></Link>
                                            <Button><i class="fa fa-trash" aria-hidden="true"></i></Button>
                                        </td>
                                    </tr>
                                    )
                                    }

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