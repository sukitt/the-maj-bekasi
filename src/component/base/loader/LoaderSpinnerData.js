import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const LoaderSpinnerData = props => {
    return (
        <Container display={props.show?"block":"none"}>
            <Content>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop:"100px"}}>
                    <Spinner animation="border" style={{color: "#fff"}} />
                    <code style={{marginLeft: "10px", color: "#fff"}}>Sedang Memuat...</code>
                </div>
            </Content>
        </Container>
    )
}

const Container = styled.div(
    props=>({
        width:"100%",
        height:"100vh",
        position:"fixed",
        zIndex:"99",
        background:"rgba(0, 0, 0, .3)",
        display:props.display,
    })
)
const Content = styled.div(
    props=>({
        width:"400px",
        height:"300px",
        margin:"10% auto"
    })
)
export default LoaderSpinnerData
