import React, { Component } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

import { BaseUrl } from '../../services/axios';
import {SliderPlaceholder} from '../base/loader/ImagePlaceholder';
import LogoGambarPlaceholder from './assets/logo-placeholder.svg'
import { Row, Col, Container } from 'react-bootstrap';

class LogoSlider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      localStore: [],
      isLoading: true,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store !== prevState.localStore) {
      return {
        localStore: nextProps.store,
        isLoading: false,
      }
    }
    return null
  }
  
  render() {

    if (!this.state.localStore.length) {
      const LogoLoading = (args) => {let arry=new Array();for (let i=0;i<args;i++) {arry.push({id: i, image: LogoGambarPlaceholder})};return arry}
      return (
        <>
          <Container>
            <Row style={{margin:"150px 0px"}}>
            {LogoLoading(4).map(data => (
              <>
                    <Col key={data.id}>
                      <div className="mx-auto" style={{width:"200px", height:"200px", backgroundColor:"#ccc"}}></div>
                      {/* <SliderPlaceholder src={LogoGambarPlaceholder} color="#CC9980" width="200px" height="200px" /> */}
                    </Col>
              </>
            ))}
            </Row>
          </Container>
        </>
      )
    }
    
    return(
      <div style={{margin:"105px 0px",height:"260px"}}>
        <Slider
          dots={false}
          infinite={true}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay={true}
          speed={2000}
          autoplaySpeed={2000}
          cssEase="linear"
          pauseOnHover={true}
        >
          {this.state.localStore && this.state.localStore.map((item, i) => (
            <div key={item.id}>
              <div>
                <a href={item.link}><Img src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} /></a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}
const Img = styled.img`
  margin: 0px auto;
  max-height: 200px;
  filter: grayscale(100%);
  transition: .3s all;
  &:hover {
    filter: grayscale(0%);
  }
`;
export default LogoSlider