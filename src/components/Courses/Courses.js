import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Courses extends Component {
    render() {
        return (

           <Fragment>
               <Container className="text-center">
               <h1 className="serviceMainTitle" > OUR COURSES </h1>
                   <Row>
                       <Col lg={6} md={12} sm={12} className="p-2">
                           <Row>
                               <Col  lg={6} md={6} sm={12} >
                                   <img className="courseImg " src="https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_960_720.jpg "  />
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <h5 className="textJustify courseTitle" > Web Development</h5>
                                   <p className="textJustify courseDes" >Sanctus et lorem dolore gubergren invidunt amet sed lorem, accusam duo invidunt et amet dolor justo consetetur duo, amet duo. </p>
                                   <Link className="textJustify courseDetails" to="/CourseDetails"> Details</Link>
                               </Col>
                           </Row>
                       </Col>


                        <Col lg={6} md={12} sm={12} >
                           <Row>
                               <Col  lg={6} md={6} sm={12}  className="p-2">
                               <img className="courseImg " src="https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_960_720.jpg "  />
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                               <h5 className="textJustify courseTitle" > Web Development</h5>
                                   <p className="textJustify courseDes">Sanctus et lorem dolore gubergren invidunt amet sed lorem, accusam duo invidunt et amet dolor justo consetetur duo, amet duo. </p>
                                   <Link className="textJustify courseDetails" to="/CourseDetails"> Details</Link>
                               </Col>
                           </Row>
                       </Col>

                       <Col lg={6} md={12} sm={12} className="p-2" >
                           <Row>
                               <Col  lg={6} md={6} sm={12} >
                                   <img className="courseImg " src="https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_960_720.jpg "  />
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <h5 className="textJustify courseTitle" > Web Development</h5>
                                   <p className="textJustify courseDes" >Sanctus et lorem dolore gubergren invidunt amet sed lorem, accusam duo invidunt et amet dolor justo consetetur duo, amet duo. </p>
                                   <Link className="textJustify courseDetails" to="/CourseDetails"> Details</Link>
                               </Col>
                           </Row>
                       </Col>

                       <Col lg={6} md={12} sm={12} className="p-2" >
                           <Row  >
                               <Col  lg={6} md={6} sm={12} >
                                   <img className="courseImg " src="https://cdn.pixabay.com/photo/2018/04/20/21/10/code-3337044_960_720.jpg "  />
                               </Col>
                               <Col lg={6} md={6} sm={12}>
                                   <h5 className="textJustify courseTitle" > Web Development</h5>
                                   <p className="textJustify courseDes" >Sanctus et lorem dolore gubergren invidunt amet sed lorem, accusam duo invidunt et amet dolor justo consetetur duo, amet duo. </p>
                                   <Link className="textJustify courseDetails" to="/CourseDetails"> Details</Link>
                               </Col>
                           </Row>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        )
    }
}

