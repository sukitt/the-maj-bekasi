import React, { createElement, useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

// import { BlogPlaceholder } from '../component/base/loader/ImagePlaceholder'
import IconUser from '../component/assets/tmp-blog/user.svg'
import IconCalender from '../component/assets/tmp-blog/calender.svg'    

import {OnDesktop, OnMobileAndTablet} from '../constants'
import Base from './Base'
import { useParams, useRouteMatch, useLocation, Link } from 'react-router-dom'
import { BaseUrl } from '../services/axios'

const Blog = props => {
    const { id } = useParams()
    const location = useLocation()

        const Detail = location.state && location.state.store.find(data => {
            const A = `${data.heading.replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")}`.toLocaleLowerCase()
            return A === id
        })

        const List = location.state && location.state.store.filter(data => {
            const B = `${data.heading.replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")}`.toLocaleLowerCase()
            return B !== id
        })

        const { heading, image, img_desc, author, created_at, text  } = Detail
        return (
            <>
                <section>
                    <div className="container">
                        <div style={{width: "auto", margin: "0px auto", padding: "20px 0"}}>
                            <Row>
                                <Col lg={12} sm={12} xs={12}>
                                    <h5>Event</h5>
                                    <H2 margin="0px 0px 41px 0px"> {heading} </H2>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <img style={{width:"100%"}} src={`${BaseUrl}/storage/${image.replace(/\\/g, "/")}`} alt="img-blog" />
                                    <DescImage width="auto">
                                        {img_desc}
                                    </DescImage>
                                </Col> 
                            </Row>
                    
                            <Row style={{margin: "86px 0 23px 0"}}>
                                <Col lg={3} sm={6} xs={12}>
                                    <Author author={author}  />
                                </Col>
                                <Col lg={3} sm={6} xs={12}>
                                    <Posted_At posted_at={created_at} />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12} md={8}>
                                    <div style={{padding: "0 0 134px 0"}}>
                                        {text && renderHTML(text)}
                                    </div>
                                </Col>

                                <OnDesktop>
                                    <Col lg={4} style={{padding: "0"}}>
                                        <div>
                                        {List && List.map((data, i) => {
                                            let head = data.heading && data.heading.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")
                                            return (
                                                <BlogItem 
                                                    key={i} 
                                                    src={`${BaseUrl}/storage/${data.image.replace(/\\/g, "/")}`} 
                                                    head={data.heading} 
                                                    posted_at={data.created_at}
                                                    to={{
                                                        pathname: `/blog/${head}`,
                                                        state: { store: location.state.store}
                                                    }}
                                                />
                                            )
                                        })}
                                        </div>
                                    </Col>
                                </OnDesktop>
                            </Row>
                        </div>
                    </div>
                </section>
            </>
        )
    
}

export default Blog

const renderHTML = (args) => {
    return createElement("div", {
        dangerouslySetInnerHTML: {__html: args}
    })
}

const Author = (props) => (
    <>
        <img src={IconUser} alt="author" />
        <span 
            style={{
                marginLeft: "8px", 
                fontStyle: "normal", 
                fontWeight: "normal", 
                fontSize: "14px", 
                lineHeight: "21px", 
                color: "#C8C8C8"
            }}>
                {props.author} / 
                {props.author && props.author.split(" ").map(d => d.charAt(0).toUpperCase())} 
        </span>
    </>
)

const Posted_At = props => (
    <>
        <img src={IconCalender} alt="calendar" />
        <span 
            style={{
                marginLeft: "8px", 
                fontStyle: "normal", 
                fontWeight: "normal", 
                fontSize: "14px", 
                lineHeight: "21px", 
                color: "#C8C8C8"
            }}
        >
            {props.posted_at}
        </span>
    </>
)

const BlogItem = props => (
    <ContainerItem>
        <Col lg={4} style={{padding: "0"}}>
            <img src={props.src} width="95px" height="95px" alt="list-blog" />
        </Col>
        <Col lg={8} style={{padding: "0"}}>
            <Link {...props} style={{textDecoration: "none"}}> 
                <H3> 
                    {props.head} 
                </H3>
            </Link> 
            <Created> {props.posted_at} </Created>
        </Col>
    </ContainerItem>
)

const DescImage = styled.p(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontStyle: "normal", 
        fontWeight: "normal", 
        fontSize: "10px", 
        lineHeight: "15px", 
        color: "#C8C8C8",
        width: props.width
    })
)

const ContainerItem = styled.div(
    props => ({
        display: "flex",
        margin: "0 0 35px 0",
        padding: "0 0 27px 0",
        borderBottom: "1px solid #C8C8C8",
    })
)

const H2 = styled.h2(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontSize: "18px",
        lineHeight: "23px",
        color: "#000000",
    })
)

const H3 = styled.h3(
    props => ({  
        // fontSize: "15px",
        height: "61px",
        whiteSpace: "wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        margin: props.margin,
        padding: props.padding,
        transition: "color .2s",
        ":hover": {
            color: "#CC9980",
        }
    })
)

const Created = styled.small(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontStyle: "normal",
        fontSize: "12px",
        fontWeight: "bold",
        lineHeight: "28px",
        color: "#CC9980",
    })
)
