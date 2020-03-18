import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { BlogPlaceholder } from '../../base/loader/ImagePlaceholder'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export class MobileBlogs extends Component {
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
            <Container id="blogs" margin="128px 0 0 0">
                <H2 margin="50px auto">Lates News</H2>
                {this.state.localStore.length && this.state.localStore.map((data, i) => (
                    <Blog href={data.link} text={data.text} posted_at={data.posted_at} />
                ))}
            </Container>
        )
    }
}

export default MobileBlogs



const Blog = props => {
    return (
        <Container margin="50px auto" padding="0 30px">
            <BlogPlaceholder {...props} width="350px" height="350px" color="#CC9980" text="350x350" />
            <Body margin="17px 0 0 0">
                <Link href={props.href}>
                    <H2>{props.text}</H2>
                </Link>
                <Footer>Posted On {props.posted_at}</Footer>
            </Body>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: props.margin,
        padding: props.padding,
    })
)

const Body = styled.div(
    props => ({
        width: "350px",
        margin: props.margin,
        padding: props.padding,
    })
)

const H2 = styled.h2(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "28px",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
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
