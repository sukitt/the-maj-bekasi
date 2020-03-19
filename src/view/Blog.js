import React, { createElement } from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

import { BlogPlaceholder } from '../component/base/loader/ImagePlaceholder'
import IconUser from '../component/assets/tmp-blog/user.svg'
import IconCalender from '../component/assets/tmp-blog/calender.svg'


import HeadSlider from '../component/slider/mobile/HeadSlider'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'

import {OnDesktop, OnMobileAndTablet} from '../constants'
import Base from './Base'

class Blog extends Base {

    render() {
        return (
            <>
            <OnDesktop>
                <section>
                    <div className="container">
                        <div style={{display: "flex", width: "1119px", margin: "0px auto", padding: "20px 0"}}>
                            <Col lg={8} style={{marginRight: "19.5"}}>
                                <Details {...this.state.active} />
                            </Col>

                            <Col lg={4} style={{marginLeft: "19.5px"}}>
                                {this.state.localStore && this.state.localStore.map((data, i) => (
                                    <BlogItem key={i} src={data.image} head={data.title} posted_at={data.posted_at} />
                                ))}
                            </Col>
                        </div>
                    </div>
                </section>
            </OnDesktop>
            
            <OnMobileAndTablet>
                <section>
                    <div className="container">
                        <div style={{display: "flex", flexDirection: "column", margin: "0px auto", padding: "20px 0"}}>
                            <MobileDetails {...this.state.active} />
                        {this.state.localStore && this.state.localStore.map((data, i) => (
                            <BlogItem key={i} src={data.image} head={data.title} posted_at={data.posted_at} />
                        ))}
                        </div>
                    </div>
                </section>
            </OnMobileAndTablet>
            </>
        )
    }
}

const Details = ({id, head, author, posted_at, image, desc_img, text}) => {
    const renderHTML = (args) => {
        return createElement("div", {
            dangerouslySetInnerHTML: {__html: args}
        })
    }
    return (
        <>
            <div>
                <H2 margin="0px 0px 41px 0px"> {head} </H2>
                <BlogPlaceholder 
                    src={image}
                    width="730px" 
                    height="465px" 
                    color="#CC9980" 
                    text="730x465" 
                />
                <DescImage>
                    {desc_img}
                </DescImage>
            </div>

            <div>
                <div style={{display: "flex", marginTop: "71px", marginBottom: "21px"}}>
                    <Col lg={6}>
                        <Author author={author}  />
                    </Col>
                    <Col lg={6}>
                        <Posted_At posted_at={posted_at} />
                    </Col>
                </div>
                <div>
                    {text && renderHTML(text)}
                    <div style={{marginTop: "74px"}}>
                        <P>Sumber: BeritaSatu.com</P>
                        <P>#MAJ Residence #Apartemen Jepang #Sasar Milenial</P>
                    </div>
                </div>
            </div>
        </>
    )
}


const MobileDetails = ({id, head, author, posted_at, image, desc_img, text}) => {
    const renderHTML = (args) => {
        return createElement("div", {
            dangerouslySetInnerHTML: {__html: args}
        })
    }

    return (
        <>
            <div style={{margin: "50px 0 13px 0"}}>
                <H2 margin="0px auto 33px auto"> {head} </H2>
                <div align="center">
                    <BlogPlaceholder 
                        src={image}
                        width="341px" 
                        height="217px" 
                        color="#CC9980" 
                        text="341x217" 
                    />
                </div>
                <DescImage margin="25px auto 0px auto">
                    {desc_img}
                </DescImage>
            </div>

            <div>
                <div style={{display: "flex", marginTop: "43px", marginBottom: "30px", flexDirection: "column"}}>
                    <Author author={author}  />
                    <Posted_At posted_at={posted_at} />
                </div>
                <div style={{marginTop: "30px"}}>
                    {text && renderHTML(text)}
                    <div style={{marginTop: "36px"}}>
                        <P>Sumber: BeritaSatu.com</P>
                        <P>#MAJ Residence #Apartemen Jepang #Sasar Milenial</P>
                    </div>
                </div>
            </div>
        </>
    )
}


const Author = props => (
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
                {props.author} / {props.author.split(" ").map(d => d.charAt(0).toUpperCase())} 
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
            <BlogPlaceholder
                src={props.src}
                width="95px"
                height="95px"
                text="95x95"
                alt="list-blog"
            />
        </Col>
        <Col lg={8}>
            <H2> {props.head} </H2>
            <Created> {props.posted_at} </Created>
        </Col>
    </ContainerItem>
)

const DescImage = styled.small(
    props => ({
        margin: props.margin,
        padding: props.padding,
        fontStyle: "normal", 
        fontWeight: "normal", 
        fontSize: "10px", 
        lineHeight: "15px", 
        color: "#C8C8C8",
    })
)

const ContainerItem = styled.div(
    props => ({
        display: "flex",
        margin: props.margin,
        padding: props.padding,
        padding: "35px 0px",
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

export default Blog
