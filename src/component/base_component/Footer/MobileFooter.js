import React, { Component } from 'react'
import styled from 'styled-components'

import BaseFooter from './BaseFooter'
import Img1 from '../../assets/footer-image/1.svg'
import Img2 from '../../assets/footer-image/partof.svg'
// import Inst from '../../assets/footer-image/brand/instagram.svg'
// import Fb from '../../assets/footer-image/brand/facebook.svg'
// import Twitt from '../../assets/footer-image/brand/twitter.svg'
import { Alert } from 'react-bootstrap'

export class MobileFooter extends Component {
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
        return null;
    }
    render(){

        return (
            <>
            <div style={{ height: "auto", padding: "50px 0 34px 34px", backgroundColor: "#232323" }}>
                <D>
                    <img style={{ width: '150px', height: "auto" }} src={Img1} alt="logo2" />
                    <SocialMedia margin="24px 0 0 0">
                        {this.state.localStore.length && this.state.localStore.map((data, i) => (
                            <A key={i} href={data.link} target="_blank">
                                <Icon size="18px" fill="#fff" className={`fab fa-${data.icon} mr-4`} />
                            </A>
                        ))}
                    </SocialMedia>
    
                    <img src={Img2} style={{ width: '136.79px', marginTop: "41.89px" }} alt="Part of The Maj Group" />
    
                    <JoinUs caps="Join Our Family" margin="48.35px 0 0 0">
                        <A padding="3px 0" display="block" href="#linkto"> Careers </A>
                        <A padding="3px 0" display="block" href="#linkto"> Investors </A>
                    </JoinUs>
    
                    <ExploreUs caps="Explore Our World" margin="48px 0 16px 0">
                        <A padding="3px 0" display="block" href="#contact-us">Contact Us</A>
                        <A padding="3px 0" display="block" href="#linkto">Ancora Capital Management</A>
                        <A padding="3px 0" display="block" href="#linkto">Media Center</A>
                        <A padding="3px 0" display="block" href="/privacy-policy">Privacy</A>
                        <A padding="3px 0" display="block" href="#linkto">Terms and Conditions</A>
                    </ExploreUs>
    
                    <SubscribeUs caps="Sign up for Exclusive news & Offers" margin="48px 0 0 0">
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
                        <D margin="26px 27px 0 0">
                            <BaseFooter size="lg" {...this.props}>
                                <B type="submit">Subscribe</B>
                            </BaseFooter>
                        </D>
                        <P margin="15px 28px 15px 0">
                            By entering your details you consent to be contacted via email by the Maj group with offers and updates. To opt out, use the unsubscribe link or email unsubscribe@themajgroup.com.
                        </P>
                    </SubscribeUs>
                </D>
            </div>
            <P className="text-center m-0" style={{backgroundColor: "#232323", padding:"10px 0px"}}>Copyright &copy; 2020 All right reserved</P>
            </>
        )
    }
}

const JoinUs = props => (
    <D {...props}>
        <Caps letterSpacing="3px">{props.caps}</Caps>
        {props.children}
    </D>
)

const ExploreUs = props => (
    <D {...props}>
        <Caps letterSpacing="3px">{props.caps}</Caps>
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
    props => ({
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "13px",
        lineHeight: '18px',
        color: "#FFFFFF",
        padding: props.padding,
        margin: props.margin,
        textAlign: props.textAlign
    })
)

const A = styled.a(
    props => ({
        padding: props.padding,
        margin: props.margin,
        display: props.display || "inline",
        color: "#fff",
        "&:hover": {
            textDecoration: "none"
        }
    })
)

const B = styled.button({
    width: 120,
    height: 40,
    backgroundColor: '#FEFEFE',
    borderColor: 'transparent',
    fontStyle: 'bold',
    fontSize: 13,
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
        backgroundColor: props.backgroundColor
    })
)

const Caps = styled.h5(
    props => ({
        padding: "0",
        marginBottom: "16px",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        letterSpacing: props.letterSpacing,
        lineHeight: '16px',
        textTransform: "uppercase",
        color: "#FFFFFF",
    }))

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
        "&:hover": {
            color: "#cc9980"
        }
    })
)