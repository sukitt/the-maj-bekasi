import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import Marker from './marker'
import { Tabs, Tab } from 'react-bootstrap';

const Gmaps = (props) => {
  return(
    <Tab eventKey={props.eventKey} title={props.title} style={{height:"500px", width:"100%"}}>
      <GoogleMapReact 
          bootstrapURLKeys={{key:"TheApiKey"}}
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
    </Tab>
  );
}

class Maps extends Component {
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
      <div>
        <h2 style={{
          fontFamily: "Khula",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "22px",
          lineHeight: "28px",
          textTransform: "uppercase",
          color: "#000000",
        }}>Lokasi</h2>
        <h1 style={{
          fontFamily: "Khula",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "30px",
          lineHeight: "41px",
          color: "#000000",
          maxWidth: "428px",
          marginTop:"17px",
        }}>Kenyamanan dan kemudahan
        menantimu di 'Planet' Bekasi.</h1>

        <Tabs defaultActiveKey="marketplace" id="google-maps-api" style={{
          marginTop:"35px"
        }}>
          <Gmaps
            eventKey="marketplace" 
            title="Marketplace" 
            center={this.props.center}
            zoom={this.props.zoom}
            location={marketPlace}
          />
        </Tabs>
      </div>
    )
  }
}
export default Maps
