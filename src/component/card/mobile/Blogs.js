import React, { Component } from 'react'
import { BlogPlaceholder } from '../../base/loader/ImagePlaceholder'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class MobileBlogs extends Component {
    
    render() {
        return (
            <Container id="blogs" margin="128px 0 0 0">
                <H2 margin="50px auto">Lates News</H2>
                {this.props.store && this.props.store.map((data, i) => (
                    <Blog image href={data.link} heading={data.heading} posted_at={data.posted_at} />
                ))}
            </Container>
        )
    }
}

export default MobileBlogs



const Blog = props => {
    return (
        <Container margin="50px auto" padding="0 30px">
            {/* <BlogPlaceholder {...props} width="350px" height="350px" color="#CC9980" text="350x350" /> */}
            <Body margin="17px 0 0 0">
                <Link to={props.href}>
                    <H2>{props.heading}</H2>
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
