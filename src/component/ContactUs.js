import React from 'react'
import ContactForm from './form/ContactForm'
import { Button } from 'react-bootstrap'

const ContactUs = (props) =>{
    return (
        <div style={{
            width: 980,
            height: 578,
            marginTop: 123,
            display: 'flex',
        }}>
            <div style={{
                width: 606,
                height: 550,
                margin: '28px auto',
            }}>
                <h2 style={{
                    fontFamily: 'Khula',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 22,
                    textTransform: 'uppercase',
                    color: '#CC9980',
                    textAlign: 'center'
                }}>Hubungi Kami</h2>
                <p style={{
                    width: 598,
                    fontFamily: 'Nunito Sans',
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
                    <ContactForm 
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
                                backgroundColor: '#CC9980',
                                fontFamily: 'Source Sans Pro',
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

                <h2 style={{
                    fontFamily: 'Khula',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: '#000000',
                    marginTop: 74,
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}>Marketing Gallery</h2>
                <p style={p}>Jl. Kemakmuran, Marga Jaya, Bekasi Selatan, Kota Bekasi, Jawa Barat 17141</p>
                <p style={p}> T: <a style={{textDecoration: 'none'}} href="tel:02139712888">(021) 3971-2888</a> E: <a style={{textDecoration: 'none'}} href="mailto:sales@themajbekasi.com">sales@themajbekasi.com</a></p>
            </div>
        </div>
    )
}

export default ContactUs

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

const p = {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeighteight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
}