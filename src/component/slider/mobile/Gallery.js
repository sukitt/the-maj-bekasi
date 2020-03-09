import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../../services/axios'

import '../assets/css/mobileStyles.css'

// dummy Data
import Gal1 from './galleryDummy/1.svg'
import Gal2 from './galleryDummy/2.svg'
import Gal3 from './galleryDummy/3.svg'


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
            <Caps1>Gallery</Caps1>
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
                                alt={item.nama + '-' + item.unit.unit_name} 
                                style={{width:228}}
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