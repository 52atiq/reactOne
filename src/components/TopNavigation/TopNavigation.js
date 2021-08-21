import React, { Component, Fragment } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from  '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/responsive.css'
import { NavLink } from 'react-router-dom'

export default class TopNavigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             NavBarTitle:"navTitle",
             navBarLogo:[whiteLogo],
             navBarBack:"navBackground",
             navBarItem :"navItem",
             navVariant: "dark",
             pageTitle : props.title 

        }
    }
    //  Creat a listener
    onScroll = () =>{
        if(window.scrollY>100) {
            this.setState({navVariant:'light' , NavBarTitle:'navTitleScroll ' , navBarLogo:[blueLogo] , navBarBack:'navBackgroundScroll' ,navBarItem:'navItemScroll'})

        }
        else if(window.scrollY <100){
            this.setState({ navVariant:'dark', NavBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:'navBackground', navBarItem:'navItem'})

        }
    }
   componentDidMount () {
       window.addEventListener('scroll', this.onScroll)
   }




    render() {
        return (
            <Fragment>
                <title> {this.state.pageTitle} </title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Container>
                    <Navbar.Brand > <NavLink  className={this.state.NavBarTitle} to="/"> <img src={this.state.navBarLogo}/> ATIQUR RAHMAN  </NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>
                        <Nav>
                      <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME </NavLink>  </Nav.Link>  
                      <Nav.Link>   <NavLink  exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES </NavLink> </Nav.Link>  
                      <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES </NavLink>  </Nav.Link>  
                      <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}}className={this.state.navBarItem} to="/portfolio"  >PORTFOLIO </NavLink> </Nav.Link>  
                      <Nav.Link>   <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact" >CONTACT </NavLink> </Nav.Link>  
                      <Nav.Link>  <NavLink  exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about" >ABOUT </NavLink>  </Nav.Link>  
                      {/* <NavLink className={this.state.navBarItem} to="/">HOME</NavLink>
                        <NavLink  className={this.state.navBarItem} to="/service">SERVICES</NavLink>
                        <NavLink className={this.state.navBarItem} to="/course">COURSES</NavLink>
                        <NavLink className={this.state.navBarItem} to="/portfolio"  >PORTFOLIO</NavLink>
                        <NavLink className={this.state.navBarItem} to="/contact" >CONTACT</NavLink>
                        <NavLink  className={this.state.navBarItem} to="/about" >ABOUT</NavLink> */}
                        
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
            </Fragment>
        )
    }
}
