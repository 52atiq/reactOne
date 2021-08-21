import React, { Component , Fragment} from 'react'
import { Col, Container, Row , Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class AllProjects extends Component {
    render() {
        return (
           
            <Fragment>
            <Container className="text-center mt-5">
         
                <Row>
                    <Col sm={12} md={6} lg ={4} className="p-2">
                    <Card className="projectCard " >
                         <Card.Img  className="projectCardImage " variant="top" src="https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783_960_720.png" />
                         <Card.Body>
                             <Card.Title className="projectCardTitle" >Card Title </Card.Title>
                             <Card.Text className="projectCardDes">
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             <Button variant="primary"> <Link className="link-style" to="/ProjectDetails" > Details </Link> </Button>
                         </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg ={4} className="p-2">
                    <Card className="projectCard " >
                         <Card.Img  className="projectCardImage " variant="top" src=" https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_960_720.jpg" />
                         <Card.Body>
                             <Card.Title  className="projectCardTitle">Card Title</Card.Title>
                             <Card.Text className="projectCardDes">
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             <Button variant="primary"> <Link className="link-style"  to="/ProjectDetails" > Details </Link> </Button>
                         </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg ={4}  className="p-2">
                    <Card className="projectCard " >
                             <Card.Img className="projectCardImage " variant="top" src="https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142_960_720.jpg" />
                             <Card.Body>
                                 <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                 <Card.Text className="projectCardDes" >
                                 Some quick example text to build on the card title and make up the bulk of
                                 the card's content.
                                 </Card.Text>
                                 <Button variant="primary"> <Link className="link-style" to="/ProjectDetails" > Details </Link> </Button>
                             </Card.Body>
                             </Card>
                    </Col>
                    <Col sm={12} md={6} lg ={4}  className="p-2">
                    <Card className="projectCard " >
                             <Card.Img className="projectCardImage " variant="top" src="https://cdn.pixabay.com/photo/2017/11/07/20/43/christmas-tree-2928142_960_720.jpg" />
                             <Card.Body>
                                 <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                 <Card.Text className="projectCardDes" >
                                 Some quick example text to build on the card title and make up the bulk of
                                 the card's content.
                                 </Card.Text>
                                 <Button variant="primary"> <Link className="link-style" to="/ProjectDetails" > Details </Link> </Button>
                             </Card.Body>
                             </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}
