import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'

import './assets/css/style.css'


const Gallery = (props) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    const Arrows = styled.div({
      display: "inline-block",
      width:"70px",
      height:"70px",
      background:"#CC9980",
      color: "#ffffff",
      textDecoration: "none",
      padding: "30px",
      right:"0",
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
  
  const PrevArrow = (props) => {
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
      left:"0",
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

  const H4 = styled.h4({
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "uppercase",
    color: "#12284C",
  })

  const P = styled.p({
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "21px",
    color: "#12284C",
  })

  const Img = styled.img({
    maxWidth:"1000px"
  })
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const { store, errors } = props
  if (Object.keys(errors).length) {
    return (
      <div>
        <h4>Errors in Gallery</h4>
        <p>{errors.code}</p>
        <p>{errors.status}</p>
      </div>
    )
  }

  return(
    <div id="gallery">
      <Slider {...settings}>
        {console.log(store)}
        {store.map((item, i) => (
              <div>
                <div key={i}>
                  <div>
                    <Img src={BaseUrl + '/storage/' + item.gambar} alt={item.nama + '-' + item.unit.unit_name} />
                  </div>
                </div>
              </div>
            ))}
      </Slider>
    </div>
  )
}
export default Gallery

{/* <div style={{marginTop:"70px", textAlign:"center"}}>
                    <H4>{item.nama} - {item.unit.unit_name}</H4>
                    <P style={{margin:"20px auto", maxWidth:"900px"}}>{item.deskripsi}</P>
                  </div> */}