import React, { Component } from 'react';
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap';
import { BaseUrl } from '../../services/axios';

export default class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        const {store,errors} = this.props;
        if (Object.keys(errors).length) {
            return (
                <div>
                <h4>Errors in Blog Section</h4>
                <p>{errors.code}</p>
                <p>{errors.status}</p>
                </div>
            )
        }
        return(
            <>
            <Container className="container">
                <Heading><H2 className="text-center">Latest News</H2></Heading>
                <Row>
                    {store && store.map((data, i) => (
                        <Col sm={12} md={4}>
                            <Thumbnail bg={`${BaseUrl}/storage/${data.image.replace(/\\/g, "/")}`} />
                            <H2>{data.heading}</H2>
                            <Span>Posted on {data.created_at}</Span>
                        </Col>
                    ))}
                </Row>
            </Container>
            </>
        )
    }
}
const Container = styled.div`
    max-width:370px;
    padding:13px;
    margin-top:148px;
`;
const Heading = styled.div`
    margin-bottom: 50px;
`;
const Thumbnail = styled.div`
    background: url('${props=>props.bg}');
    width:100%;
    height:350px;
    background-color:#e8e8e8;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:17px;
`;
const H2 = styled.h2`
    font-size:22px;
    line-height:28px;
    color:#000;
`;
const Span = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
    text-transform: capitalize;
    color: #CC9980;
`;