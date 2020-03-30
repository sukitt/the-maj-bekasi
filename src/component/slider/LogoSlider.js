import React, { Component } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

import { BaseUrl } from '../../services/axios';
import {SliderPlaceholder} from '../base/loader/ImagePlaceholder';
import LogoGambarPlaceholder from './assets/logo-placeholder.svg'

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
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2000,
      autoplay:true,
      autoplaySpeed:2000,
      slidesToScroll: 1
    };

    if (!this.state.localStore.length) {
      const LogoLoading = (args) => {let arry=new Array();for (let i=0;i<args;i++) {arry.push({id: i, image: LogoGambarPlaceholder})};return arry}
      return (
        <div style={{margin:"150px 0px",height:"260px", display: "flex", flexDirection: "column"}}>
          <Slider 
            slidesToShow={4}
          >
            {LogoLoading(4).map(data => (
              <>
                <div key={data.id} style={{display: "flex", justifyContent: "center"}}>
                  <SliderPlaceholder src={LogoGambarPlaceholder} color="#CC9980" width="200px" height="200px" />
                </div>
              </>
            ))}
          </Slider>
        </div>
      )
    }
    
    return(
      <div style={{margin:"105px 0px",height:"260px"}}>
        <Slider 
          // {...settings}
          dots={false}
          infinite={true}
          arrows={false}
          speed={2000}
          autoplay={true}
          autoplaySpeed={2000}
          slidesToScroll={1}
          slidesToShow={4}
        >
          {this.state.localStore && this.state.localStore.map((item, i) => (
            <div>
              <div>
                <a key={i} href={item.link}><Img src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} /></a>
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