import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

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
    slidesToShow: 4,
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
        {store.map((item, i) => (
          <div key={i}>
            <div>
              <a href={item.link}><Img src={BaseUrl + '/storage/' + item.image} alt={item.name.replace(" ", "-")} /></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
const Img = styled.img`
  margin: 0px auto;
  max-height: 200px;
  filter: grayscale(100%);
  transition: .3s all;
  &:hover {
    filter: grayscale(0%);
  }
`;
export default LogoSlider