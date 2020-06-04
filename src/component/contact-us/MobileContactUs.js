import React, { Component } from 'react'
import MobileContactForm from '../form/MobileContactForm'
import { layoutGenerator } from 'react-break'
import { Button, Alert } from 'react-bootstrap'
import '../assets/css/style.css'
import styled from 'styled-components'

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768
});

const OnMobile = layout.isAtMost('phablet');
const OnTablet = layout.is('tablet');

class MobileContactUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
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
    render() {

        return (
            <Container id={this.props.id}>
                <h1 className="text-center">Hubungi Kami</h1>
                <P margin="19px auto 19px auto" height="auto" style={{ maxWidth: "310px" }}>
                    Kami siap menjawab semua pertanyaanmu. Isi detail di bawah ini agar kami dapat menghubungimu atau kunjungi langsung Marketing Gallery kami.
              </P>
                {this.state.show ? (
                    <>
                        <Alert variant="success" onClose={this.handleClose} dismissible>
                            <Alert.Heading>Terima Kasih!</Alert.Heading>
                            <p>
                                Kami akan segera menghubungi anda melalui alamat email yang anda sediakan.
                                </p>
                        </Alert>
                    </>
                ) : (
                        <></>
                    )}

                <div style={{ marginTop: "17px" }}>
                    <MobileContactForm
                        {...this.props}
                        storeGelar={Gelar}
                        storeUnit={Unit}
                    >
                        <Button
                            type="submit"
                            style={{
                                margin: '0 auto',
                                width: 180,
                                height: 40,
                                borderRadius: "0",
                                backgroundColor: '#CC9980',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontSize: "13px",
                                lineHeight: "18px",
                                marginTop: "18px",
                                letterSpacing: "2px",
                                textTransform: 'uppercase',
                                borderColor: 'transparent',
                            }}>Kirim</Button>
                    </MobileContactForm>
                </div>

                <p style={{
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: "12px",
                    color: '#232323',
                    marginTop: "43px",
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>Marketing Gallery</p>

                <OnMobile>
                    <P width="180px" margin="20px auto 8px auto" fontSize="13px">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
                    <P margin="8px auto" fontSize="90%">T: <A href="tel:02139712888">(021) 3971-2888</A> / <A href="tel:02189469999">021-8946-9999</A></P>
                    <P margin="8px auto" fontSize="90%">E: <A href="mailto:sales.bekasi@themajgroup.com">sales.bekasi@themajgroup.com</A></P>
                </OnMobile>

                <OnTablet>
                    <P margin="20px auto 5% auto" width="50%" fontSize="150%">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
                    <P margin="5% auto" fontSize="150%">T: <A href="tel:02139712888">(021) 3971-2888</A> / <A href="tel:02189469999">021-8946-9999</A></P>
                    <P margin="5% auto" fontSize="150%">E: <A href="mailto:sales.bekasi@themajgroup.com">sales.bekasi@themajgroup.com</A></P>
                </OnTablet>
            </Container>
        )
    }
}
const Unit = [
    {
        nama: 'Studio A',
    },
    {
        nama: 'Studio B',
    },
    {
        nama: '2 Bathroom C',
    },
    {
        nama: '2 Bathroom D',
    }
]

const Gelar = [
    {
        id: 1,
        nama: 'Bapak.',
    }, {
        id: 2,
        nama: 'Ibu.'
    }
]

const Container = styled.div(
    props => ({
        margin: "97px 35px",
    })
)

const P = styled.p(
    props => ({
        fontStyle: 'normal',
        fontSize: "14px",
        fontWeight: 'normal',
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        textAlign: 'center',
        color: '#000000',
        lineHeight: "21px",
    }))

const A = styled.a({
    textDecoration: 'none',
    color: "#000",
    "&:hover": {
        color: "#0366d6"
    }
})
export default MobileContactUs