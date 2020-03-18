import React from 'react'
import styled from 'styled-components'

export const Header = (props) => (
    <>
        <Container>
            <Background source={props.bg} />
        </Container>
    </>
)
const Container = styled.div`
    width:100%;
    height:560px;
    margin-bottom: 27px;
    margin-left:auto;
    margin-right:auto;
    @media only screen and (max-width:768px){
        height:280px;
    }
`;
const Background = styled.div`
    width: 100%;
    height: 560px;
    background: 
        linear-gradient(180deg, 
        rgba(255, 255, 255, 0) 0%, 
        rgba(0, 0, 0, 0.31) 100%),
        url(${props=>props.source});
    @media only screen and (max-width:768px){
        height:280px;
    }
`;