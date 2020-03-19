import React, { Component } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

import { BaseUrl } from '../../services/axios';
import {SliderPlaceholder} from '../base/loader/ImagePlaceholder';

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
      className:"slider variable-width",
      infinite: true,
      arrows: false,
      speed: 1500,
      autoplay:true,
      autoplaySpeed:1500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    // if (this.state.isLoading) {
    //   return (
    //     <div style={{margin:"150px 0px",height:"260px"}}>
    //       <Slider 
    //         {...settings}
    //         slidesToShow={4}
    //         centerMode={true}
    //         centerPadding={100}
    //       >
    //         <div>
    //           <SliderPlaceholder color="#CC9980" width="200px" height="200px" text="Server Error 500" />
    //         </div>
    //         <div>
    //           <SliderPlaceholder color="#CC9980" width="200px" height="200px" text="Server Error 500" />
    //         </div>
    //         <div>
    //           <SliderPlaceholder color="#CC9980" width="200px" height="200px" text="Server Error 500" />
    //         </div>
    //         <div>
    //           <SliderPlaceholder color="#CC9980" width="200px" height="200px" text="Server Error 500" />
    //         </div>
    //         <div>
    //           <SliderPlaceholder color="#CC9980" width="200px" height="200px" text="Server Error 500" />
    //         </div>
    //       </Slider>
    //     </div>
    //   )
    // }
    return(
      <div style={{margin:"150px 0px",height:"260px"}}>
        <Slider 
          {...settings}
          slidesToShow={4}
        >
          {this.state.localStore && this.state.localStore.map((item, i) => (
            <div key={i}>
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