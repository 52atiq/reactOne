import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className=" text-center footerSection">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 textJustify " >
                        <h1 className="serviceName" > Follow Me</h1>
                          <Link className="textDecoration socialLink" target="_blank" href="//www.facebook.com">  <FontAwesomeIcon   icon={faFacebook} />  Facebook  </Link> <br />

                          <a className="textDecoration socialLink"  href="//wwww.youtube.com" > <FontAwesomeIcon   icon={faYoutube} /> Youtube </a> 
                        
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 textJustify ">
                            
                        <h1 className="serviceName" > Address</h1>
                        <p className="serviceDescription" > #78/4 Kadamtala Residential Aria Basabo. DHAKA-1214 </p>
                        <p className="serviceDescription"> <FontAwesomeIcon   icon={faEnvelope} /> atiqit52@gmail.com </p>
                        <p className="serviceDescription"> <FontAwesomeIcon   icon={faPhone} />  +880174999999 </p>

                        </Col>

                     
                      
                        <Col lg={3} md={6} sm={12} className="p-5 textJustify">
                        <h1 className="serviceName" > Information </h1>
                        <Link  className="textDecoration footerLink" to="/about" > About Me </Link>  <br/>
                          <a className="textDecoration footerLink" href="#" > My Resume </a>  <br />
                        
                          <Link className="textDecoration footerLink" to="/contact" > Contact Me </Link> 
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 textJustify" >
                        <h1 className="serviceName" > Legal</h1>
                        <Link  className="textDecoration footerLink" to="/Refund" > Refund Policy </Link>  <br/>
                          <Link className="textDecoration footerLink" to="/Terms" > Term And Condition</Link>  <br />
                        
                          <Link className="textDecoration footerLink" to="/Privacy" > Privacy Policy </Link> 
                        </Col>
                       
                      
                    </Row>
                </Container>
                <Container fluid={true } className="text-center copyrightSection">
                    <a  className="copyrightLink " href="#"> atiqurrahman.com &copy; 2021-2022 </a>

                </Container>
            </Fragment>
        )
    }
}
