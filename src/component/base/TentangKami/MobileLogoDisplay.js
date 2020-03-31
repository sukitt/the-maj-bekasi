import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import Leopalace from '../../assets/partnership-image/Logo_Leopalace.svg'
import TheMaj from '../../assets/partnership-image/Logo_The_MAJ.svg'
import Cgs from '../../assets/partnership-image/Logo_CGS.svg'
import Indopora from '../../assets/partnership-image/Logo_Indopora.svg'
import Btn from '../../assets/partnership-image/Logo_BTN.svg'
import Mandiri from '../../assets/partnership-image/Logo_Mandiri.svg'

export const MobileLogoDisplay = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={4}>
                        <Img src={Leopalace} alt="Leopalace Logo" />
                    </Col>
                    <Col xs={4}>
                        <Img src={TheMaj} alt="TheMaj Logo" />
                    </Col>
                    <Col xs={4}>
                        <Img src={Cgs} alt="central graha sejahtera Logo" />
                    </Col>
                    <Col xs={4}>
                        <Img src={Indopora} alt="Indopora Logo" />
                    </Col>
                    <Col xs={4}>
                        <Img src={Btn} alt="BTN Logo" />
                    </Col>
                    <Col xs={4}>
                        <Img src={Mandiri} alt="Mandiri Logo" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
const Img = styled.img`
    width:100%;
    margin: 0px auto;
    filter: grayscale(100%);
    transition: .3s all;
    &:hover {
    filter: grayscale(0%);
  }
`;
const Container = styled.div`
  padding-top:127px;
  padding-bottom:172px;
`;