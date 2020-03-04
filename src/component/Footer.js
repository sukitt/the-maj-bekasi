import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SubscribeForm from './form/Base'
import Img1 from './assets/footer-image/1.svg'
import Img2 from './assets/footer-image/partof.png'
import styled from 'styled-components'


const Footer = props => {
    return (
        <div style={{ 
            height: 550,
            backgroundColor: '#232323',
            display: 'flex',
        }}>
            <div style={{
                margin: '137px 129px 153px 59px'
            }}>
                <Row>
                    <Col sm={3}>
                        <img style={{
                                width: 296                                  
                            }} src={Img1} alt="logo2"
                        />
                        <img style={{marginLeft:28}} src={Img2} alt="Part of The Maj Group" />
                        <Sosmed style={{marginLeft: 25}} />
                    </Col>
                    <Col sm={2}>
                        <Join />
                    </Col>
                    <Col sm={3}>
                        <Explore />
                    </Col>
                    <Col sm={4}>
                        <p style={caption}>Subscribe For Exclusive News & Offers</p>
                        <div>
                            <SubscribeForm
                                {...props}
                            >
                                <Button
                                    type='submit'
                                    style={{
                                        width: 120,
                                        height: 40,
                                        backgroundColor: '#FEFEFE',
                                        borderColor: 'transparent',
                                        fontFamily: 'Source Sans Pro',
                                        fontStyle: 'bold',
                                        fontSize:  13,
                                        textAlign: 'center',
                                        letterSpacing: 2,
                                        textTransform: 'uppercase',
                                        color: '#000000'
                                    }}>Subcribe</Button>
                            </SubscribeForm>
                        </div>
                        <p style={{...p, marginTop: 14}}>
                            By entering your details you consent to be contacted via email by the Maj group with offers and updates. To opt out, use the unsubscribe link or email themaj@mail.com. 
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const Sosmed = props => (
    <Row style={{maxWidth:150, marginLeft:28, marginTop:50}}>
        <A href="#linkto" ><i className="fab fa-instagram"></i></A>
        <A href="#linkto"><i className="fab fa-twitter"></i></A>
        <A href="#linkto" ><i className="fab fa-facebook-f"></i></A>
    </Row>
)

const Join = () => (
    <>
        <p style={caption}>Join Our Family</p>
        <ul style={{...p, ...ul}}>
            <Li><A href="#linkto">Carrers</A></Li>
            <Li><A href="#linkto">Investors</A></Li>
        </ul>
    </>
)

const Explore = () => (
    <>
        <p style={caption}>
            Explore Our World
        </p>
        <ul style={{...p, ...ul}}>
            <Li><A href="#linkto">Contact Us</A></Li>
            <Li><A href="#linkto">Ancora Capital Management</A></Li>
            <Li><A href="#linkto">Media Center</A></Li>
            <Li><A href="#linkto">Privacy</A></Li>
            <Li><A href="#linkto">Terms and Conditions</A></Li>
        </ul>
    </>
)


const caption = {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: '16px',
    textTransform: "uppercase",
    color: "#FFFFFF",
}

const p = {
    fontFamily: 'Nunito Sans',
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
const Li = styled.li({
    marginTop:"11px",
})
const ul = {listStyleType: 'none',marginTop: 26, padding: 0, marginBottom: 11}
// const li = {display: 'inline'}

export default Footer