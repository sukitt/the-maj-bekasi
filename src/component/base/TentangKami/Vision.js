import React from 'react'
import styled from 'styled-components'

import './style.css'
import { layoutGenerator } from 'react-break'

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
});

const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
export const Vision = (props) => (
    <>
        <Container>
            <H1>Visi</H1>
            {props.store.map((data,i) => (
                <>
                    <OnDesktop>
                        <Content className="vision">
                            <Img 
                                source={data.image} 
                                position={i%2?'right':'left'} 
                            />
                            {renderHTML(data.text)}
                        </Content>
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <div className="container">
                            <Content className="vision">
                                <Img 
                                    source={data.image} 
                                    position={i%2?'right':'left'} 
                                />
                                {renderHTML(data.text)}
                            </Content>
                        </div>
                    </OnMobileAndTablet>
                </>
            ))}
        </Container>
    </>
)

const Container = styled.div`
    width:100%;
    height:1409px;
    background: #E9E9E9;
    padding-top:93px;
    @media only screen and (max-width:768px){
        height:auto;
        padding-bottom:180px;
    }
`;
const H1 = styled.h1`
    text-align:center;
    color:#232323;
`;
const Content = styled.div`
    width: 920px;
    height: auto;
    padding:56px 63px;
    background:#FFFFFF;
    margin-left:auto;
    margin-right:auto;
    margin-top: 112px;
    @media only screen and (max-width:768px){
        width:100%;
        padding:56px 25px;
    }
`;
const Img = styled.div`
    background: url(${props=>props.source});
    border: 2px solid #CC9980;
    box-sizing: border-box;
    box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
    width: 65px;
    height: 65px;
    margin-top:-90px;
    border-radius:50%;
    margin-${props=>props.position}: 95px;
    float:${props=>props.position};
    @media only screen and (max-width:768px){
        margin-left: auto;
        margin-right: auto;
        float:none;
    }
`;