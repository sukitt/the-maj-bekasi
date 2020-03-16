import React, { Component } from 'react'
import styled from 'styled-components'
import waImg from '../assets/whatsapp.png'

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
    position: absolute;
    right: 2%;
    top: 30%;
    max-width:75px;
    width:100%;
`;
const A = styled.a`
    background:transparent;
`;
const Img = styled.img`
    width:75px;
    transition:.3s all;
    &:hover{
        scale:1.1;
    }
`;