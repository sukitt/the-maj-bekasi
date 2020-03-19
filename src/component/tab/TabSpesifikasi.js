import React from 'react'
import styled from 'styled-components'
import { BaseUrl } from '../../services/axios'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'

import dots from './assets/dots.svg'

export const TabSpesifikasi = (props) => (
    <>
        <Row
            id="#data"
            style={{ marginTop: 127 }}>
            <Col sm={6}>
                <div style={{marginBottom:"50px"}}>
                    <H1>{props.unitName}</H1>
                    <H5 style={{ fontSize: 16 }}>{props.items.luas} M <sup>2</sup></H5>
                </div>
                <Row>
                    <Col>
                        <ul style={{
                            width: "100%",
                            margin: "0",
                            padding: "0",
                            columnCount:2
                        }}>
                            {props.items.room_list.map((data,index) => (
                                <Li key={index} >{data.quantity + " " + data.name}</Li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "200px" }} src={BaseUrl + '/storage/' + props.items.denah_ruang} alt={'denah ruang' + props.items.unit_name} />
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "150px", position:"absolute", bottom:0 }} src={BaseUrl + '/storage/' + props.items.denah_bangunan} alt={'denah bangunan' + props.items.unit_name} />
            </Col>
        </Row>
    </>
)
const Li = styled.li`
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
const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
    color: #C3C7D1;
    margin-bottom:10px;
`;
const H5 = styled.h5`
    font-family: Proxima Nova !important;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #000000;
`;