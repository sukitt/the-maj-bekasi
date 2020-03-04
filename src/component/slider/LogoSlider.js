import React from 'react'
import Slider from 'react-slick';

import img1 from './assets/tmp_partner_logo/sakura.png'
import img2 from './assets/tmp_partner_logo/leopalace.png'
import img3 from './assets/tmp_partner_logo/cgs.png'
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
  // if (Object.keys(errors).length) {
  //   return (
  //     <div>
  //       <h4>Errors in Partnership Logo</h4>
  //       <p>{errors.code}</p>
  //       <p>{errors.status}</p>
  //     </div>
  //   )
  // }
  return(
    <div style={{margin:"150px 0px",height:"260px"}}>
      <Slider {...settings}>
        {console.log(store)}
        {logos.map((item, i) => (
          <div key={i}>
            <div>
              {/* <img src={BaseUrl + '/storage/' + item.gambar} alt={item.nama + '-' + item.unit.unit_name} /> */}
              <a href={item.link}><img style={{margin:"0px auto", maxHeight:"200px"}} src={item.image.img1} alt={item.name} /></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default LogoSlider

const logos = [
  {
    "id":1,
    "name":"Bank BTN",
    "link":"#link",
    "image":{img1},
    "created_at":"2020-03-02 09:43:59",
    "updated_at":"2020-03-02 09:43:59"
  },
  {
    "id":2,"name":"Bank Mandiri","link":"#mandiri",
    "image":{img1},"created_at":"2020-03-02 09:44:17","updated_at":"2020-03-02 09:44:17"
  },
  {
    "id":3,"name":"Central Graga Sejahtera","link":"#linkto",
    "image":{img1},"created_at":"2020-03-02 09:44:43","updated_at":"2020-03-02 09:44:43"
  },
  {
    "id":4,"name":"Leopalace 21","link":"#linkto",
    "image":{img1},"created_at":"2020-03-02 09:45:02","updated_at":"2020-03-02 09:45:02"
  },
  {
    "id":5,"name":"Sakura Project Management","link":"#linkto",
    "image":{img1},"created_at":"2020-03-02 09:45:23","updated_at":"2020-03-02 09:45:23"
  }
]