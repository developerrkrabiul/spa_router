
import './Profile.css'

import React, { useEffect, useState } from 'react'
import { Button, Card, CardImg, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {

    

    // Developers Profile Data
    const [deveProfile , steDeveProfile] = useState([])

    const {id} = useParams();


      // Use Effect Hock
      useEffect(() =>{
          axios.get('http://localhost:5050/deves/'+id ).then(res =>{
            steDeveProfile(res.data);
          })
      },[])

        // Devs Data Delete Handaler
    const handelAcDelete = (id) => {
    // Axios Delete
    axios.delete( 'http://localhost:5050/deves/' + id )
  }


  return (

    <section>
        <Container className='my-3'>
            <Row>
                <Col>
                    <div className="profile_sec">
                        <Row>
                            <Col md={4}> 

                            <div className="profile_imge">
                                <Card className='shadow'>
                                       
                                            <Card.Img src={deveProfile.photo} alt="" />
                                    <Card.Body>
                                        <h1>{deveProfile.name}</h1>
                                        <p>{deveProfile.skill}</p>
                                    </Card.Body>
                                </Card>
                            </div>

                            </Col>
                            <Col md={8}>
                                <Card className='shadow'>
                                    <Card.Header>
                                        <h1>Profile information</h1>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="profile_con_sec">

                                        <Table striped hover bordered className='rounded overflow-hidden'>
                                                <tbody>
                                                    <tr>
                                                    <th><i class='bx bxs-id-card'></i> ID : </th>
                                                    <th>{ deveProfile.id }</th>
                                                    </tr>
                                                    <tr>
                                                    <th> <i class='bx bxs-user'></i> User Name : </th>
                                                    <th>{ deveProfile.name }</th>
                                                    </tr>
                                                    <tr>
                                                    <th><i class='bx bx-envelope' ></i> Gmail : </th>
                                                    <th>{ deveProfile.email }</th>
                                                    </tr>
                                                    <tr>
                                                    <th><i class='bx bx-phone' ></i> Phone : </th>
                                                    <th>{ deveProfile.phone }</th>
                                                    </tr>
                                                    <tr>
                                                    <th><i class='bx bx-male-female'></i> Gender</th>
                                                    <th>{ deveProfile.gender }</th>
                                                    </tr>
                                                    
                                                </tbody>
                                                </Table>

                                        <div className="social_info rounded overflow-hidden mt-3">
                                            <h2>Social Links</h2>
                                            <Table striped hover bordered className='rounded overflow-hidden'>
                                                <tbody>
                                                {
                                                deveProfile.fb && <tr>
                                                    <th><i class='bx bxl-facebook'></i> Facebook</th>
                                                    <th><a href={ deveProfile.fb }>{ deveProfile.fb }</a></th>
                                                </tr>
                                                }
                                                {
                                                deveProfile.twi && <tr>
                                                    <th><i class='bx bxl-twitter'></i> Twitter</th>
                                                    <th><a href={ deveProfile.twi }>{ deveProfile.twi }</a></th>
                                                </tr>
                                                }
                                                {
                                                deveProfile.inst && <tr>
                                                    <th><i class='bx bxl-instagram'></i> Instagram</th>
                                                    <th><a href={ deveProfile.inst }>{ deveProfile.inst }</a></th>
                                                </tr>
                                                }
                                                {
                                                deveProfile.youtube && <tr>
                                                    <th><i class='bx bxl-youtube'></i> Youtube</th>
                                                    <th><a href={ deveProfile.youtube }>{ deveProfile.youtube }</a></th>
                                                </tr>
                                                }
                                                </tbody>
                                            </Table>

                                            <div className="text-end">
                                            <button onClick ={ e => handelAcDelete(deveProfile.id)} className='btn btn-outline-danger'><i class='bx bx-trash' ></i> Delete Account</button> &nbsp;
                                            <Link to={ `/profile/${ deveProfile.id }/edite` } className='btn btn-outline-info btn sm'><i class='bx bx-edit'></i> Edit Profile</Link>
                                            </div>
                                        </div>

                                                                                  
                                        </div>
                                    </Card.Body>
                                </Card>

                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Profile;