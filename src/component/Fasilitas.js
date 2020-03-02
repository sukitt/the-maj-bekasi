import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Img1 from '../assets/fasilitas/zenGarden.svg'
import Img2 from '../assets/fasilitas/2.svg'
import Img3 from '../assets/fasilitas/3.svg'
import Img4 from '../assets/fasilitas/4.svg'
import Img5 from '../assets/fasilitas/5.svg'
import Img6 from '../assets/fasilitas/6.svg'
import Img7 from '../assets/fasilitas/7.svg'
import Img8 from '../assets/fasilitas/8.svg'
import Img9 from '../assets/fasilitas/9.svg'
import Img10 from '../assets/fasilitas/10.svg'
import Img11 from '../assets/fasilitas/11.svg'
import Img12 from '../assets/fasilitas/12.svg'
import Img13 from '../assets/fasilitas/13.svg'
import Img14 from '../assets/fasilitas/14.svg'
import Img15 from '../assets/fasilitas/15.svg'


const Data = [
    { id: 1, img: Img1, caption: 'Zen Garden' },
    { id: 2, img: Img2, caption: 'Ridesharing Shelter' },
    { id: 3, img: Img3, caption: 'Co-working Space' },
    { id: 4, img: Img4, caption: 'Parcel Lockers' },
    { id: 5, img: Img5, caption: 'Storage Room' },
    { id: 6, img: Img6, caption: 'Game Room' },
    { id: 7, img: Img7, caption: 'Olympic-size Swimming Pool' },
    { id: 8, img: Img8, caption: 'One-stop Logistic Centers' },
    { id: 9, img: Img9, caption: 'Sky Lounge' },
    { id: 10, img: Img10, caption: 'O2O Kiosks' },
    { id: 11, img: Img11, caption: 'Gym' },
    { id: 12, img: Img12, caption: 'Smart Access' },
    { id: 13, img: Img13, caption: 'Outdoor Communal Space' },
    { id: 14, img: Img14, caption: 'Jogging Track' },
    { id: 15, img: Img15, caption: 'Security' }


]

const Fasilitas = (props) => {
    return (
        <div style={{
            marginTop: 98,
            // width: 936,
            // height: 312
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid'
        }}>
            <h2 style={{
               fontFamily: 'Khula',
               fontStyle: 'normal',
               fontWeight: 'bold',
               fontSize: 22,
               textTransform: 'uppercase'
            }}>fasilitas</h2>
            <p style={{
                fontFamily: 'Nunito Sans',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 12,
                // lineHeight: 18,
                letterSpacing: 2,
                textTransform: 'uppercase'
            }}>
                Fasilitas yang lengkap dan modern
                membantumu memulai langkah pertama
                menggapai anganmu.
            </p>
            <div style={{
                marginTop: 34
            }}>
                <Row>
                    {Data.map((d, i) => {
                        if (d.id < 6) return (
                                <Col key={d.id}>
                                    <img src={d.img} style={{width: '40px'}} alt={d.caption.replace(" ", "-")} />
                                    <span style={span}>{d.caption}</span>
                                </Col>
                        )
                    })}
                </Row>
                <Row>
                    {Data.map((d, id) => {
                        if (d.id >= 6 && d.id < 11) {
                            return (
                                <Col>
                                    <img src={d.img} style={{width: '40px'}} alt={d.caption.replace(" ", "-")} />
                                    <span style={span}>{d.caption}</span>
                                </Col>
                            )
                        }
                    })}
                </Row>
                <Row>
                    {Data.map((d, id) => {
                        if (d.id >= 11 && d.id < 16) {
                            return (
                                <Col>
                                    <img src={d.img} style={{width: '40px'}} alt={d.caption.replace(" ", "-")} />
                                    <span style={span}>{d.caption}</span>
                                </Col>
                            )
                        }
                    })}
                </Row>
            </div>

        </div>
    )
}

const span = {
    color: '#000000',
    marginLeft: 10, 
    textTransform: 'uppercase', 
    maxWidth: '5px', 
    overFlow: 'hidden', 
    whiteSpace: 'wrap', 
    height: 26, 
    width: 80
}

export default Fasilitas
