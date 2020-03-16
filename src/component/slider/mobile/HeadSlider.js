import React, { Component } from 'react';
import Slider from 'react-slick';
import { Col, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import { BaseUrl } from '../../../services/axios';
import '../assets/css/mobileStyles.css'

export class HeadSlider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      localStore: [],
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store !== prevState.localStore) {
      return {
        localStore: nextProps.store
      }
    }
    return null
  }
  
  render() {
    
    const { errors } = this.props
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
      <div id="mobile-head-slider">
          <Carousel 
            nextIcon={null}
            prevIcon={null}
          >
          {this.state.localStore && this.state.localStore.map((item, i) => {
            return (
              <Carousel.Item>
                <img
                  style={{
                    width: "100%",
                    height: "280px"
                  }}
                  className="d-block w-100"
                  src={`${BaseUrl}/storage/${item.image.replace(/\\/g, "/")}`}
                  alt="image slider"
                />
                <Carousel.Caption style={{margin: "0 0 58px 0"}}>
                  <H2>{item.caption}</H2>
                  <B>Bandingkan</B>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
          </Carousel>
      </div>
    )
  }
}
  
  const H2 = styled.h2(
    props => ({
      fontStyle: "normal",
      fontWeight: "bold",
      width: "300px",
      fontSize: "22px",
      lineHeight: "28px",
      color: "#FFFFFF",
      textShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
      letterSpacing: "2px",
      margin: props.margin,
      padding: props.padding,
    })
  )

  const UL = styled.ul`
    bottom: 30px;
    display: inline;
  `;

  const B = styled.button(
    props => ({
      backgroundColor: "transparent",
      border: "1px solid #FFFFFF",
      width: "157.26px",
      height: "40px",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "18px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      margin: props.margin,
      padding: props.padding,
    })
  )

  const P = styled.span`
    text-transform: uppercase;
    font-size: 80%;
    text-align: center;
    letter-spacing: 2px;
    color: #FFFFFF;
  `;

export default HeadSlider