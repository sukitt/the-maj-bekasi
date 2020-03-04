import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import SubscribeForm from './form/Base'
import Img1 from './assets/footer-image/1.svg'
import Img2 from './assets/footer-image/2.svg'


const Footer = props => {
    return (
        <div style={{ 
            height: 550,
            marginTop: 315 ,
            backgroundColor: '#232323',
            display: 'flex',
        }}>
            <div style={{
                margin: '137px 129px 153px 59px'
            }}>
                <Row>
                    <Col sm={3}>
                        <img style={{
                                width: 296,
                                height: 156                                     
                            }} src={Img1} alt="logo2"
                        />
                        <p style={{...p, borderColor: '#FFFFFF', marginLeft: 25}}>Part Of<img style={{width: 'auto',height: 'auto'}} src={Img2}alt="logo3" /></p>
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
                <Row>
                    <Copyright />
                </Row>
            </div>
        </div>
    )
}

const Sosmed = props => (
    <ul style={{...p, ...ul, ...props.style}}>
        <li><a href="#linkto" ><i className="fab fa-instagram"></i></a></li>
        <li><a href="#linkto"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#linkto" ><i className="fab fa-facebook-f mx-3"></i></a></li>
    </ul>
)

const Join = () => (
    <>
        <p style={caption}>Join Our Family</p>
        <ul style={{...p, ...ul}}>
            <li style={li}><a style={a} href="#linkto">Carrers</a></li>
            <li style={li}><a style={a} href="#linkto">Investors</a></li>
        </ul>
    </>
)

const Explore = () => (
    <>
        <p style={caption}>
            Explore Our World
        </p>
        <ul style={{...p, ...ul}}>
            <li>Contact Us</li>
            <li>Ancora Capital Management</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Terms and Conditions</li>
        </ul>
    </>
)

const Copyright= () => (
    <>
        <h6 style={{
            color: '#FFFFFF',
            fontFamily: 'Nunito Sans',
            fontStyle:"normal",
            fontWeight:"normal",
            fontSize: "13px",
            lineHeight: "18px",
            margin: '0 auto'
        }}>
            Copyright 2020 All right reserved
        </h6>
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

const a = {textDecoration: 'none'}
const ul = {listStyleType: 'none',marginTop: 26, padding: 0, marginBottom: 11}
const li = {display: 'inline'}

export default Footer