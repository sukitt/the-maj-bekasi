import React from 'react'
import MobileContactForm from '../form/MobileContactForm'
import { layoutGenerator } from 'react-break'
import { Button } from 'react-bootstrap'
import '../assets/css/style.css'
import styled from 'styled-components'

const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768
});

const OnMobile = layout.isAtMost('phablet');
const OnTablet = layout.is('tablet');

const MobileContactUs = (props) => {
  return(
    <Container>
        <h1 className="text-center">Hubungi Kami</h1>
        <P margin="19px 16px 0 16px" height="72px">
            Kami siap menjawab semua pertanyaanmu. Isi detail di bawah ini agar kami dapat menghubungimu atau kunjungi langsung Marketing Gallery kami.
        </P>   
        
        <div style={{marginTop: "17px"}}>
            <MobileContactForm 
                {...props}
                storeGelar={Gelar}
                storeUnit={Unit}
            >
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
            <P margin="8px auto" fontSize="90%">T: <A href="tel:02139712888">(021) 3971-2888</A></P> 
            <P margin="8px auto" fontSize="90%">E: <A href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</A></P>
        </OnMobile>

        <OnTablet>
            <P margin="20px auto 5% auto" width="50%" fontSize="150%">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
            <P margin="5% auto" fontSize="150%">T: <A href="tel:02139712888">(021) 3971-2888</A></P> 
            <P margin="5% auto" fontSize="150%">E: <A href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</A></P>
        </OnTablet>
    </Container>
  )
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
  },{
      id: 2,
      nama: 'Ibu.'
  }
]

const Container = styled.div(
    props => ({
        margin: "97px 50px",
    })
)

const P = styled.p(
    props => ({
        fontStyle: 'normal',
        fontSize: "13px",
        fontWeight: 'normal',
        width: props.width,
        height: props.height,
        margin: props.margin,
        padding: props.padding,
        textAlign: 'center',
        color: '#000000',
        lineHeight: "18px",
        textAlign: "center"
}))

const A = styled.a({
  textDecoration: 'none',
  color:"#000",
  "&:hover":{
      color:"#0366d6"
  }
})

const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textAlign: "center",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)
export default MobileContactUs