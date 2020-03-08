import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Instance } from '../../../services/axios'

import logo from '../../../assets/logo.svg'
import styled from 'styled-components';

export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
  }

  render() {
    const {showing} = this.state
    const { store, errors } = this.props
      if (Object.keys(errors).length) {
        return (
          <div>
            <h4>Error in HeaderSlider.js</h4>
            <p>{errors.code}</p>
            <p>{errors.status}</p>
          </div>
        )
      }
      return(
        <Navbar bg="white" expand="lg">
          {console.log(store)}
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
                  <SideNavLink key={i} href={item.link}><h3>{item.name}</h3></SideNavLink>
                ))}
              </SideNav>
          </div>
        </Navbar>
      )
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
