import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Card, Button } from 'react-bootstrap'
import graphicsLogo from  '../../asset/image/graphics.svg'
import webLogo from '../../asset/image/web.svg'
import mobileLogo from  '../../asset/image/mobile.svg'

export default class Services extends Component {
    render() {
        return (
           <Fragment>
               <Container className="text-center">
                   <h1 className="serviceMainTitle" > MY SERVICES</h1>
                   <Row>
                       <Col lg={4} md={6} sm={12} >
                           <div className="serviceCard text-center" >
                               <img src={webLogo } />
                               <h2 className="serviceName"> Web Development</h2>
                               <p className="serviceDescription"> Et dolor et um. Ipsum consetetur nonumy ea elitr diam accusam sea amet. Lorem et ipsum diam elitr nonumy ipsum erat. Amet labore sea dolor est diam. Amet dolor erat amet amet amet.</p>


                           </div>
                     
                       </Col>
                       <Col lg={4} md={6} sm={12} >
                           <div  className="serviceCard text-center">
                               <img src={ mobileLogo} />
                               <h2 className="serviceName"> Mobile Development</h2>
                               <p className="serviceDescription"> Et dolor et um. Ipsum consetetur nonumy ea. Loremum diam elitr nonumy ipsum erat. Amet labore sea dolor est diam. Amet dolor erat amet amet amet.</p>


                           </div>
                     
                       </Col>

                       <Col lg={4} md={6} sm={12} >
                           <div  className="serviceCard text-center">
                               <img src={graphicsLogo} />
                               <h2 className="serviceName"> Graphics Design</h2>
                               <p className="serviceDescription" > Et dolor et um. Ipsum consetetur nonumy ea elitr diam accusam sea amet. Lorem et ipsum diam elitr nonumy ipsum erat. Amet labore sea dolor est diam. Amet dolor erat amet amet amet.</p>

                           </div>
                     
                       </Col>


                   


                   </Row>
               </Container>
           </Fragment>
        )
    }
}
