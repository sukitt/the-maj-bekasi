import React from 'react'

const TentangKami = props => {
    return (
        <div style={{marginTop: 206}}>
            <div style={{width: 920, height: 253}}>
                <h2 style={{
                        fontFamily: 'Barlow Condensed',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        color: '#CC9980'
                    }}>Tentang Kami</h2>
                <p style={{
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 16,
                    textAlign: 'justify',
                    color: '#000000'
                }}>
                    The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online.
                </p>
                <a href="#linkto" style={{
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: '#CC9980',
                    textDecoration: 'none',
                    borderBottom: '1px solid',
                    borderBottomColor: '#CC9980'
                }}>Read More</a>
            </div>
        </div>
    )
}

export default TentangKami
