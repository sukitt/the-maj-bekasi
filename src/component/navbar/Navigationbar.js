import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import logo from '../../assets/logo.svg'
import DotsLoader from '../base/loader/DotsLoader';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      localStore: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store.length !== prevState.localStore.length) {
      return {
        localStore: nextProps.store,
        isLoading: false,
      }
    }
    return null
  }

  render() {
    if(this.state.isLoading){
      return (
        <Navbar>
          <div className="container-2 p-0" >
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="#home" >
                <img src={logo} alt="logo" style={{
                  maxWidth:"120px",
                  width:"100%",
                }} />
              </Navbar.Brand>
              <Nav className="m-auto">
                <DotsLoader />
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="#home">
                  <button className="button-small">Hubungi Kami</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      )
    }

    return(
      <Navbar bg="white" expand="lg">
        <div className="container-2 p-0" >
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand href="#home" >
              <img src={logo} alt="logo" style={{
                maxWidth:"120px",
                width:"100%",
              }} />
            </Navbar.Brand>
            <Nav className="mr-auto">

              {this.state.localStore.length && this.state.localStore.map(item => (
                <Nav.Link key={item.id} href={item.link}
                >
                  <h6>{item.name}</h6>
                </Nav.Link>
              ))}

            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home">
                <button className="button-small">Hubungi Kami</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}
export default NavigationBar