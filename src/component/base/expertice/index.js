import React, { Component } from 'react';
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap';

import { leopalace, theMaj, centralGrahaSejahtera, sakura, indonesiaPondasiRaya, } from './dummydata'


export default class Leopalace extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Container>
                    <Row className="mb-5">
                        <Col md={2} sm={12}>
                            <Img src={leopalace.logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 2, offset: 2 }} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col md={4}>
                            <P>{leopalace.desc}</P>
                        </Col>
                        <Col md={{ span: 2, offset: 2 }} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                        <Col offset={2} md={2} sm={12}>
                            <Img src={leopalace.relation[0].logo} alt="leopalace Logo" />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col sm={12} md={4} className="text-center">
                            <Img style={{width:"150px"}} src={theMaj.logo} alt="the maj logo" />
                        </Col>
                        <Col sm={12} md={8}>
                            <Img src={theMaj.relation} alt="The Maj Group" />
                            <P className="mt-3">{theMaj.desc}</P>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col sm={12} md={4} className="text-center">
                            <Img style={{width:"150px"}} src={centralGrahaSejahtera.logo} alt="CGS logo" />
                        </Col>
                        <Col>
                            <Row>
                                {centralGrahaSejahtera.location.map((data, i) => (
                                    <Col md={6} className="mb-3">
                                        <H5 style={{fontWeight:"bold"}}>{data.name}</H5>
                                        <H5>{data.address}</H5>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col md={4} sm={12} className="text-center"><Img style={{width:"150px"}} src={sakura.logo} alt="Sakura logo" /></Col>
                        <Col style={{columnCount:"2"}}>{sakura.desc}</Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col md={4} sm={12} className="text-center"><Img style={{width:"150px"}} src={indonesiaPondasiRaya.logo} alt="IPR logo" /></Col>
                        <Col>{indonesiaPondasiRaya.desc}</Col>
                    </Row>
                </Container>
            </>
        )
    }
}
const Container = styled.div`
    margin-top:150px;
    margin-bottom:100px;
`;
const Img = styled.img`
    width:100%;
`;
const P = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #232323;
`;
const H5 = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #232323;
`;