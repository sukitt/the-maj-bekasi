import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Img1 from './assets/footer-image/3.svg'
import Img2 from './assets/footer-image/4.svg'
import SignUpForm from './form/Base'

const Footer2 = props => {
    return (
        <div style={{
            backgroundColor: '#F2E5DF',
            marginTop: 217, 
            height: 730,
            padding: '43px 164px 139px 164px'
            }}>
            <div className="text-center">
                <img src={Img1} style={{width: 'auto'}} alt="footer-log" />
            </div>
            <div style={{
                marginTop: 71, 
                border: '1px solid',
                paddingTop: 100
            }}>
                <Row>
                    <Col sm={3}>
                        <Contact />
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
                            <SignUpForm {...props} />
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

const Contact = props => (
    <>
        <p style={caption}>Contact Us</p>
        <ul>
            <li>Phone <a href='tel:02139712888'>(021) 3971-2888</a></li>
            <li>Email <a href='mailto:sales@themajbekasi.com'>sales@themajbekasi.com</a></li>
            <li>
                <p>
                    Jl.Kemakmuran, Marga Jaya,
                    Bekasi Selatan, Kota Bekasi,
                    Jawa Barat 17141
                </p>
            </li>
            <li>
                <ul>
                    <li><img src={Img2} alt="footer-flag" /></li>
                    <Sosmed />
                </ul>
            </li>
        </ul>
    </>
)

const Sosmed = props => (
    <>
        <li><a href="#linkto" ><i className="fab fa-instagram"></i></a></li>
        <li><a href="#linkto" ><i className="fab fa-facebook-f mx-3"></i></a></li>
        <li><a href="#linkto"><i className="fab fa-twitter"></i></a></li>
    </>
)

const Join = props => (
    <>
        <p style={caption}>Join Our Family</p>
        <ul style={{...p, ...ul}}>
            <li><a style={a} href="#linkto">Carrers</a></li>
            <li><a style={a} href="#linkto">Investors</a></li>
        </ul>
    </>
)

const Explore = props => (
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


const caption = {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: '16px',
    textTransform: "uppercase",
    color: "#000000",
}

const p = {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '26px',
    color: "#000000"
}

const a = {textDecoration: 'none'}
const ul = {marginTop: 26, padding: 0, marginBottom: 11, fontWeight: 'normal'}
const li = {display: 'inline'}

export default Footer2
