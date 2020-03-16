import React, { Component } from 'react'
import Slider from 'react-slick';

import { BaseUrl } from '../../../services/axios'
import SliderPlaceholder from '../SliderPlaceholder';

export class LogoSlider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      localStore: [],
      isLoading: true,
    }
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
    const settings = {
      dots: false,
      // className:"slider variable-width",
      infinite: true,
      arrows: false,
      speed: 1500,
      autoplay:true,
      autoplaySpeed:1500,
      slidesToScroll: 1
    };

    const { errors } = this.props
    if (this.state.isLoading) {
      return (
        <div id="mobileLogoSlider" 
          style={{
            margin:"150px 0 0 0", 
            height:"94px", 
            background: "#E9E9E9", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center"
          }}>
          <Slider
            {...settings}
            centerMode={true}
            slidesToShow={3}
            lazyLoad={true}
            centerPadding={25}
          >
            <div>
              <SliderPlaceholder color="#CC9980" width="50px" height="50px" text="Server Error 500" />
            </div>
            <div>
              <SliderPlaceholder color="#CC9980" width="50px" height="50px" text="Server Error 500" />
            </div>
            <div>
              <SliderPlaceholder color="#CC9980" width="50px" height="50px" text="Server Error 500" />
            </div>
            <div>
              <SliderPlaceholder color="#CC9980" width="50px" height="50px" text="Server Error 500" />
            </div>
            <div>
              <SliderPlaceholder color="#CC9980" width="50px" height="50px" text="Server Error 500" />
            </div>
          </Slider>
        </div>
      )
    }

    return(
      <div id="mobileLogoSlider" style={{margin:"150px 0 0 0", height:"100%"}}>
        <Slider {...settings}
          centerMode={true}
          slidesToShow={3}

        >
          {this.state.localStore.leng && this.state.localStore.map((item, i) => (
            <a href={item.link} key={i}>
                <img style={{width: "inherit"}} src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} />
            </a>
          ))}
        </Slider>
      </div>
    )
  }
}
export default LogoSlider