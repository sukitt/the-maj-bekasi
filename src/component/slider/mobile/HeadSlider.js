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
      isLoading:true,
    }
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store.length !== prevState.localStore.length) {
      return {
        localStore: nextProps.store,
        isLoading:false,
      }
    }
    return null
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <>
          <div id="mobile-head-slider">
            <div style={{height:"280px",width:"100%", backgroundColor:"#ccc"}}></div>
          </div>
        </>
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
                <Background source={`${BaseUrl}/storage/${item.image.replace(/\\/g, "/")}`} />
                <Carousel.Caption style={{margin: "0 0 58px 0"}}>
                  <H2>{item.caption}</H2>
                  <B href={item.link}>{item.button_text}</B>
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
  const B = styled.a(
    props => ({
      backgroundColor: "transparent",
      border: "1px solid #FFFFFF",
      width: "157.26px",
      height: "40px",
      fontSize: "13px",
      color:"#fff",
      paddingTop:"11px",
      paddingBottom:"11px",
      paddingLeft:"30px",
      paddingRight:"30px",
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: "18px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      margin: props.margin,
      padding: props.padding,
      "&:hover":{
        color:"#fff",
        textDecoration:"none",
      }
    })
  )
export default HeadSlider