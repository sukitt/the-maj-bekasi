import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BlogPlaceholder } from '../base/loader/ImagePlaceholder'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../services/axios'

class Blogs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
                isLoading: false,
            }
        }
        return null
    }
    
    render() {
        return (
            <Container id="blogs" margin="105px 0 0 0"  flexDirection="column">
                <H1 margin="50px auto">Update Terbaru</H1>
                <Row style={{marginTop: "48px"}}>
                    {this.state.localStore.length && this.state.localStore.slice(0,3).map((data, i) => {
                        
                        let head = data.heading && data.heading.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")
                        let img = `${BaseUrl}/storage/${data.image.replace(/\\/g, "/").replace(".jpg", "-thumbnail.jpg")}`
                        return (
                            <Col lg={4} md={6} key={i}>
                                <Blog
                                    to={{
                                        pathname: `/blog/${head}`,
                                        state: {
                                            args: this.props.store,
                                            test: true,
                                        }
                                    }}
                                    src={img} 
                                    heading={data.heading} 
                                    created_at={data.created_at} 
                                />
                            </Col>
                        )}
                    )}
                </Row>
            </Container>
        )
    }
}

export default Blogs

const Blog = props => {
    return (
        <Container flexDirection="column">
            <Img src={props.src} width width="350px" height="350px" alt="350x350" />
            <Body margin="17px 0 20px 0">
                <P>{props.heading}</P>
                <Footer>Posted On {props.created_at}</Footer>
            </Body>
            <LinkRead {...props}> Read More </LinkRead>
        </Container>
    )
}

const LinkRead = styled(Link)({
    alignSelf: "center",
    fontFamily: "Verlag Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "11px",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1px",
    paddingBottom: "14px",
    borderBottom: "1px solid",
    ":hover": {
        textDecoration: "none",
    }
})

const Container = styled.div(
    props => ({
        display: "flex",
        alignItems: "center",
        flexDirection: props.flexDirection,
        margin: props.margin,
        padding: props.padding,
        width: props.width,
    })
)

const Body = styled.div(
    props => ({
        display: "flex",
        flexDirection: "column",
        width: "350px",
        margin: props.margin,
        padding: props.padding,
    })
)

const Img = styled.img(
    props => ({
        transition: "transform 1s",
        ":hover": {
            transform: "scale(1.02)",
        }
    })
)

const H1 = styled.h1(
    props => ({
        lineHeight: "18px",
        margin: props.margin,
        padding: props.padding,
        display: "block"
    })
)

const P = styled.p(
    props => ({
        padding: props.padding,
        margin: props.margin,
        fontSize: "18px",
        lineHeight: "28px",
        fontStyle: "normal",
        fontWeight: "bold",
        color: "#12284C !important",
    })
)

const Footer = styled.small(
    props => ({
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "28px",
        textTransform: "capitalize",
        color: "#CC9980",
        margin: props.margin,
        padding: props.padding,
        alignSelf: "flex-start"
    })
)
