import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import {Form, Button} from 'react-bootstrap'
export default class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>

                        <Col lg={6} md={6} sm={12} >
                        <h1 className="serviceName">  Quick Connect  </h1>

                        <Form>
                                <Form.Group >
                                    <Form.Label className="serviceDescription">Name </Form.Label>
                                    <Form.Control type="text" />
                                 </Form.Group>

                                 <Form.Group >
                                    <Form.Label className="serviceDescription">Email Address </Form.Label>
                                    <Form.Control type="email" />
                                 </Form.Group>

                                 <Form.Group className="mb-3" >
                                    <Form.Label  className="serviceDescription">Message </Form.Label>
                                    <Form.Control  as="textarea" rows={3}/>
                                 </Form.Group>

                              
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                </Form>
                        
                        </Col>
                     
                        
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName"> Discuss now</h1>

                        <p className="serviceDescription" > #78/4 Kadamtala Residential Aria Basabo. DHAKA-1214 </p>
                        <p className="serviceDescription"> <FontAwesomeIcon   icon={faEnvelope} /> atiqit52@gmail.com </p>
                        <p className="serviceDescription"> <FontAwesomeIcon   icon={faPhone} />  +880174999999 </p>
                        </Col>
                        
                        



                    </Row>
                </Container>
            </Fragment>
        )
    }
}
