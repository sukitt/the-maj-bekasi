import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'

class TentangKami extends Component {
    render() {
        return (
            <div ref={this.props.tentangKamiRef} style={{marginTop: "76px"}}>
                <Card style={{borderRadius:"0", border:"none"}}>
                    <Card.Body style={{width:"100%", height:"400px", padding:"0px 80px"}}>
                        <h1 className="text-center pb-4" style={{marginTop: "29px"}}>Visi Kami</h1>
                        <p className="text-justify" style={{fontSize: "16px !important", marginTop: "50px"}}>
                            The MAJ Residences Bekasi adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online.
                        </p>
                        <Col className="text-center" style={{marginTop: "55px"}}>
                            <ButtonLink to="/tentang-kami">Selengkapnya</ButtonLink>
                        </Col>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const ButtonLink = props => {
    const history = useHistory()
    const _handleClick = () => (
        history.push("/tentang-kami")
    )
    return (
        <Link style={{
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
        }} to={props.to} onClick={_handleClick}> 
            {props.children}
        </Link>
)}

export default TentangKami
