import React, { Component, Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

export default class ClientReview extends Component {
    render() {
       

            var settings = {
                autoplaySpeed:3000,
                autoplay:true,
                dots: true,
                infinite: true,
                speed: 3000,
                vertical:true,
                verticalSwiping:true,
                slidesToShow: 1,
                slidesToScroll: 1,
               
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              };


              return (
          <Fragment>
              <Container className="text-center">
              <h1 className="serviceMainTitle" > CLIENT SAYS </h1>

              <Slider {...settings}>

             <div>
               <Row className ="text-center justify-content-center "> 
               <Col  lg={6} md={6} sm={12}>
               <img  className="circleImg" src="https://cdn.pixabay.com/photo/2016/02/19/11/36/microphone-1209816_960_720.jpg" />
               <h1 className="serviceName" > Web Development</h1>
               <p className="serviceDescription"> Takimata takimata elitr ipsum voluptua clita. Magna accusam sadipscing eos sanctus. Ipsum erat sit erat voluptua. Et aliquyam at no clita dolore. Sed no at at invidunt dolore rebum sea, amet sit kasd aliquyam est. Ut kasd dolor et diam,.</p>
               </Col>
 
               </Row>
             </div>

             <div>
               <Row className ="text-center justify-content-center"> 
               <Col  lg={6} md={6} sm={12} >
               <img  className="circleImg" src="https://cdn.pixabay.com/photo/2016/02/19/11/36/microphone-1209816_960_720.jpg" />
               <h1 className="serviceName" > Web Development</h1>
               <p  className="serviceDescription"> Takimata takimata elitr ipsum voluptua clita. Magna accusam sadipscing eos sanctus. Ipsum erat sit erat voluptua. Et aliquyam at no clita dolore. Sed no at at invidunt dolore rebum sea, amet sit kasd aliquyam est. Ut kasd dolor et diam,.</p>
               </Col>

               </Row>
             </div>

             <div>
               <Row className ="text-center justify-content-center"> 
               <Col lg={6} md={6} sm={12} >
               <img  className="circleImg" src="https://cdn.pixabay.com/photo/2016/02/19/11/36/microphone-1209816_960_720.jpg" />
               <h1 className="serviceName" > Web Development</h1>
               <p  className="serviceDescription"> Takimata takimata elitr ipsum voluptua clita. Magna accusam sadipscing eos sanctus. Ipsum erat sit erat voluptua. Et aliquyam at no clita dolore. Sed no at at invidunt dolore rebum sea, amet sit kasd aliquyam est. Ut kasd dolor et diam,.</p>
               </Col>

               </Row>
             </div>



              </Slider>
            


              </Container>

          </Fragment>
        );
    }
}
