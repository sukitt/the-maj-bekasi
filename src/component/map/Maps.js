import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import marketplace from './assets/marketplace.svg'
import hospital from './assets/hospital.svg'
import goverment from './assets/goverment.svg'
import education from './assets/education.svg'
import busway from './assets/busway.svg'
import station from './assets/station.svg'
import tolls from './assets/tolls.svg'
import gor from './assets/gor.svg'

import Marker from './Marker'
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

import './assets/css/style.css'
import GmapsPlaceholder from './assets/gmaps-placeholder.svg'
import styled from 'styled-components';
import { SliderPlaceholder } from '../base/loader/ImagePlaceholder'

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
  font-weight: normal;
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
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: -6.23986,
        lng: 106.99640
      },
      zoom: 13,
      localStore: [],
      isLoading: true,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.store.length !== prevState.localStore.length) {
      return {
        localStore: nextProps.store,
        isLoading: false
      }
    }
  }

  render() {
    const { localStore } = this.state
    
    const setIcon = (icon) => {
      switch (icon) {
        case 'marketplace':
          return marketplace;
        case 'education':
          return education;
        case 'goverment':
          return goverment;
        case 'hospital':
          return hospital;
        case 'busway':
          return busway;
        case 'station':
          return station;
        case 'tolls':
          return tolls;
        case 'gor':
          return gor;
        default:
          return marketplace
      }
    }
    const Gmaps = (props) => {
      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          {props.location.map(function (item) {
            return (
              <Marker
                key={item.id}
                lat={item.latitude}
                lng={item.longitude}
                text={item.name}
                icon={setIcon(item.icon)}
              />
            );
          })}
        </GoogleMapReact>
      );
    }

    const Distance = (props) => (
      <>
        <Content md={3}>
          <Row className="m-0">
            <Col className="text-center" style={{ padding: "5px" }} xs={4}>
              <img width="27" height="27" src={setIcon(props.marker)} alt="marketplace-marker" />
            </Col>
            <Col xs className="p-0">
              <Text>
                <Time>{props.caption}</Time><br />
                {props.description}
              </Text>
            </Col>
          </Row>
        </Content>
      </>
    )
    
    if (this.state.isLoading) {
      return (
        <div ref={this.props.lokasiRef} id={this.props.id} class="container-2 px-0" style={{ marginTop: 157, paddingBottom: 180 }}>
          <h5>Lokasi</h5>
          <h1 style={{ width: "415px" }}>Kenyamanan Dan Kemudahan Menantimu Di 'Planet' Bekasi.</h1>

          <Tabs className="gmaps" style={{
            marginTop: "35px",
          }}>
            <Tab title="Loading..." eventKey="loading">
              <SliderPlaceholder src={GmapsPlaceholder} color="#CC9980" width="980px" height="500px" opacity="0.8" />
            </Tab>
          </Tabs>
        </div>
      )
    }

    return (
      <div ref={this.props.lokasiRef} id={this.props.id} class="container-2 px-0" style={{ marginTop: 157, paddingBottom: 180 }}>
        <h5>Lokasi</h5>
        <h1 style={{ width: "50%" }}>Kenyamanan Dan Kemudahan Menantimu Di 'Planet' Bekasi.</h1>

        <Tabs defaultActiveKey="1" className="gmaps" style={{
          marginTop: "35px",
        }}>

        {localStore.length && localStore.map((item, i) => (
            <Tab eventKey={item.id} title={item.name} key={i} >
              <div style={{ height: "500px", width: "100%" }}>
                <Gmaps
                  center={this.state.center}
                  zoom={this.state.zoom}
                  location={item.marker}
                />
                <Row className="justify-content-center mx-auto mt-5" style={{ maxWidth: "900px" }}>
                  {item.marker.slice(0, 4).map((marker, i) => (
                    <Distance
                      caption={`± ` + marker.estimasi + ` menit ke `}
                      description={marker.name}
                      marker={marker.icon}
                      key={i}
                    />
                  ))}
                </Row>
              </div>
            </Tab>
          ))
        }

        </Tabs>
      </div>
    )
  }
}
export default Maps
