import React, { Component } from 'react'
import { Tabs, Tab, Row, Col } from 'react-bootstrap'
import DropdownCicilan from './DropdownCicilan'
import DropdownKredit from './DropdownKredit';
import DropdownBunga from './DropdownBunga';

class DenahUnit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cicilan: null,
            kredit: null,
            bunga: null
        }
    }
    
    render() {
        const { store } = this.props

        return (
            <>
                <div 
                    style={{
                        marginTop: 108, 
                        height: 658,
                    }}
                    className="container">
                    <h2>Denah Unit</h2>
                    <Tabs 
                        style={{marginTop: 40}} 
                        defaultActiveKey="studio-a" 
                        id="table">

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
                                            <Row 
                                                id="#data" 
                                                style={{marginTop: 68}}>
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
                    </Tabs>
                </div>
                <div
                    style={{
                        backgroundColor: '#12284C',
                        boxSizing: 'border-box',
                        padding: 59,
                        border: '1px solid',
                        marginTop: 175,
                        height: 520
                    }}>
                        <h2 style={{
                            color: '#FFFFFF',
                            fontFamily: 'Khula',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 22,
                            textAlign: 'center',
                            textTransform: 'uppercase'
                        }}>
                            Simulasi KPA Studio A
                        </h2>
                        <h3 style={{
                                fontFamily: 'Khula',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: 17,
                                textAlign: 'center',
                                color: '#CC9980'
                        }}>
                            Estimasi Cicilan Bulanan
                        </h3>
                        <h1 style={{
                            color: '#FFFFFF',
                            fontFamily: 'Khula',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 34,
                            textAlign: 'center',
                        }}>
                            IDR 18.046.057
                        </h1>

                        <div style={{marginTop: 67}}>
                            <Row>
                                <Col sm={2}><p style={p}>Harga Unit</p></Col>
                                <Col sm={2}><p style={p}>IDR 263.500.000</p></Col>
                                <Col sm={2}><p style={p}>Cicilan DP</p></Col>
                                <Col sm={2}>
                                    <DropdownCicilan
                                        value={this.state.cicilan}
                                        defaultValue={12}
                                        onChange={(e) => this.setState({cicilan: e.target.value})}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}><p style={p}>DP 20%</p></Col>
                                <Col sm={2}><p style={p}>IDR 52.700.000</p></Col>
                                <Col sm={2}><p style={p}>Tenor Kredit</p></Col>
                                <Col sm={2}>
                                    <DropdownKredit
                                        value={this.state.kredit}
                                        defaultValue={1}
                                        onChange={(e) => this.setState({kredit: e.target.value})}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}><p style={p}>Jumlah Pinjaman</p></Col>
                                <Col sm={2}><p style={p}>IDR 210.800.000</p></Col>
                                <Col sm={2}><p style={p}>Bunga</p></Col>
                                <Col sm={2}>
                                    <DropdownBunga
                                        value={this.state.bunga}
                                        defaultValue={5}
                                        onChange={(e) => this.setState({bunga: e.target.value})}
                                    />
                                </Col>
                            </Row>
                        </div>
                </div>
            </>
        )
    }
}

const p = {
    color: '#FFFFFF',
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
}
export default DenahUnit
