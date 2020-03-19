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
// const Distance = (props) => {
//   return(
//       <Col xs="3" >
//         <Card>
//           <Card.Body className="p-0" style={{margin:"10px 15px"}}>
//             <Row className="mx-0">
//               <Col xs="2" className="mx-0 p-0 d-inline-block h-100 align-middle" >
//                 <img className="my-auto" width="30" height="30" src={BaseUrl + '/storage/' + props.marker} alt="marketplace-marker" />
//               </Col>
//               <Col xs="10" className="mx-0 " >
//                 <h6 style={{color:"#cc9980"}}>{props.caption}</h6>
//                 <h6>{props.description}</h6>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//       </Col>
//   )
// }

const Distance = (props) => (
  <>
    <Content md={3}>
      <Row className="m-0">
        <Col className="text-center" style={{padding:"5px"}} xs={4}>
          <img width="27" height="27" src={BaseUrl + '/storage/' + props.marker} alt="marketplace-marker" />
        </Col>
        <Col xs className="p-0">
          <Text>
            <Time>{props.caption}</Time><br/>
            {props.description}
          </Text>
        </Col>
      </Row>
    </Content>
  </>
)
const Content = styled(Col)`
  height: 60px;
  border: 1px solid #CC9980;
  box-sizing: border-box;
  max-width:199px;
  width:100%;
  margin-left:12px;
  margin-right:12px;
  padding:9px;
`;
const Text = styled.div`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  color: #000;
  max-width:100px;
`;
const Time = styled.span`
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: #CC9980;
`;


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
      <div id="lokasi" class="container-2 px-0" style={{marginTop:127, marginBottom:180, paddingBottom:180}}>
        <h5>Lokasi</h5>
        <h1 style={{width: "396px"}}>Kenyamanan dan kemudahan menantimu di 'Planet' Bekasi.</h1>

        <Tabs defaultActiveKey="1" className="gmaps" style={{
          marginTop:"35px",
        }}>
          {console.log(store)}
          {store.map((item, i) => (
            <Tab eventKey={item.id} title={item.name} key={i} >
              <div style={{height:"500px", width:"100%"}}>

              <Gmaps
                center={this.state.center}
                zoom={this.state.zoom}
                location={item.marker}
              />
                <Row className="justify-content-center mx-auto mt-5" style={{maxWidth:"900px"}}>
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
export default Maps
