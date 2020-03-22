import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
// import { BlogPlaceholder } from '../../base/loader/ImagePlaceholder'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BaseUrl } from '../../../services/axios'
import { BlogPlaceholder } from '../../base/loader/ImagePlaceholder'

class MobileBlogs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: [],
            isLoading: true,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.store.length !== prevState.localStore.length) {
            return {
                localStore: nextProps.store,
                isLoading: false,
            }
        }
    }
    
    render() {
        return (
            <Container id="blogs" margin="100px 0 0 0">
                <h1>Update Terbaru</h1>
                {this.props.store.length && this.props.store.map((data, i) => {
                    let head = data.heading && data.heading.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")
                    return (
                        <Blog 
                            key={i} 
                            to={{
                                pathname: `/blog/${head}`,
                                state: { store: this.props.store }
                            }} 
                            heading={data.heading} 
                            posted_at={data.created_at.replace(/[-]/g, " ")} 
                            src={`${BaseUrl}/storage/${data.image}`}
                        />
                    )}
                )}
            </Container>
        )
    }
}

export default MobileBlogs



const Blog = (props) => {
    const { image, heading, posted_at} = props
    return (
        <Container margin="50px auto" padding="0" >
            <BlogPlaceholder {...props} width="350px" height="350px" color="#CC9980" text="350x350" />
            {/* <img src={`${BaseUrl}/storage/${image}`} width="350px" height="350px" alt="blog-post" /> */}
            <Body margin="17px 0 0 0">
                <Link {...props}>
                    <H2>{heading}</H2>
                </Link>
                <Footer padding="0">Posted On {posted_at}</Footer>
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
        lineHeight: "18px",
        letterSpacing:"1px",
        color: "#12284C",
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
