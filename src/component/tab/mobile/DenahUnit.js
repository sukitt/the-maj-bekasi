import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Slider from "react-slick"
import styled from 'styled-components'
import $ from 'jquery'

import Base from './Base'
import MobileReviewUnit from './ReviewUnit'
import {BaseUrl} from '../../../services/axios'


export class DenahUnit extends Base {

    componentDidMount() {
        setTimeout(() => {
            // document.getElementById("defaultSelect").click()
            $('#defaultSelect').click()
        }, 5000)
    }

    render() {
        return (
            <div id="mobile-denahunit" style={{backgroundColor:"#e9e9e9", padding: "20px"}}>
                <Caps1 padding="0 0 20px 0">Denah Unit</Caps1>

                <Caps2 margin="27px 0 0 0">Pilih Unit</Caps2>
                <Form.Control 
                    disabled={!this.state.storeUnit.length}
                    style={Select} 
                    as="select" 
                    onClick={this._handleSelect}
                    default
                >
                {this.state.storeUnit && this.state.storeUnit.map((data, i) => (
                    <option
                        key={i}
                        id={!i? "defaultSelect": null}
                        className="tablinks"
                        value={data.unit_name.toLowerCase().replace(/\s/g, "-")}
                        defaultValue="studio-a"
                        style={{fontSize: "22px", fontWeight: "bold", lineHeight: "28px", color: "#000000"}}
                    >
                        {data.unit_name}
                    </option>
                ))}
                </Form.Control>
                
                {this.state.storeUnit && this.state.storeUnit.map((d, i) => (
                    <div key={d.id} style={{margin: "0 auto"}} id={d.unit_name.toLowerCase().replace(/\s/g, "-")} className="unitContent">
                        <Luas>{d.specs.luas} M<sup>2</sup></Luas>
                        <div>
                            <Slider 
                                // className="center"
                                dots={false}
                                // focusOnSelect={true}
                                slidesToShow={1}
                                swipeToSlide={true}
                                lazyLoad={true}
                                autoplay={true}
                                arrows={false}
                                autoplaySpeed={5000}
                                speed={1000}
                                pauseOnHover={true}
                            >
                                <div>
                                    <img 
                                        src={BaseUrl + '/storage/' + d.specs.denah_ruang.replace(/\\/g, "/")} 
                                        style={{
                                            margin: "0 auto",
                                            height: "228px",
                                            transform: "rotate(90deg)"
                                        }} 
                                        alt="denah ruang" 
                                    />
                                </div>
                                <div>
                                    <img
                                        src={BaseUrl + '/storage/' + d.specs.denah_bangunan.replace(/\\/g, "/")} 
                                        style={{
                                            margin: "0 auto",
                                            width: "228px",
                                        }} 
                                        alt="denah bangunan" 
                                    />
                                </div>
                            </Slider>
                        </div>
                        <div id="mobile-spec" title="SPESIFIKASI" style={{padding: 20}}>
                            <Caps2 margin="47px 0 19px 0">spesifikasi</Caps2>
                            <P>{d.specs.deskripsi}</P>

                            <div>
                                <ul style={{
                                    height: "100px", 
                                    width: "100%", 
                                    display: "flex", 
                                    flexDirection: "column", 
                                    flexWrap: "wrap",
                                    margin: "0", 
                                    padding: "0",
                                    boxSizing: "border-box"
                                }}>
                                    <li style={{ padding: 0, margin: 0}}>{d.specs.kamar_tidur} Kamar Tidur</li>
                                    <li style={{ padding: 0, margin: 0}}>{d.specs.kamar_mandi} Kamar Mandi</li>
                                    <li style={{ padding: 0, margin: 0}}>{d.specs.dapur} Dapur</li>
                                </ul>
                            </div>

                            <div title="REVIEW" style={{margin: "77px 0"}}>
                                <MobileReviewUnit storeReview={d.gallery} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

// style
const P = styled.p(
    props => ({
        textAlign: "justify",
        fontStyle: "normal",
        fontWeight: "normal",
        color: "#12284C",
        margin: props.margin,
        padding: props.padding
    })
)

const Luas = styled.p(
    props => ({
        fontFamily: "Frank Ruhl Libre",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        textAlign: "center",
        color: "#000000",
        margin: props.margin,
        padding: props.padding
    })
)

const Caps1 = styled.h5(
    props => ({
        borderBottom: "1px solid #C4C9D2",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)

const Caps2 = styled.h6(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "13px",
        textAlign: "center",
        margin: props.margin,
    })
)

const Select = {
    backgroundColor: "transparent", 
    width: "30%",
    height: "auto",
    border: "0",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "9px auto 11px auto"
}

export default DenahUnit
