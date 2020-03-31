import React, { useState, Component } from 'react'
import ContactForm from '../form/ContactForm'
import { Button, Alert } from 'react-bootstrap'
import '../assets/css/style.css'
import styled from 'styled-components'

class ContactUs extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:false
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.success !== prevState.show) {
			return {
				show: nextProps.success
			}
        }
        return null;
	}
    render(){
        return (
            <>
                <div id={this.props.id} style={{
                    margin: "0px auto",
                    padding: "123px 0px",
                    display: 'flex',
                    width:"730px",
                    paddingBottom:"60px",
                }}>
                    <div style={{
                        width: 606,
                        height: "auto",
                        margin: '28px auto',
                    }}>
                        <H1>Hubungi Kami</H1>
                        <p style={{
                            width: "598px",
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: "16px",
                            color: '#000000',
                            textAlign: 'center'
                        }}>
                            Kami siap menjawab semua pertanyaanmu. Isi detail di bawah ini agar kami dapat menghubungimu atau kunjungi langsung Marketing Gallery kami.
                        </p>  
                        {this.state.show?(
                            <>
                            <Alert variant="success" onClose={() => this.setState({show:false})} dismissible>
                                <Alert.Heading>Terima Kasih!</Alert.Heading>
                                <p>
                                    Kami akan segera menghubungi anda melalui alamat email yang anda sediakan.
                                </p>
                            </Alert>
                            </>
                        ):(
                            <></>
                        )}
                        
                        <div style={{marginTop: 61}}>
                            <ContactForm {...this.props} >
                                <Button 
                                    type="submit" 
                                    style={{
                                        margin: '0 auto', 
                                        width: 180,
                                        height: 40,
                                        borderRadius:"0",
                                        backgroundColor: '#CC9980',
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        fontSize: 13,
                                        marginTop: 5,
                                        letterSpacing: 2,
                                        textTransform: 'uppercase',
                                        borderColor: 'transparent',
                                    }}>Kirim</Button>
                            </ContactForm>
                        </div>
                    </div>
                </div>
                <Content>
                    <H3 margin="74px 0 0 0">Marketing Gallery</H3>
                    <P margin="23px 0 11px 0">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
                    <P> T: <A style={{marginRight:"10px"}} href="tel:02139712888">(021) 3971-2888</A> E: <A href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</A></P>
                </Content>
            </>
        )
    }
}

export default ContactUs

const P = styled.p(
    props => ({
    color: '#000000',
    fontStyle: 'normal',
    fontWeighteight: 'normal',
    fontSize: "16px",
    lineHeight: "18px",
    textAlign: 'center',
    margin: props.margin,
    '&:hover': {
        
    }
}))
const A = styled.a({
    textDecoration: 'none',
    color:"#000",
    transition: "color .3s",
    "&:hover":{
        textDecoration: "none",
        color:"#CC9980 !important"
    }
})

const H1 = styled.h1(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:"26px",
        color: "#12284C",
        textAlign:"center",
        textTransform: "capitalize",
    })
)
const H3 = styled.h3`
    text-align: center;
    font-weight: bold;
    color: #000000;
`;
const Content = styled.div`
    margin-top:59px;
    margin-bottom:150px;
`;