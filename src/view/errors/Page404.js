import React from 'react'
import styled from 'styled-components'

const Page404  = () => {
    return (
        <Container className="flex-center position-ref full-height">
            <Code>404</Code>
            <Msg>Not Found</Msg>
        </Container>
    )
}

const Container = styled.div(
    props => ({
        display: "flex",
        flexDirection: "row"
    })
)

const Code = styled.div(
    props => ({
        borderRight: "2px solid",
        margin: props.margin,
        padding: props.padding,
        fontSize: "26px",
        textAlign: "center",
    })
)

const Msg = styled.div(
    props => ({
        fontSize: "18px",
        textAlign: "center",
        padding: props.padding,
        margin: props.margin,
    })
)

export default Page404
