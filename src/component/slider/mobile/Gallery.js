import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../../services/axios'

import '../assets/css/mobileStyles.css'
import placeholder from '../assets/header-mobile-placeholder.png';

// dummy Data
import Gal1 from './galleryDummy/1.svg'
import Gal2 from './galleryDummy/2.svg'
import Gal3 from './galleryDummy/3.svg'
import {SliderPlaceholder} from '../../base/loader/ImagePlaceholder'


export class MobileGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        store: [],
        indexActive: 0,
    }

    this.settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 1500,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 5000,
      arrows: false,
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
    if (!this.state.store.length) {
      return (
        <Container margin="68.93px 0 123px 0px" padding="16px 0 23px 0">
          <Caps1 margin="0 0 22px 0">Gallery</Caps1>
          <SliderPlaceholder color="#CC9980" src={placeholder} width="100%" height="228px" opacity=".6" />
        </Container>
      )
    }

    return(
        <Container margin="68.93px 0 123px 0px" padding="16px 0 23px 0">
            <Caps1 margin="0 0 22px 0">Gallery</Caps1>
            <div id="mobileItemGallery">
                <Slider
                    dots={true}
                    beforeChange={(indexActive) => this.setState({indexActive})} 
                    // className="center"
                    // centerMode={true}
                    infinite={true}
                    slidesToShow={2}
                    speed={1500}
                    autoplay={true}
                    speed={4000}
                    autoplaySpeed={5000}
                    arrows={false}
                    customPaging={(i) => (
                      <div id="dots" />
                    )}
                >
                    {/* {Data && Data.map((item, i) => ( */}
                    {this.state.store.length && this.state.store.map((item, i) => (
                        <div>
                            <img 
                                src={BaseUrl + '/storage/' + item.gambar}
                                alt={item.nama + '-' + item.unit.unit_name} 
                                style={{
                                  width: "228.21px",
                                  height: "228.21px",
                                  margin: "0 8px"
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <Content margin="55.79px 0 0 0">
                {/* {Data.length && Data.map((item, i) => { */}
                {this.state.store.length && this.state.store.map((item, i) => {
                if (i === this.state.indexActive) {
                    return (
                        <>
                            <H4>{item.nama} {item.unit.unit_name}</H4>
                            <P margin="7px auto 23px auto">{item.deskripsi}</P>
                        </>
                    )
                }
                })}
            </Content>
        </Container>
    )
  }
}

const Container = styled.div(
  props => ({
    backgroundColor: "#E0E0E0",
    padding: props.padding,
    margin: props.margin,
  })
)

const Content = styled.div(
  props => ({
    margin: props.margin,
    padding: props.padding,
  })
)

const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        paddin: props.padding
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
        fontSize: "13px",
        lineHeight: "18px",
        color: "#12284C",
        margin: props.margin,
        padding: props.padding,
        textAlign: "justify",
        width: "245px",
        height: "72px",
    })
  )
  
  const Img = styled.img({
    maxWidth:"1000px",
    margin:"0px auto"
  })
  

export default MobileGallery