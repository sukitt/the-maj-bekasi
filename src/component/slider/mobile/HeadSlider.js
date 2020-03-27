import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import { BaseUrl } from '../../../services/axios';
import {SliderPlaceholder} from '../../base/loader/ImagePlaceholder';
import placeholder from '../assets/header-mobile-placeholder.png';
import '../assets/css/mobileStyles.css';

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

    // if (!this.state.localStore.length) {
    //   return <SliderPlaceholder src={placeholder} color="#CC9980" width="100%" height="280px" opacity=".8" />
    // }

    return (
      <div id="mobile-head-slider">
          <Carousel
            nextIcon={null}
            prevIcon={null}
          >
          {this.state.localStore && this.state.localStore.map((item, i) => {
            return (
              <Carousel.Item>
                {/* <img
                  style={{
                    width: "100%",
                    height: "280px"
                  }}
                  src={`${BaseUrl}/storage/${item.image.replace(/\\/g, "/")}`}
                  alt="slider"
                /> */}
                <Background source={`${BaseUrl}/storage/${item.image.replace(/\\/g, "/")}`} />
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
  const Background = styled.div`
  height: 280px;
  width:100%;
  background: url(${props=>props.source});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  `;
  const H2 = styled.h2(
    props => ({
      fontStyle: "normal",
      fontWeight: "bold",
      maxWidth: "300px",
      fontSize: "22px",
      lineHeight: "28px",
      color: "#FFFFFF",
      textShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
      letterSpacing: "2px",
      margin: props.margin,
      padding: props.padding,
    })
  )
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
export default HeadSlider