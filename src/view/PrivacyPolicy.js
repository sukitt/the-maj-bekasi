import React, { createElement } from 'react'
import styled from 'styled-components'
import Base from './Base'

export default class PrivacyPolicy extends Base {
    
    render(){
        console.log(this.state.privacyPolicy)
        return(
            <>
                <Container className="container" paddingTop="120px" paddingBottom="200px">
                    <h1 className="text-center">Kebijakan Privasi</h1>
                    <LastUpdate fontSize="14px" opacity=".5">
                        Pembaruan Terakhir: {this.state.privacyPolicy.updated_at}
                    </LastUpdate>
                    <Content id="privacy-policy">
                        {this.state.privacyPolicy.text && renderHTML(this.state.privacyPolicy.text)}
                    </Content>
                </Container>
            </>
        )
    }
}

const renderHTML = (args) => {
    return createElement("div", {
        dangerouslySetInnerHTML: {__html: args}
    })
}

const Container = styled.div(
    props => ({
        paddingTop:`${props.paddingTop}`,
        paddingBottom:`${props.paddingBottom}`,
    })
);
const LastUpdate = styled.p(
    props=>({
        fontStyle:"normal",
        fontWeight:"normal",
        fontSize:`${props.fontSize}`,
        lineHeight:"21px",
        textAlign:"center",
        color:"#c8c8c8",
        opacity:`${props.opacity}`,
        marginBottom:"90px"
    })
)
const Content = styled.div(
    props=>({
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontWeight: 'normal',
        fontSize: "16px",
        lineHeight: "21px",
        color: "#000000",
        textAlign:"justify !important"
    })
)