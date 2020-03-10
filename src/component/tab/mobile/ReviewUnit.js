import React, { Component } from "react";
import Slider from "react-slick";
import {BaseUrl} from '../../../services/axios'
import styled from "styled-components"

import '../assets/style.css'

export class MobileReviewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeReview: [],
      nav1: null,
      nav2: null,
      indexActive: 0,
      name: "",
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.storeReview !== state.storeReview) {
      return {
        storeReview: props.storeReview,
      }
    }

    return null
  }

  render() {
    return (
      <>
        <h4 className="text-center">Review Unit</h4>
        <Slider
          asNavFor={this.state.nav2}
          className="center"
          arrows={false}
          centerMode={true}
          centerPadding="1px"
          dots={false}
          fade={true}
          lazyLoad={true}
          slidesToShow={1}
          slidesToScroll={1}
          ref={slider => (this.slider1 = slider)}
        >
            {this.state.storeReview && this.state.storeReview.map((d, i) => (
                <div key={i} >
                    <img src={`${BaseUrl}/storage/${d.gambar.replace(".png", "-mobile.png")}`} alt="review 1" style={{width: "inherit", height: "auto", margin: "0 auto"}} />
                </div>
            ))}
        </Slider>

        <div id="reviewUnitMobile" style={{width: "100%", marginTop: "21px"}}>
            <Slider
              asNavFor={this.state.nav1}
              beforeChange={(e) => this.setState({indexActive: e})}
              dots={false}
              focusOnSelect={true}
              slidesToShow={5}
              swipeToSlide={true}
              arrows={false}
              ref={slider => (this.slider2 = slider)}
              lazyLoad={true}
              autoplay={true}
              autoplaySpeed={2000}
              pauseOnHover={true}
              >
                {this.state.storeReview && this.state.storeReview.map((d, i) => {
                  return (
                    <div key={i}>
                        <img src={`${BaseUrl}/storage/${d.gambar.replace(".png", "-mobile.png")}`} alt="review 2" style={{width: 70, height: 70}} />
                    </div>
                  )
                })}
            </Slider>
        </div>

        {this.state.storeReview && this.state.storeReview.map((d, i) => {
          if (i === this.state.indexActive) {
            return (
              <>
                <Caps1 margin="24px 0">{d.nama}</Caps1>
                <Desc margin="0 0 68px 0">{d.deskripsi}</Desc>
              </>
            )
          }
          return null
        })}
      </>
    );
  }
}

const Caps1 = styled.h5(
  props => ({
    color: "#12284C",
    fontStyle: "normal",
    lineHeight: "14px",
    margin: props.margin,
    textAlign: "center",
  })
)

const Desc = styled.p(
  props => ({
    color: "#12284C",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "18px",
    margin: props.margin,
    textAlign: "justify",
  })
)

export default MobileReviewUnit
