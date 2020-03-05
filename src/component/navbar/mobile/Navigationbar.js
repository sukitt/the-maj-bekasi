import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Instance } from '../../../services/axios'

import logo from '../../../assets/logo.svg'
import styled from 'styled-components';

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      showing: false,
    };
  }

  componentDidMount() {
    Instance.get('/nav-item')
    .then(
      // (result) => console.log(result)
      (res) => {
        this.setState({
          isLoaded: true,
          items: res.data
        });
      }
    ).catch(
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { showing, error, isLoaded, items } = this.state;
    const itemStyle = {
      fontFamily: "Nunito Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "11px",
      lineHeight: "13px",
      textTransform: "uppercase",
      color: "#000000",
      margin:"auto 1rem",
    }
    const btnStyle = {
      width: "100%",
      height: "40px",
      background: "#CC9980",
      padding: "10px 35px",
      
      fontFamily: "Source Sans Pro",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "13px",
      lineHeight: "18px",
      textAlign: "center",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#FFFFFF",
      textDecoration: "none",
    }
    if(error){
      return <div>Error: {error.message}</div>
    }else if(!isLoaded){
      return <div>Loading...</div>
    }else{

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
                <SideNavCloseBtn href="javascript:void(0)" onClick={() => this.setState({showing: !showing})}>&times;</SideNavCloseBtn>
                <SideNavLink href="#linkto">About</SideNavLink>
                <SideNavLink href="#linkto">Services</SideNavLink>
                <SideNavLink href="#linkto">Clients</SideNavLink>
                <SideNavLink href="#linkto">Contact</SideNavLink>
              </SideNav>
          </div>
        </Navbar>
      )
    }
  }
}
export default NavigationBar

const SideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
`;

const SideNavLink = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  '&:hover':{
    color: #f1f1f1;
  }
`;

const SideNavCloseBtn = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`;


              {/* <Nav>
                {items.map(item => (
                  <Nav.Link key={item.id} href={item.link}
                  style={itemStyle}
                  >
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav> */}