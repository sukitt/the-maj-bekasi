import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'

import Base from './Base'
import MobileReviewUnit from './ReviewUnit'

export class DenahUnit extends Base {
    
    render() {
        return (
            <div id="mobile-denahunit" style={{backgroundColor:"#e9e9e9", padding: "20px"}}>
                <Caps1 padding="0 0 20px 0">Denah Unit</Caps1>

                <Caps2 margin="27px 0 0 0">Pilih Unit</Caps2>
                <Form.Control 
                    style={Select} 
                    as="select" 
                    onClick={this._handleSelect}
                >
                {this.state.localStore && this.state.localStore.map((data, i) => (
                    <option
                        id={!i? "defaultSelect": null}
                        className="tablinks"
                        value={data.unit_name}
                        style={{fontSize: "22px", fontWeight: "bold", lineHeight: "28px", color: "#000000"}}
                    >
                        {data.unit_name}
                    </option>
                ))}
                </Form.Control>
                <div style={{margin: "0 auto"}}>
                {this.state.localStore && this.state.localStore.map((data, i) => (
                    <div style={{margin: "0 auto"}} id={data.unit_name} className="unitContent">
                        <Luas>{data.specs.luas} M<sup>2</sup></Luas>
                        <img src={data.specs.denah_ruang} alt="denah ruang" />

                        <div id="mobile-spec" title="SPESIFIKASI" style={{padding: 20}}>
                            <Caps2 margin="47px 0 19px 0">spesifikasi</Caps2>
                            <P>{data.specs.deskripsi}</P>

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
                                    {data.specs.fasilitas && data.specs.fasilitas.map(d => (
                                        <li style={{ padding: 0, margin: 0}}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div title="REVIEW" style={{margin: "77px 0"}}>
                                <MobileReviewUnit store={data.specs.reviews} />
                            </div>
                        </div>
                    </div>
                ))}
                </div>

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
