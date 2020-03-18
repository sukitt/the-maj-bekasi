import React from 'react'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'


export const TabSpesifikasi = (props) => (
    <>
        <Row
            id="#data"
            style={{ marginTop: 68 }}>
            <Col sm={6}>
                <div style={{marginBottom:"50px"}}>
                    <H1>{props.unitName}</H1>
                    <h5 style={{ fontSize: 16 }}>{props.items.luas} M <sup>2</sup></h5>
                </div>
                <Row>
                    <Col>
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
                            {props.items.room_list.map((data,index) => (
                                <li key={index} style={{ padding: 0, margin: 0, listStyleType:"none" }}>· {data.quantity + " " + data.name}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "200px", marginTop: "100px" }} src={BaseUrl + '/storage/' + props.items.denah_ruang} alt={'denah ruang' + props.items.unit_name} />
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "150px", position:"absolute", bottom:0 }} src={BaseUrl + '/storage/' + props.items.denah_bangunan} alt={'denah bangunan' + props.items.unit_name} />
            </Col>
        </Row>
    </>
)

const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    color: #C3C7D1;
    margin-bottom:0px;
`;