import React, { Component } from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import styled from 'styled-components'

import BaseFooter from './BaseFooter'
import Img1 from '../../assets/footer-image/1.svg'
import Img2 from '../../assets/footer-image/partof.svg'
import Instagram from '../../assets/footer-image/brand/instagram.svg'
import Faceook from '../../assets/footer-image/brand/facebook.svg'
import Twitter from '../../assets/footer-image/brand/twitter.svg'
// import Youtube from '../../assets/footer-image/brand/Youtube.svg'


export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            localStore:[],
            show:false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.success !== prevState.show) {
			return {
                show: nextProps.success
			}
        }
        if(nextProps.store !== prevState.localStore){
            return {
                localStore: nextProps.store
            }
        }
        return null;
    }
    render(){

        return (
            <D backgroundColor="#232323" padding="148px 100px 79px" display="flex" className="justify-content-center">
                <div style={{maxWidth: "1110px"}}>
                    <Row>
                        <Col lg={3}>
                            <img style={{width: '193px'}} src={Img1} alt="logo2" />
                            <SocialMedia margin="25px 0">
                                {this.state.localStore.length && this.state.localStore.map((data, i) => (
                                    <A key={i} href={data.link} target="_blank">
                                    <Icon size="25px" fill="#fff" className={`fab fa-${data.icon}`} />
                                </A>   
                                ))}
                            </SocialMedia>
                        </Col>
                        <Col lg={2}>
                            <JoinUs caps="Join Our Family" margin="0">
                                <A display="block" href="#linkto"> Careers </A>
                                <A display="block" href="#linkto"> Investor </A>
                            </JoinUs>
                        </Col>
                        <Col lg={3} style={{padding: "0", margin: "0"}}>
                            <ExploreUs caps="Explore Our World" margin="0">
                            <A display="block" href="#contact-us">Contact Us</A>
                            <A display="block" href="#linkto">Ancora Capital Management</A>
                            <A display="block" href="#linkto">Media Center</A>
                            <A display="block" href="/privacy-policy">Privacy</A>
                            <A display="block" href="#linkto">Terms and Conditions</A>
                            </ExploreUs>
                        </Col>
                        <Col lg={4}>
                            <SubscribeUs caps="Subscribe For Exclusive News & Offers">
                            {this.state.show?(
                                <>
                                    <Alert variant="success" onClose={() => this.setState({show:false})} dismissible>
                                        <Alert.Heading>Terima Kasih!</Alert.Heading>
                                        <p>
                                            Kami akan segera menghubungi anda melalui alamat email yang anda sediakan.
                                        </p>
                                    </Alert>
                                    </>
                                ):(
                                    <></>
                            )}
                                <D>
                                    <BaseFooter {...this.props}>
                                        <B type="submit">subscribe</B>
                                    </BaseFooter>
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
                                By entering your details you consent to be contacted via email by The MAJ Group with offers and 
                                updates. To opt out, use the unsubscribe link or email unsubscribe@themajgroup.com.
                            </P>
                        </Col>
                    </Row>
                    <P textAlign="center" margin="51px 0 0 0">Copyright {`\u00a9`}2020 All rights reserved</P>
                </div>
            </D>
        )
    }
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
        display: props.display,
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

const Icon = styled.i(
    props => ({
        fontSize: props.size,
        color: props.fill,
        "&:hover":{
            color: "#cc9980"
        }
    })
)