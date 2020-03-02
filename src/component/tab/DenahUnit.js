import React from 'react'
import { Tabs, Tab, ButtonGroup, Row, Col } from 'react-bootstrap'

const DenahUnit = (props) => {
    const { store } = props
    return (
        <div style={{
            marginTop: 108, 
            height: 658,
            border: '1px solid'
        }}>
            <h2>Denah Unit</h2>
            <Tabs style={{marginTop: 40}} defaultActiveKey="studio-a" id="table">
                {store && store.map((item, i) => (
                    <Tab 
                        key={item.id} 
                        eventKey={item.unit_name.toLowerCase().replace(" ", "-")} 
                        title={item.unit_name}>
                        <div id="spec">
                            <Tabs 
                                style={{marginTop: 75}} 
                                defaultActiveKey={Object.keys(store[i])[5]}>
                                <Tab 
                                    eventKey={Object.keys(store[i])[5]}
                                    title="SPESIFIKASI">
                                    <Row id="#data" style={{marginTop: 68}}>
                                        <Col sm={6}>
                                            <p style={{
                                                marginTop: 68,
                                                fontFamily: 'Nunito Sans',
                                                fontStyle: 'normal',
                                                fontWeight: 'normal',
                                                fontSize: 16
                                            }}>
                                                {item.specs.deskripsi}
                                            </p>
                                            <ul>
                                                <li>Luas : {item.specs.luas} M<sup>2</sup></li>
                                                <li>Kamar Tidur : {item.specs.kamar_tidur}</li>
                                                <li>Dapur : {item.specs.dapur}</li>
                                                <li>Kamar Mandi : {item.specs.kamar_mandi}</li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <p>Image 1</p>
                                        </Col>
                                        <Col>
                                            <p>Image 2</p>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab 
                                    eventKey={Object.keys(store[i])[6]}
                                    title="GALERI">
                                    <p>
                                        Galeri
                                    </p>
                                </Tab>
                            </Tabs>
                        </div>

                    </Tab>
                ))}
                {/* <Tab eventKey="b" title="Studio B">
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="c" title="Studio C" disabled>
                    <p>Lorem</p>
                </Tab>
                <Tab eventKey="d" title="Studio D" disabled>
                    <p>Lorem</p>
                </Tab> */}
                {console.log(store)}
            </Tabs>
        </div>
    )
}

export default DenahUnit
