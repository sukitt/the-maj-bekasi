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
    <div style={{
      marginTop: "123px",
      display: 'flex',
  }}>
        <div style={{
            margin: '28px auto 0 auto',
        }}>
            <H4>Hubungi Kami</H4>
            <p style={{
                maxWidth: 598,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 16,
                color: '#000000',
                textAlign: 'center'
            }}>
                Terima kasih atas minat Anda terhadap The MAJ Residence Bekasi Barat.
                Silahkan isi detail Anda di bawah, dan kami akan segera menghubungi Anda.
            </p>   
            
            <div style={{marginTop: 61}}>
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
                            fontSize: 13,
                            marginTop: 5,
                            letterSpacing: 2,
                            textTransform: 'uppercase',
                            borderColor: 'transparent',
                        }}>Kirim</Button>
                </MobileContactForm>
            </div>

            <h2 style={{
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: "100%",
                color: '#000000',
                marginTop: 74,
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>Marketing Gallery</h2>

            <OnMobile>
                <P margin="8% auto 5% auto" width="60%" fontSize="90%">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
                <P margin="5% auto" fontSize="90%">T: <A href="tel:02139712888">(021) 3971-2888</A></P> 
                <P margin="5% 0 0 0" fontSize="90%">E: <A href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</A></P>
            </OnMobile>

            <OnTablet>
                <P margin="8% auto 5% auto" width="50%" fontSize="150%">Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</P>
                <P margin="5% auto" fontSize="150%">T: <A href="tel:02139712888">(021) 3971-2888</A></P> 
                <P margin="5% auto" fontSize="150%">E: <A href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</A></P>
            </OnTablet>
        </div>
  </div>
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

const P = styled.p(
    props => ({
    border: '1px solid',
    fontStyle: 'normal',
    fontSize: props.fontSize,
    fontWeight: 'normal',
    margin: props.margin,
    padding: props.padding,
    textAlign: 'center',
    color: '#000000',
    width: props.width,
    textJustify: 'center',
    '&:hover': {
        
    }
}))
const A = styled.a({
  textDecoration: 'none',
  color:"#000",
  "&:hover":{
      color:"#0366d6"
  }
})

const H4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;
export default MobileContactUs