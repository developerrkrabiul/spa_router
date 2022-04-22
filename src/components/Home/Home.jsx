

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'





const Home = () => {


      // Devs Data State Management
  const [devesData, setDevesData] = useState([])

  // Use Effect Hock
  useEffect(() =>{
      axios.get('http://localhost:5050/deves').then(res =>{

    // Data Get Form Server To Axios
        setDevesData(res.data);
      })
  }, [devesData])


  return (
      <section>
          <Container className='my-3'>
              <Row>
                  <h1 className='text-center '>DEVELOPER TEAM MEMBERS</h1>
                  <hr />
                  <hr />
                  {

                  devesData.map((data, index) =>

                        <Col md={4} className='my-3 shadow-sm'>
                            <div className="member_sec">
                                <Row>
                                    <Col md={6}>
                                        <div className="member_img_sec text-center">
                                            <img src={data.photo} alt="" />
                                            <Button className='btn btn-primary w-100'>Contact</Button>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="member_con_sec">
                                            <h1>{data.name}</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt?</p>

                                            <div className="member_soc_sec text-center">
                                                <ul>
                                                    {
                                                        data.fb && <li><a href={data.fb}><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    }
                                                    {
                                                        data.twi && <li><a href={data.twi}><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    }
                                                    {
                                                        data.youtube && <li><a href={data.youtube}><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                                    }
                                                    {
                                                        data.inst && <li><a href={data.inst}><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                    }
                                                </ul>

                                                <Link to={`/profile/${ data.id }`}  className='btn btn-info w-100'>View Profile</Link>

                                            </div>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                  
                  )
                                    
                  }


              </Row>
          </Container>
      </section>
  )
}

export default Home;