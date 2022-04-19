
import './Profile.css'

import React from 'react'
import { Button, Card, CardImg, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const Profile = () => {
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
                                       
                                            <Card.Img src="https://cdn.powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                                    <Card.Body>
                                        <h1>RK Rabiul Islam Raju</h1>
                                        <p>WorkPress Developer</p>
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
                                            <Form>
                                                <Row>
                                                    <Col md={12}>
                                                        <FormGroup>
                                                            <FormLabel foR='Photo'>Photo</FormLabel>
                                                            <FormControl id='Photo' type='url' placeholder='Photo link'></FormControl>
                                                        </FormGroup> 
                                                    </Col>
                                                    <Col md={6}>
                                                                                                 
                                                        <FormGroup>
                                                            <FormLabel foR='name'>Name</FormLabel>
                                                            <FormControl id='name' type='text' placeholder='Name'></FormControl>
                                                        </FormGroup>    
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='Email'>Email</FormLabel>
                                                            <FormControl id='Email' type='email' placeholder='Email'></FormControl>
                                                        </FormGroup>
                                                </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='Phone'>Phone</FormLabel>
                                                            <FormControl id='Phone' type='text' placeholder='Phone'></FormControl>
                                                        </FormGroup> 
                                                    </Col>
                                                    <Col md={6}>                                           
                                                        <FormGroup>
                                                            <FormLabel foR='Skill'>Skill</FormLabel>
                                                            <FormControl id='Skill' type='text' placeholder='Skill'></FormControl>
                                                        </FormGroup>
                                                    </Col>
                                                    <h1>Social Media</h1>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='Faceboock'>Faceboock</FormLabel>
                                                            <FormControl id='Faceboock' type='url' placeholder='Faceboock'></FormControl>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='Twitter'>Twitter</FormLabel>
                                                            <FormControl id='Twitter' type='url' placeholder='Twitter'></FormControl>
                                                        </FormGroup> 
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='YouTube'>YouTube</FormLabel>
                                                            <FormControl id='YouTube' type='url' placeholder='YouTube'></FormControl>
                                                        </FormGroup> 
                                                    </Col>
                                                    <Col md={6}>
                                                        <FormGroup>
                                                            <FormLabel foR='instagram'>Instagram</FormLabel>
                                                            <FormControl id='instagram' type='url' placeholder='Instagram'></FormControl>
                                                        </FormGroup> 
                                                    </Col>
                                                    <Button className='mt-3'>Edite Profile</Button>
                                                </Row>                                    
                                            </Form>                                       
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