import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Slider from "react-slick"
import styled from 'styled-components'
import $ from 'jquery'

import Base from './Base'
import MobileReviewUnit from './ReviewUnit'
import MobileSimulasi from './Simulasi'
import { BaseUrl } from '../../../services/axios'

import dots from '../assets/dots.svg'


export class DenahUnit extends Base {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true,
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
                isLoading: false,
            }
        }
        return null
    }

    componentDidMount() {
        setTimeout(() => {
            // document.getElementById("defaultSelect").click()
            $('#defaultSelect').click()
        }, 5000)
    }

    render() {
        return (
            <>
                <div id="mobile-denahunit" style={{ backgroundColor: "#e9e9e9", padding: "20px" }}>
                    <Caps1 id="denah" padding="0 0 20px 0">Denah Unit</Caps1>
                    <Caps2 margin="27px 0 0 0">Pilih Unit</Caps2>
                    <Form.Group className="position-relative selectField" style={{width:"max-content", margin:"0px auto"}} controlId="unitField">
                    <Form.Control
                        style={Select}
                        as="select"
                        onClick={(e) => this._handleSelect(e)}
                        default
                        className="fs-22"
                    >
                        {this.state.localStore.length && this.state.localStore.map((data, i) => (
                            <Options
                                key={i}
                                id={!i ? "defaultSelect" : null}
                                className="tablinks"
                                value={data.unit_name.toLowerCase().replace(/\s/g, "-")}
                                defaultValue="studio-a"
                            >
                                {data.unit_name}
                            </Options>
                        ))}
                    </Form.Control>
                    </Form.Group>

                    {this.state.localStore.length && this.state.localStore.map((d, i) => (
                        <div key={d.id} style={{ margin: "0 auto" }} id={d.unit_name.toLowerCase().replace(/\s/g, "-")} className="unitContent">
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
                            <div id="mobile-spec" title="SPESIFIKASI" style={{ padding: 20 }}>
                                <Caps2 margin="47px 0 19px 0">spesifikasi</Caps2>
                                <div>
                                    <ul style={{
                                        height: "130px",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        flexWrap: "wrap",
                                        margin: "0",
                                        padding: "0",
                                        boxSizing: "border-box"
                                    }}>
                                        {d.room_list.map((data,index) => (
                                            <Li key={index} style={{ padding: 0, margin: 0 }}><H6>{data.name}</H6></Li>
                                        ))}
                                    </ul>
                                </div>

                                <div title="REVIEW" style={{ margin: "77px 0" }}>
                                    <MobileReviewUnit storeReview={d.gallery} />
                                </div>
                                <div title="SIMULASI" style={{ margin: "77px 0" }}>
                                    <MobileSimulasi namaUnit={d.unit_name} hargaUnit={d.unit_price} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
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
    width: "100%",
    height: "auto",
    border: "0",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "9px auto 11px auto"
}
const H6 = styled.h6`
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #2D2D2D;
`;
const Li = styled.li`
    max-width:130px;
    padding:0;
    margin-bottom:10px;
    list-style-type:none;
    &:before{
        content: url(${dots});
        padding-right:4px;
        display:inline-block
    }
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #2D2D2D;
`;
const Options = styled.option`
    font-seight: bold;
    line-height: 28px;
    color: #000000;
`;
export default DenahUnit
