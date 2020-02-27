import React from 'react';
import Slider from 'react-slick';

import imgslider from './assets/slider-1.png';
import { Col } from 'react-bootstrap';

const HeadSlider = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const imgStyle= {
    maxWidth: "1110px",
    maxHeight: "560px",
    width:"100%",
    height:"100%",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.31) 100%)",
    margin: "0px auto"
  }
  const containerStyle={
    margin: "3rem auto 6rem auto",
  }
  const captionContainer = {
    maxWidth: "380px",
    width:"100%",
    background: "#CC9980",
    zIndex:"10",
    marginTop: "-5%",
    marginLeft: "8%",
    display: "block",
    padding:"20px 20px",
    position:"absolute",
  }
  const captionTextStyle={
    fontFamily: "Khula",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "28px",
    color: "#FFFFFF",
    marginBottom: "1.5rem"
  }
  const captionButtonStyle={
    fontFamily: "Source Sans Pro",
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
  return (
    <Slider {...settings}>
      <div style={containerStyle}>
        <img style={imgStyle} src={imgslider} alt="slider-1" />
        <Col style={{height:"100px"}}>
          <div style={captionContainer}>
            <h2 style={captionTextStyle}>
              Lorem
            </h2>
            <a href="#exaomple" style={captionButtonStyle} >Bandingkan</a>
          </div>
        </Col>
      </div>
      <div style={containerStyle}>
        <img style={imgStyle} src={imgslider} alt="slider-1" />
        <Col style={{height:"100px"}}>
          <div style={captionContainer}>
            <h2 style={captionTextStyle}>
            Investasi pasti dengan harga yang sangat kompetitif
            </h2>
            <a href="#exaomple" style={captionButtonStyle} >Bandingkan</a>
          </div>
        </Col>
      </div>
    </Slider>
  )
}
export default HeadSlider