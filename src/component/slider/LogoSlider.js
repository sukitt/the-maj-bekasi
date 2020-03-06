import React from 'react'
import Slider from 'react-slick';

import { BaseUrl } from '../../services/axios';

const LogoSlider = (props) => {
  const settings = {
    dots: false,
    className:"slider variable-width",
    infinite: true,
    arrows: false,
    speed: 1500,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const { store, errors } = props
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
    <div style={{margin:"150px 0px",height:"260px"}}>
      <Slider {...settings}>
        {console.log(store)}
        {store.map((item, i) => (
          <div key={i}>
            <div>
              <a href={item.link}><img style={{margin:"0px auto", maxHeight:"200px"}} src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} /></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default LogoSlider