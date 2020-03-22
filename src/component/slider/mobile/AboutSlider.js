import React, { Component } from 'react'
import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap'

import Leopalace from '../../assets/partnership-image/Logo_Leopalace.svg'
import TheMaj from '../../assets/partnership-image/Logo_The_MAJ.svg'
import Cgs from '../../assets/partnership-image/Logo_CGS.svg'
import Indopora from '../../assets/partnership-image/Logo_Indopora.svg'
import Btn from '../../assets/partnership-image/Logo_BTN.svg'
import Mandiri from '../../assets/partnership-image/Logo_Mandiri.svg'
import { Link } from 'react-router-dom';

export class MobileAboutSlider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            indexActive: 0,
        }
    }
    
    render() {
        const { store } = this.props
        return (
            <Container margin="51.87px 50px">
                <h1 className="text-center">Visi Kami</h1>
                <Content margin="37px 0px 34px 0px">
                    {store && store.map((data, i) => {
                        return <P key={i} margin="30.79px 0 0 0">{data.tentang_kami}</P>
                    })}
                    <A margin="15px 0 0 0" padding="3px 3px 10px 3px" to="/tentang-kami">Read More</A>
                </Content>
                <Row>
                    <Col xs={4}>
                        <a href="#leopalace"><Img src={Leopalace} alt="Leopalace Logo" /></a>
                    </Col>
                    <Col xs={4}>
                        <a href="/"><Img src={TheMaj} alt="TheMaj Logo" /></a>
                    </Col>
                    <Col xs={4}>
                        <a href="#cgs"><Img src={Cgs} alt="central graha sejahtera Logo" /></a>
                    </Col>
                    <Col xs={4}>
                        <a href="#indopora"><Img src={Indopora} alt="Indopora Logo" /></a>
                    </Col>
                    <Col xs={4}>
                        <a href="#btn"><Img src={Btn} alt="BTN Logo" /></a>
                    </Col>
                    <Col xs={4}>
                        <a href="#mandiri"><Img src={Mandiri} alt="Mandiri Logo" /></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
    })
)

const Content = styled.div(
    props => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: props.padding,
        margin: props.margin,
    })
)

const P = styled.p`
    margin-left:auto;
    margin-right:auto;
    width:230px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    text-align: justify;
    color: rgba(0, 0, 0, 0.75);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

const A = styled(Link)(
    props => ({
        borderBottom: "1px solid #CC9980",
        fontSize: "11px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "13px",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#CC9980",
        alignSelf: "center",
        letterSpacing: "1px",
        margin: props.margin,
        padding: props.padding,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.75)",
        }
    })
)
const Img = styled.img`
    width:100%;
    margin: 0px auto;
    filter: grayscale(100%);
    transition: .3s all;
    &:hover {
    filter: grayscale(0%);
  }
`;

export default MobileAboutSlider
