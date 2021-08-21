import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import React, { Component, Fragment } from 'react'
import { Container, Row,Col ,Button} from 'react-bootstrap'
import {Player,BigPlayButton} from 'video-react';
export default class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
            <Container  fluid={true} className="topFixedPage  p-0" >
           <div className="topPageOverlay">

               <Container className="topPageContentCourse">
                   <Row>
                       <Col sm={12} md={6} lg={6}>
                         <h3 className="courseFullTitle"> FULL DYNAMIC WITH DATABASE</h3>
                         <h5 className="courseSubTitle"> Total Lecture=35</h5>
                         <h5 className="courseSubTitle"> Total Student=35</h5>
        
                      

                       </Col>

                       <Col sm={12} md={6} lg={6} >
                         <p className="courseDetailsDes" > Dolor dolor consetetur no duo eos ea dolores invidunt. Diam voluptua et sadipscing sit sea stet amet, lorem no diam lorem ea. Ut accusam dolor duo amet clita. Kasd et duo ea takimata sea. Accusam. </p>
                       </Col>
                   </Row>

               </Container>

           </div>

        </Container>
        <Container className="mt-5">
            <Row>
                <Col sm={12} lg={6} md={6}>
                    <h1 className="serviceName">Skill You Get</h1>
                    <ul>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                      <li className="serviceDescription"> Unlimited Dynamic Product categories</li>
                    
                    </ul>
                    <Button variant="primary">More Info</Button>
                </Col>


                <Col sm={12} lg={6} md={6}>
                <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton className="bigBtnPosition" position=" center"/>
                            </Player>
                </Col>

              
            </Row>

        </Container>



     </Fragment>

        )
    }
}
