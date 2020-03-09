import React, { Component } from 'react'
import Slider from 'react-slick';

import { BaseUrl } from '../../../services/axios'

export class LogoSlider extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       storeLogo: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store !== prevState.storeLogo) {
      return {
        storeLogo: nextProps.store
      }
    }
    return null
  }
  
  render() {
    const settings = {
      dots: false,
      // className:"slider variable-width",
      className: "center",
      infinite: true,
      arrows: false,
      speed: 1500,
      autoplay:true,
      autoplaySpeed:1500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const { errors } = this.props
    if (Object.keys(errors).length) {
      return (
        <div>
          <h4>Errors in Partnership Logo</h4>
          <p>{errors.code}</p>
          <p>{errors.status}</p>
        </div>
      )
    }

    return(
      <div style={{margin:"150px 0 0 0", height:"100%", border: "1px solid", display: "flex", flexDirection: "column"}}>
        <Slider {...settings}
          centerMode={true}
        >
          {this.state.storeLogo && this.state.storeLogo.map((item, i) => (
            <a key={i}>
                <img style={{margin:"0px auto", width: "inherit", border: "1px solid", alignSelf: "center"}} src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} />
            </a>
          ))}
        </Slider>
      </div>
    )
  }
}
export default LogoSlider