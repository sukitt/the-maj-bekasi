import React, { useState, useEffect, Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'

import './assets/css/style.css'
import { SliderPlaceholder } from '../base/loader/ImagePlaceholder'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const Arrows = styled.div({
    display: "inline-block",
    top:"40%",
    transition:".3s all",
    width:"70px",
    height:"70px",
    background:"#CC9980",
    color: "#fff",
    textDecoration: "none",
    padding: "25px",
    borderRadius: "50%",
    boxShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
    right:"10%",
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
      left: "30%",
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

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  const Arrows = styled.div({
    display: "inline-block",
    top:"40%",
    transition:".3s all",
    width:"70px",
    height:"70px",
    background:"#CC9980",
    color: "#ffffff",
    textDecoration: "none",
    padding: "30px",
    zIndex:"1",
    borderRadius:"50%",
    left:"10%",
    boxShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
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
      left: "40%",
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

const H4 = styled.h4({
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "14px",
  lineHeight: "16px",
  textTransform: "uppercase",
  color: "#12284C",
})

const P = styled.p({
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "21px",
  color: "#12284C",
})

const Img = styled.img({
  margin:"0px auto",
  width: "100%"
})

export class Gallery extends Component {
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
  }
  
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "250px", //see inside style.css
      slidesToShow: 1,
      speed: 1500,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    if (this.state.isLoading) {
      return (
        <Container id="gallery" margin="100px auto" padding="38px 0 0 0">
          <H2>Gallery</H2>
          <div style={{display: "flex",margin: "29px auto", justifyContent: "center"}}>
            <SliderPlaceholder color="#CC9980" width="980px" height="520px" text="Server Error 500" />
          </div>
        </Container>
      )
    }

    return(
      <Container id="gallery" margin="100px auto">
        <Slider {...settings}>
          {this.state.localStore.length && this.state.localStore.map((item, i) => (
            <div key={i} className="tes">
                  <Img src={BaseUrl + '/storage/' + item.gambar} alt={item.nama + '-' + item.unit.unit_name} />
                <div style={{marginTop:"50px", textAlign:"center"}}>
                  <H4>{item.nama} - {item.unit.unit_name}</H4>
                  <P style={{margin:"20px auto", maxWidth:"900px"}}>{item.deskripsi}</P>
                </div>
            </div>
          ))}
        </Slider>
      </Container>
    )
  }
}

const Container = styled.div(
  props => ({
    background: "#E0E0E0",
    margin: props.margin,
    padding: props.padding,
  })
)

const H2 = styled.h2(
  props => ({
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "28px",
    color: "#232323",
    margin: props.margin,
    padding: props.padding,
    textTransform: "uppercase",
    textAlign: "center",
  })
)
export default Gallery