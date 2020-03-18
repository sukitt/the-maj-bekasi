import React from 'react'
import { Row, Col } from 'react-bootstrap'
// import Base from './Base'
import Img1 from '../../assets/tentangkami-image/2.png'
import Img from '../../assets/tentangkami-image/1.png'
import styled from 'styled-components'

const BaseOwner = props => {
  return(
    <div style={{...props.containerStyle, backgroundColor:"#e9e9e9"}}>
        <div style={{width: "100%", height: "221px"}}>
            <img src={props.img} style={{width: "inherit", height: "inherit"}} alt="company" />
        </div>

        <div style={{padding: "0 30px"}}>
            <P margin="60px 0 0 0" textAlign="justify">
                {props.text}
            </P>
            
            <CardName src={props.avatar} {...props} />
        </div>
    </div>
  )
}

const CardName = props => (
    <Row style={{margin: "32px -20px 0 0", display: "flex", alignItems: "center"}}>
        <Col xs="auto" style={{padding: "0", margin: "0"}}>
            <ProfileImage src={props.src} />
        </Col>
        <Col xs="10">
            <Name margin="0" padding="0">{props.name}</Name>
            <Company margin="0" padding="0">{props.company}</Company>
        </Col>
    </Row>
)

const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "18px",
        textAlign: props.textAlign,
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)

const ProfileImage = styled.img(
    props => ({
        boxShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        margin: props.margin,
        padding: props.padding,
    })
)

const ProfileContainer = styled.div(
    props => ({
        boxShadow: "0px 20px 60px rgba(138, 149, 158, 0.2)",
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        margin: props.margin,
        padding: props.padding,
    })
)

const Name = styled.p(
    props => ({
        color: "#000000",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "21px",
        margin: props.margin,
        padding: props.padding,
    })
)

const Company = styled.h6(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
        textAlign: props.textAlign,
    })
)

export default BaseOwner