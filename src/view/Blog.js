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
            {/* <OnDesktop> */}
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
                                    <Col lg={4} >
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
            {/* </OnDesktop> */}
            
            {/* <OnMobileAndTablet>
                <section>
                    <div className="container">
                        <div style={{padding: "20px 0"}}>
                            <MobileDetails {...Data} />
                            {location.state && location.state.store.map((data, i) => {
                                let head = data.heading && data.heading.toLowerCase().replace(/\s/g, "-")
                                let updated = data.updated_at.replace(/[\s:]/g, "-")
                                return (
                                    <BlogItem 
                                        key={i} 
                                        src={`${BaseUrl}/storage/${data.image.replace(/\\/g, "/")}`} 
                                        head={data.heading} 
                                        posted_at={data.created_at}
                                        to={{
                                            pathname: `/blog/${head}-${updated}`,
                                            state: { store: location.state.store}
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section>
            </OnMobileAndTablet> */}
            </>
        )
    
}

export default Blog

const renderHTML = (args) => {
    return createElement("div", {
        dangerouslySetInnerHTML: {__html: args}
    })
}

const Details = ({id, heading, image, img_desc, author, created_at, text}) => {
    
    return (
        <>
            <Col lg={12}>
                <div>
                    <H2 margin="0px 0px 41px 0px"> {heading} </H2>
                    <img src={`${BaseUrl}/storage/${image.replace(/\\/g, "/")}`} width="1103px" height="465px" alt="blog-img" />
                    <DescImage>
                        {img_desc}
                    </DescImage>
                </div>
            </Col>

            <Col lg={8} style={{marginRight: "19.5"}}>
                <div style={{padding: "86px 0 134px 0"}}>
                    <div style={{display: "flex", marginBottom: "21px"}}>
                        <Col lg={6}>
                            <Author author={author}  />
                        </Col>
                        <Col lg={6}>
                            <Posted_At posted_at={created_at} />
                        </Col>
                    </div>
                    <div>
                        {text && renderHTML(text)}
                    </div>
                </div>
            </Col>
        </>
    )
}


const MobileDetails = ({id, heading, author, created_at, image, img_desc, text}) => {
    const renderHTML = (args) => {
        return createElement("div", {
            dangerouslySetInnerHTML: {__html: args}
        })
    }

    return (
        <>
            <div style={{margin: "50px 0 13px 0"}}>
                <H2 margin="0px auto 33px auto"> {heading} </H2>
                <div>
                    <img src={`${BaseUrl}/storage/${image.replace(/\\/g, "/")}`} width="100%" height="auto" alt="blog-img" />
                </div>
            </div>

            <div>
                <div style={{marginTop: "43px", marginBottom: "30px", flexDirection: "column"}}>
                    <Col xs={12} sm={6} lg={6} style={{padding: 0}}>
                        <Author author={author}  />
                    </Col>
                    <Col xs={12} sm={6} lg={6} style={{padding: 0}}>
                        <Posted_At posted_at={created_at} />
                    </Col>
                </div>
                <div style={{marginTop: "30px"}}>
                    {text && renderHTML(text)}
                </div>
            </div>
        </>
    )
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
        <Col lg={4}>
            <img src={props.src} width="95px" height="95px" alt="list-blog" />
        </Col>
        <Col lg={8}>
            <H2> <Link {...props}> {props.head} </Link> </H2>
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
        padding: "0 0 35px 0",
        borderBottom: "1px solid #C8C8C8",
    })
)

const Head = styled.h2(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "28px",
        color: "#00000",
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

const P = styled.p(
    props => ({
        fontStyle: "normal", 
        fontWeight: "normal", 
        fontSize: "16px", 
        lineHeight: "21px", 
        color: "#000000",
        margin: props.margin,
        padding: props.padding
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
