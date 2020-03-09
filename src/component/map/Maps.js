import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import MarketplaceMarker from './assets/marketplacemarker.svg'

import Marker from './Marker'
import {BaseUrl} from '../../services/axios'
import { Tabs, Tab, Row, Col, Card } from 'react-bootstrap';

import './assets/css/style.css'
import styled from 'styled-components';

const Gmaps = (props) => {
  return(
    <GoogleMapReact 
        bootstrapURLKeys={{key:""}}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
    >
      {props.location.map(function(item){
        return(
          <Marker
            key={item.id}
            lat={item.latitude}
            lng={item.longitude}
            text={item.name}
            icon={item.marker_icon}
          />
        );
      })}
    </GoogleMapReact>
  );
}
const Distance = (props) => {
  return(
      <Col xs="3" >
        <Card>
          <Card.Body className="p-0" style={{margin:"10px 15px"}}>
            <Row className="mx-0">
              <Col xs="2" className="mx-0 p-0 d-inline-block h-100 align-middle" >
                <img className="my-auto" width="30" height="30" src={BaseUrl + '/storage/' + props.marker} alt="marketplace-marker" />
              </Col>
              <Col xs="10" className="mx-0 " >
                <h6 style={{color:"#cc9980"}}>{props.caption}</h6>
                <h6>{props.description}</h6>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
  )
}

class Maps extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: -6.23986,
        lng: 106.99640
      },
      zoom: 13
    }
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

    return (
      <div class="container-2 px-0" style={{marginTop:127, marginBottom:180, paddingBottom:180}}>
        <h2 style={{
          color: "#CC9980",
          letterSpacing:"3px",
          textTransform:"uppercase",
        }}>Lokasi</h2>
        <h2 style={{
          color: "#000000",
          maxWidth: "312px",
          marginTop:"7px",
        }}>Kenyamanan dan kemudahan
        menantimu di 'Planet' Bekasi.</h2>

        <Tabs defaultActiveKey="Marketplace" className="gmaps" style={{
          marginTop:"35px",
        }}>
          {console.log(store)}
          {store.map((item, i) => (
            <Tab eventKey={item.name} title={item.name} key={i} >
              <div style={{height:"500px", width:"100%"}}>

              <Gmaps
                center={this.state.center}
                zoom={this.state.zoom}
                location={item.marker}
              />
                <Row className="justify-content-center mx-0 mt-5">
                  {item.marker.slice(0, 4).map((marker, i) => (  
                    <Distance 
                      caption={`± ` + marker.estimasi + ` menit ke `}
                      description={marker.name}
                      marker={marker.marker_icon}
                      key={i}
                    />
                  ))}
                </Row>
              </div>
          </Tab>
          ))}
        </Tabs>
      </div>
    )
  }
}
const H5 = styled.h5`
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #000000;
    `;
const DistanceContainer = styled.div`
      margin: 35px 12px;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 11px;
      line-height: 13px;
      text-transform: uppercase;
      color: #000000;
      padding:18px 10px;
`;
export default Maps
