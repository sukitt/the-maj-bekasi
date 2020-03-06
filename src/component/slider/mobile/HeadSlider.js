import React, { Component } from 'react';
import Slider from 'react-slick';

import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BaseUrl } from '../../../services/axios';

  export class HeadSlider extends Component {
    constructor(props) {
      super(props)
      this.titleButton = ''
    }
    
    render() {
      
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

      return (
        <>
        {/* <Slider {...settings}>
          {store && store.map((item, i) => {
            let img = item.image.replace(/\\/g, '/');
            this.titleButton = item.caption
            return (
              <SliderImg {...this.props} store={store}  />
            )
          })}
        </Slider> */}
        <SliderImg  {...this.props} store={store}  />

        {/* <H2>{this.titleButton}</H2>
        <B>Bandingkan</B> */}
        </>
      )
    }
  }

  const settings = {
    dots: true,
    // infinite: true,
    appendDots: function(i) {
      return (
        <UL className="customDots">
          {i}
        </UL>
      );
    },
    dotsClass:'slick-dots my-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
  };

  const UL = styled.ul`
    bottom: 30px;
    display: inline;
  `;

  const H2 = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 150%;
    line-height: 28px;
    color: #FFFFFF;
    margin: 10% 0 5% 5%;
    width: 60%;
    text-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
  `;

  const B = styled.button`
    /* white */
    border: 1px solid;
    border-color: #FFFFFF;
    background-color: transparent; 
    width: 157.26px;
    height: 40px;
    margin: 0 0 10% 5%;
  `;

  const P = styled.span`
    text-transform: uppercase;
    font-size: 80%;
    text-align: center;
    letter-spacing: 2px;
    color: #FFFFFF;
  `;

  const SliderImg = props => (
    <Slider {...settings}>
      {/* <div style={props.containerStyle}> */}
              {props.store && props.store.map((d, i) => (
                <div>
                  <div 
                    style={{
                      padding: 25,
                      backgroundImage: `url(${BaseUrl}/storage/${d.image.replace(/\\/g, '/')})`, 
                      backgroundRepeat: 'no-repeat',
                      width: 'auto',
                      height: 'auto',
                      backgroundPosition: 'unset',
                      BackgroundSize: 'cover'
                    }} 
                  >
                  <H2>{d.caption}</H2>
                  <B><P>Bandingkan</P></B>
                  </div>
                </div>
              ))}
        {/* </div> */}
    </Slider>
  )


export default HeadSlider