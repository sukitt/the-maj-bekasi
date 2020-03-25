import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { BaseUrl } from '../../../services/axios'

import '../assets/css/mobileStyles.css'
import placeholder from '../assets/header-mobile-placeholder.png';

import {SliderPlaceholder} from '../../base/loader/ImagePlaceholder'


export class MobileGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
        store: [],
        indexActive: 0,
        cPadding:0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    if(window.innerWidth < 375){
      this.setState({cPadding:"15% 0px 0px"})
    }else if(window.innerWidth < 425){
      this.setState({cPadding:"35% 0px 0px"})
    }else{
      this.setState({cPadding:"40% 0px 0px"})
    }
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
    // if (!this.state.store.length) {
    //   return (
    //     <Container margin="68.93px 0 123px 0px" padding="16px 0 23px 0">
    //       <Caps1 margin="0 0 22px 0">Gallery</Caps1>
    //       <SliderPlaceholder color="#CC9980" src={placeholder} width="100%" height="228px" opacity=".6" />
    //     </Container>
    //   )
    // }

    return(
        <Container id={this.props.id} ref={this.props.galeriRef} className="container" margin="0px" padding="44px 0px">
            <Caps1 margin="0 0px 27px 0px">Galeri</Caps1>
            <div id="mobileItemGallery" style={{padding:"0px 0px 0px 30px"}}>
                <Slider
                    dots={false}
                    beforeChange={(indexActive) => this.setState({indexActive})}
                    infinite={true}
                    centerMode={true}
                    centerPadding={this.state.cPadding}
                    slidesToShow={1}
                    speed={1000}
                    arrows={false}
                    customPaging={(i) => (
                      <div id="dots" />
                    )}
                >
                    {/* {Data && Data.map((item, i) => ( */}
                    {this.state.store.length && this.state.store.map((item, i) => (
                        <div>
                            <Background source={BaseUrl + '/storage/' + item.gambar_mobile} />
                        </div>
                    ))}
                </Slider>
            </div>

            <Content margin="51.79px 0 0 0">
              {this.state.store.length && this.state.store.map((item, i) => {
                if (i === this.state.indexActive) {
                    return (
                        <>
                            <P>{item.nama} - {item.unit.unit_name}</P>
                            <p style={{fontSize: "14px", lineHeight: "16px", color: "#FFFFFF", textAlign:"center", letterSpacing:"3px"}}> {i+1} | {this.state.store.length} </p>
                        </>
                    )
                }
                })}
            </Content>
        </Container>
    )
  }
}

const Container = styled.div(
  props => ({
    backgroundColor: "#12284C",
    height:"500px",
    padding: props.padding,
    margin: props.margin,
  })
)

const Background = styled.div`
  width: 228.21px;
  height: 228.21px;
  margin: 0 8px;
  background: url(${props=>props.source});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Content = styled.div(
  props => ({
    margin: props.margin,
    padding: props.padding,
  })
)

const Caps1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  text-transform: capitalize;
  color: #FFFFFF;
  margin: ${props=>props.margin};
  padding: ${props=>props.padding};
`;

const P = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom:31px;
`;
  
export default MobileGallery