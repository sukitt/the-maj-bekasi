import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../../services/axios'

// dummy Data
import Gal1 from './galleryDummy/1.svg'
import Gal2 from './galleryDummy/2.svg'
import Gal3 from './galleryDummy/3.svg'

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

export class MobileGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        store: [],
        indexActive: 0,
    }

    this.settings = {
        dots: true,
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        speed: 1500,
        nextArrow: false,
        prevArrow: false,
        arrows:false,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store !== prevState.store) {
        return {
            store: nextProps.store
        }
    }

    return null
  }



  render() {
    const { store, errors } = this.props
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
        <div style={{margin:"81px 0 52px 0px", background:"#E0E0E0", padding: "20px"}}>
            <Caps1>Galerry Mobile</Caps1>
            <div id="mobileItemGallery">
                <Slider
                    beforeChange={(indexActive) => this.setState({indexActive})} 
                    {...this.settings}
                >
                    {/* {Data && Data.map((item, i) => ( */}
                    {this.state.store.length && this.state.store.map((item, i) => (
                        <div>
                            <img 
                                src={BaseUrl + '/storage/' + item.gambar} 
                                // src={item.gambar}
                                style={{
                                    width: "100%",
                                    height: "auto",
                                }} 
                                alt={item.nama + '-' + item.unit.unit_name} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div style={{margin: "55.79px 0 0 0"}}>
                {/* {Data.length && Data.map((item, i) => { */}
                {this.state.store.length && this.state.store.map((item, i) => {
                if (i === this.state.indexActive) {
                    return (
                        <>
                            <H4>{item.nama} {item.unit.unit_name}</H4>
                            <P margin="0 0 7px 0">{item.deskripsi}</P>
                        </>
                    )
                }
                })}
            </div>
        </div>
    )
  }
}



const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000"
    })
)

const H4 = styled.h4({
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "16px",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#12284C",
  })
  
  const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#12284C",
        margin: props.margin,
        padding: props.padding
    })
  )
  
  const Img = styled.img({
    maxWidth:"1000px",
    margin:"0px auto"
  })
  

export default MobileGallery