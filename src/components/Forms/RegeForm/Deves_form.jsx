

import React from 'react'
import { Button, Card, CardImg, Col, Container, Form, FormControl, FormGroup, FormLabel, Row  } from 'react-bootstrap'


const Deves_form = () => {
  return (

    <section>

        <Container className='my-5'>
            <Row className='d-flax justify-content-center'>
                <Col md={8}>
                    <Card className='shadow'>
                                <Card.Header>
                                    <h1>Create New Account</h1>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d_form_con_sec">
                                        <Form>
                                            <Row>
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
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <FormLabel foR='Photo'>Photo</FormLabel>
                                                        <FormControl id='Photo' type='url' placeholder='Photo link'></FormControl>
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
                                            </Row>  
                                            <Button variant="primary" type="submit">Submit</Button>                             
                                        </Form>                                       
                                    </div>
                                </Card.Body>
                            </Card>

                </Col>
            </Row>
        </Container>

    


    </section>




  )
}

export default Deves_form