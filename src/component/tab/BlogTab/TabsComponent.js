import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { BaseUrl } from '../../../services/axios'


function thumbnail (source) {
    var ext = source.split(".").pop();
    return source.replace("."+ext, "-thumbnail."+ext)
}

export default class TabsComponent extends Component {
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
        return null
    }

    render() {
        if (this.state.isLoading) {
            let CardsLoad = (args) => {let arry = new Array(); for (let index = 0; index < args; index++) {
                arry.push({id:index})
            }; return arry}
            return(
            <Container style={{marginBottom:"170px"}}>
                <Row>
                    {CardsLoad(3).map((d,i)=>(
                        <Col id={d.id} md={4} xs={12} style={{ marginTop: 40 }}>
                            <div style={{maxWidth:350, width:"100%", height:350, backgroundColor:"#ccc"}}></div>
                            <div style={{maxWidth:350, width:"100%", height:25, backgroundColor:"#ccc", marginTop:"15px"}}></div>
                            <div style={{maxWidth:150, width:"100%", height:25, backgroundColor:"#ccc", marginTop:"15px"}}></div>
                        </Col>
                    ))}
                </Row>
            </Container>
            )
        }
        return (
            <>
                <Container className="container">
                    <Row>
                        {this.state.localStore.length && this.state.localStore.map((data, i) => {
                            return (
                                <>
                                    <Col md={4} xs={12} style={{ marginTop: 40 }}>  
                                        <Link to={`/blog/${data.heading.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")}`} >
                                            <Image src={`${BaseUrl}/storage/${thumbnail(data.image)}`} alt="list-blog" />
                                        </Link>
                                        <ButtonLink
                                            to={{
                                                pathname: `/blog/${data.heading.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")}`
                                            }}
                                        ><H3>{data.heading}</H3></ButtonLink>
                                        <Created>Posted On {data.created_at.replace(/-/g, " ")} </Created>
                                    </Col>
                                </>
                            )
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

const Container = styled.div({
    width: "100%",
    marginBottom:"170px",
})
const Image = styled.img({
    maxWidth: "350px",
    width:"100%",
    height: "auto",
})
const ButtonLink = props => {
    const history = useHistory()
    const { head } = props
    const _handleClick = (e) => {
        e.perventDefault()
        history.push(`/blog/${head && head.toLowerCase().replace(/\s/g, "-").replace(/[%@#,*>!?"'.]/g, "")}`)
    }
    return (
        <Link {...props} style={{ textDecoration: "none" }}>
            {props.children}
        </Link>
    )
}
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