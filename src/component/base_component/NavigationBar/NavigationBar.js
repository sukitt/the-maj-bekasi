import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const NavigationBar = (props) => {
    return (
        <Navbar bg="white" expand="lg">
            <div className="container-2 p-0" >
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="logo" style={{
                                maxWidth: "120px",
                                width: "100%",
                            }} />
                        </Link>
                    </Navbar.Brand>
                    <Nav className="mr-auto">

                        {props.store.map(item => (
                            <Nav.Link key={item.id}
                            >
                                <Link to={item.link}>
                                    <h6>{item.name}</h6>
                                </Link>
                            </Nav.Link>
                        ))}

                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/#contact-us">
                                <button className="button-small">Hubungi Kami</button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}


export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  render() {
    const {showing} = this.state
    const { store } = this.props
      return(
        <Navbar bg="white" expand="lg">
          <div className="container-fluid">
          <Button className="position-absolute bg-transparent border-0" onClick={()=>this.setState({showing: !showing})}><i style={{color:"#CC9980", fontSize:22}} className="fas fa-bars"></i></Button>
            <Navbar.Brand href="#home" className="mx-auto">
              <img src={logo} alt="logo" style={{
                maxWidth:"140px",
                width:"100%",
              }} />
            </Navbar.Brand>
              <SideNav style={{width:(showing? "100%" : "0")}} id="mySidenav">
                <img src={logo} alt="logo" style={{
                  maxWidth:"142px",
                  width:"100%",
                  marginLeft: "15px",
                }} />
                <hr />
                <SideNavCloseBtn href="javascript:void(0)" onClick={() => this.setState({showing: !showing})}>&times;</SideNavCloseBtn>
                {store && store.map((item, i) => (
                  <SideNavLink key={i} ><Link to={item.link}><h3>{item.name}</h3></Link></SideNavLink>
                ))}
              </SideNav>
          </div>
        </Navbar>
      )
  }
}

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 35;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 15px;
`;

const SideNavLink = styled.a`
  padding: 8px 8px 8px 32px;
  margin-bottom: 45px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  '&:hover':{
    color: #f1f1f1;
  }
`;

const SideNavCloseBtn = styled.a`
  position: absolute;
  top: 2%;
  right: 5%;
  font-size: 40px;
  margin-left: 50px;
`;