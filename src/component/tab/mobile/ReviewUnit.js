import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export class MobileReviewUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
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
    if (props.store !== state.store) {
      return {
        store: props.store,
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
          centerMode={true}
          centerPadding="1px"
          dots={false}
          fade={true}
          lazyLoad={true}
          slidesToShow={1}
          slidesToScroll={1}
          ref={slider => (this.slider1 = slider)}
        >
            {this.state.store && this.state.store.map((d, i) => (
                <div key={i} style={{border: "10px solid", width: "100%", height: "auto", justifySelf: "center"}}>
                    <img src={d.img} alt="review 1" style={{width: "inherit", height: "auto", margin: "0 auto"}} />
                </div>
            ))}
        </Slider>

        <div style={{width: "100%", marginTop: "21px"}}>
            <Slider
              asNavFor={this.state.nav1}
              beforeChange={(e) => this.setState({indexActive: e})}
              className="center"
              centerMode={true}
              centerPadding="130px"
              dots={false}
              focusOnSelect={true}
              slidesToShow={1}
              swipeToSlide={true}
              ref={slider => (this.slider2 = slider)}
              lazyLoad={true}
              autoplay={true}
              autoplaySpeed={2000}
              pauseOnHover={true}
              >
                {this.state.store && this.state.store.map((d, i) => {
                  return (
                    <div key={i}>
                        <img src={d.img} alt="review 2" style={{width: "inherit", height: "auto", margin: "0 auto"}} />
                    </div>
                  )
                })}
            </Slider>
        </div>

        {this.state.store && this.state.store.map((d, i) => {
          if (i === this.state.indexActive) {
            return (
              <>
                <Caps1 margin="24px 0">{d.name}</Caps1>
                <Desc margin="0 0 68px 0">{d.desc}</Desc>
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
