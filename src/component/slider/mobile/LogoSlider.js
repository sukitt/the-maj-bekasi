import React, { Component } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

import { BaseUrl } from '../../../services/axios'

export class LogoSlider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       storeLogo: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store !== prevState.storeLogo) {
      return {
        storeLogo: nextProps.store
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
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const { errors } = this.props
    if (Object.keys(errors).length) {
      return (
        <div>
          <h4>Errors in Partnership Logo</h4>
          <p>{errors.code}</p>
          <p>{errors.status}</p>
        </div>
      )
    }

    return(
      <div id="mobileLogoSlider" style={{margin:"150px 0 0 0", height:"100%"}}>
        <Slider {...settings}
          centerMode={true}
        >
          {this.state.storeLogo && this.state.storeLogo.map((item, i) => (
            <A href={item.link} key={i}>
                <Img style={{width: "inherit"}} src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} />
            </A>
          ))}
        </Slider>
      </div>
    )
  }
}
const Img = styled.img`
  filter: grayscale(100);
  transition:.3s all;
  &:hover{
    filter: grayscale(0);
  }
`;
const A = styled.a`
  margin: 0px 15px;
`;
export default LogoSlider