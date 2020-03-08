import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import DropdownCicilan from '../DropdownCicilan'
import DropdownKredit from '../DropdownKredit'
import DropdownBunga from '../DropdownBunga'
import Base from './Base'


export class Simulasi extends Base {
    
    render() {
        return (
            <D backgroundColor="#12284C" padding="10%">
                <H2>Simulasi KPA Studio A</H2>
                <H3>Estimasi Cicilan Bulanan</H3>
                <H1>IDR 18.046.057</H1>

                <div style={{margin: "67px auto", maxWidth:800}}>
                    <Row>
                        <Col style={{marginBottom:"53px"}} ><P>Harga Unit</P></Col>
                        <Col style={{marginBottom:"53px"}}><P>IDR 263.500.000</P></Col>
                        
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>DP 20%</P></Col>
                        <Col style={{marginBottom:"53px"}}><P>IDR 52.700.000</P></Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Jumlah Pinjaman</P></Col>
                        <Col style={{marginBottom:"53px"}}><P>IDR 210.800.000</P></Col>
                    </Row>

                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Cicilan DP</P></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownCicilan
                                value={this.state.cicilan}
                                // defaultValue={12}
                                onChange={(e) => this.setState({cicilan: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Tenor Kredit</P></Col>
                        <Col style={{marginBottom:"53px"}}>
                            <DropdownKredit
                                value={this.state.kredit}
                                // defaultValue={1}
                                onChange={(e) => this.setState({kredit: e.target.value})}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginBottom:"53px"}}><P>Bunga</P></Col>
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
        fontSize: "2.125em",
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
        fontSize: "17px",
        textAlign: 'center',
        color: '#CC9980',
        letterSpacing: "2px",
        margin: props.margin,
        padding: props.padding
    })
)

const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "21px",
        color: "#FFFFFF"
    })
)
