import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import MarketplaceMarker from './assets/marketplacemarker.svg'

import Marker from './marker'
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

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
            lat={item.lat}
            lng={item.lng}
            text={item.name}
          />
        );
      })}
    </GoogleMapReact>
  );
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
      margin: 45px 30px;
      max-width:225px;
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
const Distance = (props) => {
  return(
      <DistanceContainer className="col-sm-3" style={props.style}>
        <Row>
          <Col sm="2" style={{fontSize:"24px"}}><img src={MarketplaceMarker} alt="marketplace-marker" /></Col>
          <Col style={{margin:"auto 0px"}}>
            <H5>{props.caption}</H5>
          </Col>
        </Row>
      </DistanceContainer>
  )
}

class index extends Component {
  static defaultProps = {
    center: {
      lat: -6.23986,
      lng: 106.99640
    },
    zoom: 13,
  };

  render() {
    const marketPlace = [
      {
        id:1,
        name:"Mall Sumarecon Bekasi",
        lat: -6.22607,
        lng: 107.00099
      },
      {
        id:2,
        name:"Metropolitan Mall Bekasi",
        lat: -6.24852,
        lng: 106.99073
      },
      {
        id:3,
        name:"Giant Mega Bekasi Hypermall",
        lat: -6.24989,
        lng: 106.99336
      },
    ];

    const education = [
      {
        id:1,
        name:"Universitas Muhammadiyah Jakarta Kampus D Bekasi",
        lat: -6.23674,
        lng: 107.00794
      },
      {
        id:2,
        name:"UNISMA",
        lat: -6.25693,
        lng: 107.00324
      },
      {
        id:3,
        name:"SD Islam Al-Azhar 9",
        lat: -6.27486,
        lng: 106.98913
      },
      {
        id:4,
        name:"BINUS",
        lat: -6.21975,
        lng: 106.99974
      },
      {
        id:5,
        name:"London School",
        lat: -6.24933,
        lng: 107.01660
      },
    ]

    return (
      <div style={{margin:"50px auto", padding:"150px 0px"}}>
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

        <Tabs defaultActiveKey="marketplace" className="gmaps" style={{
          marginTop:"35px",
        }}>
          <Tab eventKey="marketplace" title="Marketplace" style={{height:"500px", width:"100%"}}>
            <Gmaps
              center={this.props.center}
              zoom={this.props.zoom}
              location={marketPlace}
            />
            <Row className="justify-content-center">
              <Distance 
                caption="± 10 Menit ke Metropolitan Mall"
              />
              <Distance 
                caption="± 10 Menit ke Living Plaza"
              />
              <Distance 
                caption="± 2 KM ke Grand Metropolitan"
              />
              <Distance 
                caption="± 2,5 km ke Summarecon Bekasi"
              />
            </Row>
          </Tab>
          <Tab eventKey="education" title="Education" style={{height:"500px", width:"100%"}}>
            <Gmaps
              center={this.props.center}
              zoom={this.props.zoom}
              location={education}
            />
            <Row className="justify-content-center">
              <Distance 
                caption="± 10 Menit ke Metropolitan Mall"
              />
              <Distance 
                caption="± 10 Menit ke Living Plaza"
              />
              <Distance 
                caption="± 2 KM ke Grand Metropolitan"
              />
              <Distance 
                caption="± 2,5 km ke Summarecon Bekasi"
              />
            </Row>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default index
