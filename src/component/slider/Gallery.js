import React, { useState, useEffect, Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'

import './assets/css/style.css'
import { SliderPlaceholder } from '../base/loader/ImagePlaceholder'
import nextIcon from '../../assets/next.svg'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const Arrows = styled.div({
    display: "inline-block",
    top:"101%",
    transition:".3s all",
    width:"40px",
    height:"40px",
    background:"none",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "50%",
    right:"40%",
    '&:hover': {
      background:"#cc9980",
      color: "#000"
    },
    '&:before': {
      content: `url(${nextIcon}) !important`,
      display: "block",
      top: "15%",
      left: "40%",
      position: "absolute",
      '-moz-transform': "rotate(360deg)",
      '-o-transform': "rotate(360deg)",
      '-webkit-transform': "rotate(360deg)",
      transform: "rotate(360deg)",
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
    top:"101%",
    transition:".3s all",
    width:"40px",
    height:"40px",
    background:"none",
    color: "#ffffff",
    textDecoration: "none",
    zIndex:"1",
    borderRadius:"50%",
    left:"40%",
    '&:hover': {
      background:"#cc9980",
      color: "#000"
    },
    '&:before': {
      padding: "8px",
      content: `url(${nextIcon}) !important`,
      display: "block",
      top: "15%",
      left: "20%",
      position: "absolute",
      '-moz-transform': "rotate(180deg)",
      '-o-transform': "rotate(180deg)",
      '-webkit-transform': "rotate(180deg)",
      transform: "rotate(180deg)",
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
      indexActive: 0,
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

    return(
      <Container id={this.props.id} ref={this.props.galeriRef} padding="36px 0px 34px 0px" margin="227px auto">
        <H2>Galeri</H2>
        <Slider {...settings}
          afterChange={index => this.setState({indexActive:index})}
        >
          {this.state.localStore.length && this.state.localStore.map((item, i) => (
            <div key={i} className="tes">
                  <Img src={BaseUrl + '/storage/' + item.gambar} alt={item.nama + '-' + item.unit.unit_name} />
            </div>
          ))}
        </Slider>

        {this.state.localStore.length && this.state.localStore.map((item, i) => {
          if (i === this.state.indexActive) {
            return (
              <div style={{textAlign:"center"}}>
                <p style={{fontSize: "14px", lineHeight: "16px", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "30px"}}>{item.nama} - {item.unit.unit_name}</p>
                <p style={{fontSize: "14px", lineHeight: "16px", color: "#FFFFFF"}}> {i+1} | {this.state.localStore.length} </p>
              </div>
            )
          }
        })}
      </Container>
    )
  }
}

const Container = styled.div(
  props => ({
    background: "#12284C",
    margin: props.margin,
    padding: props.padding,
    height:"942px",
  })
)

const H2 = styled.h2(
  props => ({
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "28px",
    color: "#FFFFFF",
    margin: props.margin,
    padding: props.padding,
    textAlign: "center",
  })
)
export default Gallery