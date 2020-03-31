import React, { Component } from 'react'
import { Card, Col } from 'react-bootstrap'
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
        if(this.state.isLoading){
            let loops = (args) =>{let array = new Array(); for (let index = 0; index < args; index++) {
                array.push({id:index})
            }return array}
            return(
                <Container id="blogs" className="container" margin="100px 0 0 0">
                    <h1 className="text-center">Update Terbaru</h1>
                    {loops(3).map((data, i) => (
                        <Col lg={4} md={6} key={data.id}>
                            <div style={{backgroundColor:"#ccc", width:"100%", paddingTop:"100%"}}></div>
                        </Col>
                    ))}
                </Container>
            )
        }
        return (
            <Container id="blogs" className="container" margin="100px 0 0 0">
                <h1 className="text-center">Update Terbaru</h1>
                {this.props.store.length && this.props.store.slice(0,3).map((data, i) => {
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
                <div style={{margin:"56px auto", width:"180px"}}>
                    <A to="/blogs">
                        Selengkapnya
                    </A>
                </div>
            </Container>
        )
    }
}

export default MobileBlogs



const Blog = (props) => {
    const { image, heading, posted_at} = props
    return (
        <Container margin="50px auto" padding="0" >
            <BlogPlaceholder {...props} width="100%" height="350px" color="#CC9980" text="350x350" />
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
        margin: props.margin,
        padding: props.padding,
    })
)

const Body = styled.div(
    props => ({
        maxWidth: "350px",
        margin: props.margin,
        padding: props.padding,
    })
)
const A = styled(Link)(
    {
        fontFamily:"Verlag Bold !important",
        margin: '5px auto',
        width: 180,
        height: 40,
        borderRadius: "0",
        backgroundColor: '#CC9980',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        letterSpacing: 2,
        textTransform: 'uppercase',
        borderColor: 'transparent',
        color:"#fff",
        padding:"11px 35px",
        "&:hover":{
            textDecoration:"none",
            color:"#fff"
        }
    }
)

const H2 = styled.h2(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        lineHeight: "24px",
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
