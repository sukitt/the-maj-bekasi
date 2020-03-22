import React, { Component } from 'react';
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { BaseUrl } from '../../services/axios';
import arrows from './assets/arrows.svg'
import placeholder from './assets/header-placeholder.png'
import {SliderPlaceholder } from '../base/loader/ImagePlaceholder';

  const imgStyle= {
    maxWidth: "1110px",
    maxHeight: "560px",
    width:"100%",
    height:"100%",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.31) 100%)",
    margin: "0px auto"
  }
  const CaptionContainer = styled.div`
    z-index:1;
  `;

  const Content = styled.div`
    background: #CC9980;
    height: 140px;
    width: 380px;
    padding: 12px 15px;
  `;

  const Buttons = styled.button`
    background: #CC9980;
    height:70px;
    width:70px;
    padding: 25px;
    
    border: 0px;
    user-select: none;
    text-align: center;
    display: inline-block;
    color: #fff;
    transition: .15s all;
    font-family: 'Verlag Bold' !important;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    &:hover {
      background: #fff;
      color:#232323;
    }
  `;

  const captionTextStyle={
    color: "#FFFFFF",
    marginBottom: "1.5rem",
    fontWeight:"500"
  }
  const captionButtonStyle={
    fontFamily: "Verlag Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "18px",
    textAlign: "center",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#CC9980",
    width: "180px",
    height: "40px",
    backgroundColor: "white",
    padding: "11px 40px",
    textDecoration: "none",
  }
  const Btn = styled.button`
    border: 0px;
    user-select: none;
    text-align: center;
    display: inline-block;
    color: #fff;
    transition: .15s all;
    font-family: 'Verlag Bold' !important;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
  `;
  const H5 = styled.h5`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
  `;
  const ContentNumber = styled.div`
    height:70px;
    width:90px;
    padding: 25px 20px;
  `;
  
  class HeadSlider extends Component {
    constructor(props){
      super(props);

      this.state = {
        isLoading: true,
        localStore: [],
      }

      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
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

    next() {
      this.slider.slickNext()
    }
    previous() {
      this.slider.slickPrev()
    }
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />
        arrows:false,
      };

      if (this.state.isLoading) {
        return (
          <div style={imgStyle}>
            <SliderPlaceholder src={placeholder} color="#CC9980" width="100%" height="560px" opacity=".8" />
          </div>
        )
      }

      return (
        <Slider ref={c => (this.slider = c)} {...settings} afterChange={index => this.setState({indexActive:index})}>
          {this.state.localStore.length && this.state.localStore.map((item, i) => (
            <div key={i}>
              <img style={imgStyle} src={BaseUrl + '/storage/' + item.image} alt="slider-1" />
              <Col style={{height:"100px"}}>
                <CaptionContainer className="container-2">
                  <Row className="position-absolute" style={{bottom: "30%"}}>
                    <Content>
                      <h2 style={captionTextStyle}>
                          {item.caption}
                        </h2>
                      <a href={item.link} style={captionButtonStyle}>{item.button_text}</a>
                    </Content>
                    <Buttons onClick={this.previous} >
                      <i className="fa fa-chevron-left"></i>
                    </Buttons>
                    <Buttons onClick={this.next}>
                      <i className="fa fa-chevron-right"></i>
                    </Buttons>
                    <ContentNumber>
                      <H5>{i+1} / {this.state.localStore.length}</H5>
                    </ContentNumber>
                  </Row>
                </CaptionContainer>
              </Col>
            </div>
          ))}
        </Slider>
      )
    }
  }

export default HeadSlider