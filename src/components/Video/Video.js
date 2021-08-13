import React, { Component, Fragment } from 'react';
import { Col, Container, Row,Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';

export default class Video extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             show:false
        }
    }
    modalClose=() => this.setState({show:false})
    modalOpen=()=> this.setState({show:true})

    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                           <div>
                               <p className="videotitle"> How I DO</p>

                               <p className="videoDes">No consetetur amet duo et sea et. Ea diam dolor vero dolor rebum dolorconsetetur 
                                   amet duo et sea et. Ea diam dolor vero dolo
                                   r rebum dolores dolores, sed eirmod vero vero sanctus. </p>
                               <p>  <FontAwesomeIcon  onClick={this.modalOpen} className=" playBtn  " icon={faPlayCircle} /> </p>
                             </div> 
                        </Col>
                    </Row>
                </Container>
                  <Modal  size="lg" show={this.state.show} onHide={this.modalClose}>
                       
                        <Modal.Body> 
                            <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton className="bigBtnPosition" position=" center"/>
                            </Player>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                       
                        </Modal.Footer>
                 </Modal>
            </Fragment>
        )
    }
}
