import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import logo from '../../assets/logo.svg'

const NavigationBar = (props) => {
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
    width: "100px",
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
            <Nav.Link href="#home"
              style={itemStyle}
            >
              beranda
            </Nav.Link>
            <Nav.Link href="#home"
              style={itemStyle}
            >
              fasilitas
            </Nav.Link>
            <Nav.Link href="#home"
              style={itemStyle}
            >
              Denah Unit
            </Nav.Link>
            <Nav.Link href="#home"
              style={itemStyle}
            >
              Lokasi
            </Nav.Link>
            <Nav.Link href="#home"
              style={itemStyle}
            >
              Galeri
            </Nav.Link>
            <Nav.Link href="#home"
              style={itemStyle}
            >
              Tentang Kami
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <Nav.Link href="#home"
              
            >
              <a style={btnStyle} href="#xample">Hubungi Kami</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
export default NavigationBar