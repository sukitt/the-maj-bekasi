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
    const { error, isLoaded, items } = this.state;
    if(error){
      throw error
    }else if(!isLoaded){
      return <div>Loading...</div>
    }else{

      return(
        <Navbar bg="white" expand="lg">
          <div className="container-2" >
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="#home" >
                <img src={logo} alt="logo" style={{
                  maxWidth:"120px",
                  width:"100%",
                }} />
              </Navbar.Brand>
              <Nav className="mr-auto">

                {items.map(item => (
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
}
export default NavigationBar