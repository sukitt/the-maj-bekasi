import React from 'react'
import Base from './Base'
import Img1 from '../assets/tentangkami-image/1.svg'

const MoreTentangKami = () => {
    return (
        <div style={{border: '1px solid'}} clas>
            <h1 style={{
                fontFamily: 'Khula',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 34,
                lineHeight: '41px',
                color: '#232323'
            }} className="text-center">Tentang Kami</h1>
            <Base
                containerStyle={{marginTop: 144}}
                bgimage={Img1}
            >
                <p style={{...p}}>The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.</p>
                <p style={p}>
                    Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: 
                    <ul style={{marginTop: 20}}>
                        <li>-kolam renang ukuran olimpiade</li>
                        <li>-tempat bersantai di puncak gedung (sky lounge),</li>
                        <li>-area kerja bersama (co-working space), </li>
                        <li>-lobby yang megah dan luas,</li>
                        <li>-pusat kebugaran</li>
                        <li>-halte khusus transportasi online.</li>
                    </ul>
                </p>
            </Base>
            <Base
                containerStyle={{marginTop: 139}}
                bgimage={Img1}
                reversed
            >
                <p style={p}>
                    Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit.
                    Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian 
                    baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. 
                </p>
                <p style={p}>
                    Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi Barat pilihan investasi favorit 
                    kaum millennial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan  harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan.
                </p>
            </Base>
        </div>
    )
}

const p = {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '21px',
    color: '#000000'
}

export default MoreTentangKami
