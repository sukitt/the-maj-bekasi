import React, { Component } from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';

class Base extends Component {
    render() {
        return (
            <div style={{...this.props.containerStyle}}>
                <div className='container'>
                    <h2>{this.props.title}</h2>
                </div>
                <div id="galery" style={this.props.galeryContainer}>
                    <Slider {...this.props.settings}>
                        {this.props.children}
                    </Slider>
                </div>
            </div>
        )
    }
}

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

export default Base;
