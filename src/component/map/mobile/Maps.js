import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Slider from 'react-slick'
import Marker from '../Marker'
import { Col, Row, Button } from 'react-bootstrap'
import { BaseUrl } from '../../../services/axios'

export default class Maps extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: -6.23986,
        lng: 106.99640
      },
      zoom: 13
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const { store, errors } = this.props
    if (Object.keys(errors).length) {
      return (
        <div>
          <h4>Errors in Maps</h4>
          <p>{errors.code}</p>
          <p>{errors.status}</p>
        </div>
      )
    }
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    };
    return(
      <div className="container-2">
        <h5 style={{color:"#CC9980", textAlign:"center", textTransform:"uppercase", fontSize:14}}>lokasi</h5>
        <h3 style={{margin:"11px auto",maxWidth:240, textAlign:"center"}}>Kenyamanan dan kemudahan menantimu di 'Planet' Bekasi.</h3>
        <Slider ref={c => (this.slider = c)} {...settings}>
            {store.map((item,i) => {
              return(
                <div>

                  <div style={{height:200}}>
                    <GoogleMapReact 
                      bootstrapURLKeys={{key:""}}
                      defaultCenter={this.state.center}
                      defaultZoom={this.state.zoom}
                    >
                      {item.marker.map((mark, m) => {
                        return(
                          <Marker
                            key={mark.id}
                            lat={mark.latitude}
                            lng={mark.longitude}
                            text={mark.name}
                            icon={mark.marker_icon}
                          />
                        );
                      })}
                    </GoogleMapReact>
                    <Col className="d-flex mx-auto" style={{maxWidth:180, marginTop:30}}>
                      <button style={{backgroundColor:"transparent", color:"#000"}} onClick={this.next} ><i className="fas fa-caret-left fa-2x"></i></button>
                      <p style={{fontSize:13, textAlign:"center", textTransform:"uppercase", margin:"10px"}}>{item.name}</p>
                      <button style={{backgroundColor:"transparent", color:"#000"}} onClick={this.previous} ><i className="fas fa-caret-right fa-2x"></i></button>
                    </Col>
                    <div style={{marginBottom:"13px"}}>
                      {item.marker.slice(0,4).map((est, e) => {
                        return(
                          <Col className="d-flex my-3" style={{marginLeft:"5%", marginRight:"5%", padding:""}}>
                            <img style={{width:"30px", height:"30px"}} src={BaseUrl + '/storage/' + est.marker_icon} alt="location icon" />
                            <h6 style={{padding:"5px 0px", margin:0}}>
                              <b style={{color:"#cc9980"}}>± {est.estimasi} Menit Ke</b> {est.name}
                            </h6>
                          </Col>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
    )
  }
}