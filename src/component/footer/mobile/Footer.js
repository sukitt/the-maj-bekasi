import React from 'react'
import styled from 'styled-components'

import SubscribeForm from '../../form/Base'
import Img1 from '../../assets/footer-image/1.svg'
import Img2 from '../../assets/footer-image/partof.svg'
import Inst from '../../assets/footer-image/brand/instagram.svg'
import Fb from '../../assets/footer-image/brand/facebook.svg'
import Twitt from '../../assets/footer-image/brand/twitter.svg'

export const MobileFooter = props => {
    return (
        <div>
            <D backgroundColor="#232323" padding="10% 10%">
                <img style={{width: '80%'}} src={Img1} alt="logo2" />
                <SocialMedia margin="5% 0">
                    <A href="#linkto" ><Instagram /></A>
                    <A href="#linkto" ><Facebook /></A>
                    <A href="#linkto" ><Twitter /></A>
                </SocialMedia>
                <img src={Img2} style={{width: '80%'}} alt="Part of The Maj Group" />

                <JoinUs caps="Join Our Family" margin="10% 0">
                    <A display="block" href="#linkto"> Carrers </A>
                    <A display="block" href="#linkto"> Inverstor </A>
                </JoinUs>
                
                <ExploreUs caps="Explore Our World" margin="10% 0">
                   <A display="block" href="#linkto">Contact Us</A>
                   <A display="block" href="#linkto">Ancora Capital Management</A>
                   <A display="block" href="#linkto">Media Center</A>
                   <A display="block" href="#linkto">Privacy</A>
                   <A display="block" href="#linkto">Terms and Conditions</A>
                </ExploreUs>

                <SubscribeUs caps="Subscribe For Exclusive News & Offers">
                    <D>
                        <SubscribeForm {...props}>
                            <B type="submit">Subcribe</B>
                        </SubscribeForm>
                    </D>
                    <P margin="5% 0">
                        By entering your details you consent to be contacted via email by the Maj group with offers and updates. To opt out, use the unsubscribe link or email themaj@mail.com.
                    </P>
                    <P textAlign="center" margin="5% 0">Copyright 2020 All right reserved</P>
                </SubscribeUs>
            </D>
        </div>
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
    width: "8%",
    alt: "instagram"
}))``

const Twitter = styled.img.attrs(props =>({
    src: Twitt,
    width: "10%",
    alt: "twitter"
}))``

const Facebook = styled.img.attrs(props => ({
    src: Fb,
    width: "10%",
    alt: "facebook"
}))``

export default MobileFooter