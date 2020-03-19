import React, { Component } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BlogPlaceholder } from '../base/loader/ImagePlaceholder'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../services/axios'

export class Blogs extends Component {
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
            <Container id="blogs" margin="128px 0 0 0"  flexDirection="column">
                <H1 margin="50px auto">Lates News</H1>
                <Row style={{marginTop: "48px"}}>
                    {this.state.localStore.length && this.state.localStore.map((data, i) => {
                        let head = data.heading && data.heading.toLowerCase().replace(/\s/g, "-")
                        let updated = data.updated_at.replace(/[\s:]/g, "-")
                        let img = `${BaseUrl}/storage/${data.image.replace(/\\/g, "/")}`
                        return (
                            <Col lg={4} md={6} key={i}>
                                <Blog
                                    to={{
                                        pathname: `/blog/${head}-${updated}`,
                                        state: { store: this.props.store }
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
            <img src={props.src} width width="350px" height="350px" alt="350x350" />
            <Body margin="17px 0 0 0">
                <H1>
                    <Link {...props}>
                        {props.heading}
                    </Link>
                </H1>
                <Footer>Posted On {props.created_at}</Footer>
            </Body>
        </Container>
    )
}

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
        width: "350px",
        margin: props.margin,
        padding: props.padding,
    })
)

const A = styled.a`
    color: #000000;
    text-decoration: none;
`;

const H1 = styled.h1(
    props => ({
        lineHeight: "28px",
        margin: props.margin,
        padding: props.padding,
        display: "block"
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
    })
)
