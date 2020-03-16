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
                <div >
                    <h1 style={{ color: "#C3C7D1", margin: 0 }}>{props.items.unit_name}</h1>
                    <h5 style={{ fontSize: 16 }}>{props.items.luas} M <sup>2</sup></h5>
                </div>
                <p style={{ fontWeight: "normal", margin: "69px 0px" }}>
                    {props.items.deskripsi}
                </p>
                <Row>
                    <Col>
                        <ul>
                            <li>Kamar Tidur : {props.items.kamar_tidur}</li>
                            <li>Kamar Mandi : {props.items.kamar_mandi}</li>
                            <li>Tempat Meja Makan</li>
                            <li>Tempat Lemari Baju Makan</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Dapur : {props.items.dapur}</li>
                            <li>Tempat TV, Sofa dan Meja</li>
                            <li>Tempat Kompor dan Wastafel</li>
                            <li>Balkon</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "200px", marginTop: "100px" }} src={BaseUrl + '/storage/' + props.items.denah_ruang} alt={'denah ruang' + props.items.unit_name} />
            </Col>
            <Col xs={3}>
                <img style={{ maxWidth: "200px", marginTop: "100px" }} src={BaseUrl + '/storage/' + props.items.denah_bangunan} alt={'denah bangunan' + props.items.unit_name} />
            </Col>
        </Row>
    </>
)