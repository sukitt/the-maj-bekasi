import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SubscribeForm from '../../form/Base'
import Img1 from '../../assets/footer-image/1.svg'
import Img2 from '../../assets/footer-image/partof.svg'
import styled from 'styled-components'


const Footer = props => {
    return (
        <D>
            <div className="container" style={{margin: '140px auto 40px auto'}}>
                <Row>
                    <Col lg={3} style={{marginBottom:"3rem"}}>
                        <img style={{maxWidth: 245}} src={Img1} alt="logo2" />
                        <Partof>Part Of</Partof>
                        <img className="my-3" src={Img2} alt="Part of The Maj Group" />
                        <Sosmed />
                    </Col>
                    <Col lg={2} style={{marginBottom:"3rem"}}>
                        <Join />
                    </Col>
                    <Col lg={3} style={{marginBottom:"3rem"}}>
                        <Explore />
                    </Col>
                    <Col lg={4} style={{marginBottom:"3rem"}}>
                        <SubscribeText>Subscribe For Exclusive News & Offers</SubscribeText>
                        <div>
                            <SubscribeForm
                                {...props}
                            >
                                <B type='submit'>Subcribe</B>
                            </SubscribeForm>
                        </div>
                        <p style={{...p, marginTop: 14}}>
                            By entering your details you consent to be contacted via email by the Maj group with offers and updates. To opt out, use the unsubscribe link or email themaj@mail.com. 
                        </p>
                    </Col>
                </Row>
                <CopyRight>Copyright 2020 All right reserved</CopyRight>
            </div>
        </D>
    )
}

const Sosmed = props => (
    <Row style={{margin:"1rem 0px"}}>
        <A href="#linkto" ><i className="fab fa-instagram"></i></A>
        <A href="#linkto"><i className="fab fa-twitter"></i></A>
        <A href="#linkto" ><i className="fab fa-facebook-f"></i></A>
    </Row>
)

const Join = () => (
    <>
        <H4>Join Our Family</H4>
        <ul style={{...p, ...ul}}>
            <Li><A href="#linkto">Carrers</A></Li>
            <Li><A href="#linkto">Investors</A></Li>
        </ul>
    </>
)

const Explore = () => (
    <>
        <H4>
            Explore Our World
        </H4>
        <ul style={{...p, ...ul}}>
            <Li><A href="#linkto">Contact Us</A></Li>
            <Li><A href="#linkto">Ancora Capital Management</A></Li>
            <Li><A href="#linkto">Media Center</A></Li>
            <Li><A href="#linkto">Privacy</A></Li>
            <Li><A href="#linkto">Terms and Conditions</A></Li>
        </ul>
    </>
)


const H4 = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 14;
    line-height: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
`;

const SubscribeText = styled.h4`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 26px;
`;

const p = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '21px',
    color: "#FFFFFF"
}

const A = styled.a({
    color:"#fff",
    marginRight:"30px",
    "&:hover":{
        textDecoration:"none"
    }
})

const B = styled.button({
    width: 120,
    height: 40,
    backgroundColor: '#FEFEFE',
    borderColor: 'transparent',
    fontStyle: 'bold',
    fontSize:  13,
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#000000'
})

const D = styled.div({
    height: "100%",
    marginTop: 315 ,
    backgroundColor: '#232323',
    display: 'flex',
})
const Li = styled.li({
    marginTop:"11px",
})
const ul = {listStyleType: 'none',marginTop: 26, padding: 0, marginBottom: 11}
const Partof = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;
    margin-top: 1.5rem;
    margin-bottom:0;
`;

const CopyRight = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    margin-bottom: 50px;
`;

export default Footer