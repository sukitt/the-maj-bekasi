import React, { Component } from 'react';
import Slider from 'react-slick';

import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { BaseUrl } from '../../services/axios';

 
  function NextArrow(props) {
    const { className, style, onClick } = props;
    const Arrows = styled.div({
      display: "inline-block",
      width:"70px",
      height:"70px",
      background:"#CC9980",
      color: "#ffffff",
      textDecoration: "none",
      padding: "30px",
      '&:hover': {
        background:"#ffffff",
        color: "#000"
      },
      '&:before': {
        padding: "8px",
        borderRight: "4px solid",
        borderBottom: "4px solid",
        borderRadius: "4px",
        content: `'' !important`,
        display: "block",
        top: "35%",
        left: "35%",
        position: "absolute",
        '-moz-transform': "rotate(310deg)",
        '-o-transform': "rotate(310deg)",
        '-webkit-transform': "rotate(310deg)",
        transform: "rotate(310deg)",
        color:"inherit"
      }
    });
    return (
      <Arrows
        className={className}
        style={{ 
          ...style,
        }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    const Arrows = styled.div({
      display: "inline-block",
      width:"70px",
      height:"70px",
      background:"#CC9980",
      color: "#ffffff",
      textDecoration: "none",
      padding: "30px",
      zIndex:"1",
      '&:hover': {
        background:"#ffffff",
        color: "#000"
      },
      '&:before': {
        padding: "8px",
        borderRight: "4px solid",
        borderBottom: "4px solid",
        borderRadius: "4px",
        content: `'' !important`,
        display: "block",
        top: "35%",
        left: "35%",
        position: "absolute",
        '-moz-transform': "rotate(135deg)",
        '-o-transform': "rotate(135deg)",
        '-webkit-transform': "rotate(135deg)",
        transform: "rotate(135deg)",
        color:"inherit"
      }
    });
    return (
      <Arrows
        className={className}
        style={{ 
          ...style,
        }}
        onClick={onClick}
      />
    );
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
  
  class HeadSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
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
        <Slider {...settings}>
          {console.log(store)}
          {store.map((item, i) => (
            <div style={containerStyle} key={i}>
              <img style={imgStyle} src={BaseUrl + '/storage/' + item.image} alt="slider-1" />
              <Col style={{height:"100px"}}>
                <div style={captionContainer}>
                  <h2 style={captionTextStyle}>
                    {item.caption}
                  </h2>
                  <a href={item.link} style={captionButtonStyle}>{item.button_text}</a>
                </div>
              </Col>
            </div>
          ))}
        </Slider>
      )
    }
  }

export default HeadSlider