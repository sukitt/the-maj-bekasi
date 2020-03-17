import React, { Component } from 'react'
import styled from 'styled-components'
import waImg from '../assets/whatsapp.svg'

export default class Whatsapp extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <Container>
                    <A href="https://wa.me/01234567890/?text=hello worlds">
                        <Img src={waImg} alt="whatsapp" />
                    </A>
                </Container>
            </>
        )
    }
}

const Container = styled.div`
    position: fixed;
    right: 1.5%;
    bottom: 5%;
    max-width:60px;
    width:100%;
    z-index:15;
    background:transparent;
    @media only screen and (max-width:450px){
        max-width: 50px;
        right:5%;
    }
`;
const A = styled.a`
    background:transparent;
`;
const Img = styled.img`
    width:60px;
    transition:.3s all;
    &:hover{
        scale:1.1;
    }
    @media only screen and (max-width:450px){
        width: 50px;
        right:5%;
    }
`;