import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

import SubscribeForm from '../form/Base'
import Img1 from '../assets/footer-image/1.svg'
import Img2 from '../assets/footer-image/partof.svg'
import Inst from '../assets/footer-image/brand/instagram.svg'
import Fb from '../assets/footer-image/brand/facebook.svg'
import Twitt from '../assets/footer-image/brand/twitter.svg'


const Footer = props => {
    return (
        <D backgroundColor="#232323" padding="140px 150px 59px 150px">
            <Row>
                <Col lg={3}>
                    <img style={{width: '193px'}} src={Img1} alt="logo2" />
                    <SocialMedia margin="25px 0">
                        <A href="#linkto" ><Instagram /></A>
                        <A href="#linkto" ><Facebook /></A>
                        <A href="#linkto" ><Twitter /></A>
                    </SocialMedia>
                </Col>
                <Col lg={2}>
                    <JoinUs caps="Join Our Family" margin="0">
                        <A display="block" href="#linkto"> Carrers </A>
                        <A display="block" href="#linkto"> Inverstor </A>
                    </JoinUs>
                </Col>
                <Col lg={3} style={{padding: "0", margin: "0"}}>
                    <ExploreUs caps="Explore Our World" margin="0">
                    <A display="block" href="#linkto">Contact Us</A>
                    <A display="block" href="#linkto">Ancora Capital Management</A>
                    <A display="block" href="#linkto">Media Center</A>
                    <A display="block" href="#linkto">Privacy</A>
                    <A display="block" href="#linkto">Terms and Conditions</A>
                    </ExploreUs>
                </Col>
                <Col lg={4}>
                    <SubscribeUs caps="Subscribe For Exclusive News & Offers">
                        <D>
                            <SubscribeForm {...props}>
                                <B type="submit">Subcribe</B>
                            </SubscribeForm>
                        </D>
                    </SubscribeUs>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src={Img2} style={{maxWidth: '150px'}} alt="Part of The Maj Group" />
                </Col>
                <Col lg={2}></Col>
                <Col lg={2}></Col>
                <Col lg={4}>
                    <P>
                        By entering your details you consent to be contacted via email by the Maj group with offers and updates. To opt out, use the unsubscribe link or email themaj@mail.com.
                    </P>
                </Col>
            </Row>
            <P textAlign="center" margin="51px 0 0 0">Copyright 2020 All right reserved</P>
        </D>
    )
}

const JoinUs = props => (
    <D {...props}>
        <Caps>{props.caps}</Caps>
        {props.children}
    </D>
)

const ExploreUs = props => (
    <D {...props}>
        <Caps>{props.caps}</Caps>
        {props.children}
    </D>
)

const SubscribeUs = props => (
    <D {...props}>
        <Caps>{props.caps}</Caps>
        {props.children}
    </D>
)

const P = styled.p(
    props =>  ({
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        lineHeight: '21px',
        color: "#FFFFFF",
        padding: props.padding,
        margin: props.margin,
        textAlign: props.textAlign
    })
)

const A = styled.a(
    props => ({
        display: props.display || "inline",
        color:"#fff",
        marginRight:"30px",
        marginBottom: "11px",
        "&:hover":{
            textDecoration:"none"
        }
    })
)

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

const D = styled.div(
    props => ({
        padding: props.padding,
        margin: props.margin /* "315px 0 0" */,
        marginTop: props.marginTop,
        backgroundColor:  props.backgroundColor
    })
)

const Caps = styled.h4({
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: '16px',
    textTransform: "uppercase",
    color: "#FFFFFF",
    marginBottom: "26px"
})

const SocialMedia = styled.div(
    props => ({
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        margin: props.margin
    })
)

const Instagram = styled.img.attrs(props => ({
    src: Inst,
    // width: "8%",
    alt: "instagram"
}))``

const Twitter = styled.img.attrs(props =>({
    src: Twitt,
    // width: "10%",
    alt: "twitter"
}))``

const Facebook = styled.img.attrs(props => ({
    src: Fb,
    // width: "10%",
    alt: "facebook"
}))``

export default Footer