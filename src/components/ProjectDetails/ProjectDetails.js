import React, { Component } from 'react'
import { Fragment } from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'

export default class ProjectDetails extends Component {
    render() {
        return (
           <Fragment>
               <Container className="mt-5">
                   <Row>
                       <Col  lg={6} md={6} sm={12}>
                           <img  className="projectDetailsImg" src="https://cdn.pixabay.com/photo/2014/04/05/09/30/tablet-314153_960_720.png"/>
                       </Col>


                       <Col  lg={6} md={6} sm={12}>
                           <h2 className="serviceName"> Computer Bazar</h2>
                           <p className="serviceDescription" > Amet dolor diam diam kasd et vero duo sea magna sadipscing. Gubergren no elitr lorem sit et ipsum dolor sed,.</p>
                           <ul>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                               <li className="serviceDescription" >Aliquyam lorem no vero sea diam rebum voluptua.</li>
                              
                             
                           </ul>
                              <Button variant="primary">Primary</Button>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        )
    }
}
