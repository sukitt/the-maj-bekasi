import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import DropdownCicilan from '../DropdownCicilan'
import DropdownKredit from '../DropdownKredit'
import DropdownBunga from '../DropdownBunga'


export class Simulasi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cicilan: 0,

        }
    }
    
    render() {
        return (
            <D backgroundColor="#12284C" padding="10%">
                <H2>Simulasi KPA Studio A</H2>
                <H3>Estimasi Cicilan Bulanan</H3>
                <H1>IDR 18.046.057</H1>

                <div style={{margin: "67px auto", maxWidth:800}}>
                    <Row>
                        <Col style={{marginBottom:"53px"}} ><p>Harga Unit</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>IDR 263.500.000</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>Cicilan DP</p></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownCicilan
                                value={this.state.cicilan}
                                // defaultValue={12}
                                onChange={(e) => this.setState({cicilan: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><p>DP 20%</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>IDR 52.700.000</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>Tenor Kredit</p></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownKredit
                                value={this.state.kredit}
                                // defaultValue={1}
                                onChange={(e) => this.setState({kredit: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><p>Jumlah Pinjaman</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>IDR 210.800.000</p></Col>
                        <Col style={{marginBottom:"53px"}}><p>Bunga</p></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownBunga
                                value={this.state.bunga}
                                // defaultValue={5}
                                onChange={(e) => this.setState({bunga: e.target.value})}
                            />
                        </Col>
                    </Row>
                </div>
            </D>
        )
    }
}

export default Simulasi


const D = styled.div(
    props => ({
        padding: props.padding,
        margin: props.margin,
        backgroundColor:  props.backgroundColor,
        /* backgroundColor: '#12284C', */
        // boxSizing: 'border-box',
        // border: '1px solid',
        height: "auto"
    })
)

const H1 = styled.h1(
    props => ({
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 34,
        textAlign: 'center',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const H2 = styled.h2(
    props => ({
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "1.3750em",
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const H3 = styled.h3(
    props => ({
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: "",
        textAlign: 'center',
        color: '#CC9980',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)
