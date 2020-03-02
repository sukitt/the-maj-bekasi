import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Instance } from '../../services/axios'

import logo from '../../assets/logo.svg'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('./navItem.json')
    .then(res => res.json())
    .then(
      // (result) => console.log(result)
      (res) => {
        this.setState({
          isLoaded: true,
          items: res.navItems
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
    const { error, isLoaded, items } = this.state;
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
          <div className="container" style={{padding:"0px 40px"}}>
            <Navbar.Brand href="#home" style={{marginRight:"40px"}}>
              <img src={logo} alt="logo" style={{
                maxWidth:"140px",
                width:"100%",
              }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                {items.map(item => (
                  <Nav.Link key={item.id} href={item.link}
                  style={itemStyle}
                  >
                    {item.name}
                  </Nav.Link>
                ))}

              </Nav>
              <Nav className="ml-auto">
              <Nav.Link href="#home"
                  style={btnStyle}
                >
                  Hubungi Kami
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )
    }
  }
}
export default NavigationBar