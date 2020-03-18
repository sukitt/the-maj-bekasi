import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'

const TentangKami = props => {
    return (
        <div style={{marginTop: "76px"}}>
            <Card style={{borderRadius:"0", border:"none"}}>
                <Card.Body style={{width:"100%", height:"400px", padding:"0px 80px"}}>
                    <h2 style={{
                            marginTop:"60px",
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: "22px",
                            textAlign: 'center',
                            color: '#232323'
                        }}>Tentang Kami</h2>
                    <p style={{
                        margin:"50px 0px",
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: "16px",
                        lineHeight:"21px",
                        textAlign: 'justify',
                        color: '#000000'
                    }}>
                        The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online.
                    </p>
                    <Col className="text-center">
                        <Link to="/tentang-kami" style={{
                            fontFamily: 'Verlag Bold',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: 11,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#CC9980',
                            paddingBottom:"14px",
                            textDecoration: 'none',
                            borderBottom: '1px solid',
                            borderBottomColor: '#CC9980'
                        }}>Read More</Link>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TentangKami
