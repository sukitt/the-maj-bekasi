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
                    <A target="_blank" href="https://wa.me/628118868909?text=Halo%21%20Saya%20ingin%20tahu%20lebih%20banyak%20mengenai%20apartemen%20The%20MAJ%20Residences%20Bekasi.">
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