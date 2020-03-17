import React, { Component } from 'react'
import styled from 'styled-components';
import { BaseUrl } from '../../../services/axios';

export class MobileAboutSlider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            indexActive: 0,
        }
    }
    
    render() {
        const { store, errors } = this.props
        if (Object.keys(errors).length) {
        return (
            <div>
            <h4>Errors in Abouts Section</h4>
            <p>{errors.code}</p>
            <p>{errors.status}</p>
            </div>
        )
        }
        return (
            <Container margin="51.87px 50px 0 50px">
                <Caps1>Tentang Kami</Caps1>
                <Content>
                    {store && store.map((data, i) => {
                        return <P key={i} margin="30.79px 0 0 0">{data.first_text}</P>
                    })}
                    <A margin="15px 0 0 0" padding="3px 3px 10px 3px" href="#">Read More</A>
                </Content>
            </Container>
        )
    }
}

const Container = styled.div(
    props => ({
        margin: props.margin,
        padding: props.padding,
    })
)

const Content = styled.div(
    props => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: props.padding,
        margin: props.margin,
    })
)

const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding
    })
)

const P = styled.p(
    props => ({
        fontSize: "13px",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "18px",
        textAlign: "justify",
        color: "rgba(0,0,0,0.75)",
        margin: props.margin,
        padding: props.padding,
    })
)

const A = styled.a(
    props => ({
        borderBottom: "1px solid #CC9980",
        fontSize: "11px",
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "13px",
        textTransform: "uppercase",
        textAlign: "center",
        color: "#CC9980",
        alignSelf: "center",
        letterSpacing: "1px",
        margin: props.margin,
        padding: props.padding,
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.75)",
        }
    })
)

export default MobileAboutSlider
