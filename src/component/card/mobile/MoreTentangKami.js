import React from 'react'
import styled from 'styled-components'
import BaseTentangKami from '../BaseTentangKami'
import Img1 from '../../assets/tentangkami-image/1.png'

const MobileMoreTentangKami = () => {
    return (
        <div style={{margin: "35px 0 0 0", padding: "0 10px 85px 10px"}}>
            <div style={{padding: "0 20px 0 20px"}}>
                <Caps1 className="text-center">Tentang Kami</Caps1>
                <P margin="30px 0 0 0" textAlign="justify">
                    The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online.
                </P>
                <P margin="30px 0 0 0" textAlign="justify">
                    Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit.
                </P>
            </div>

            <div style={{textAlign:"center", width: "100%", height: "211px", margin: "50px 0"}}>
                <img style={{margin:"0 auto", width:"inherit", height:"inherit"}} src={Img1} alt="Our Company" />
            </div>

            <div style={{padding: "0 20px 0 20px"}}>
                <P textAlign="justify">
                    Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. 
                </P>
                <P margin="30px 0 0 0" textAlign="justify">
                    Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi Barat pilihan investasi favorit kaum millennial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan.
                </P>
            </div>
        </div>
    )
}

export default MobileMoreTentangKami


const Caps1 = styled.h5(
    props => ({
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "16px",
        textTransform: "uppercase",
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)

const P = styled.p(
    props => ({
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "18px",
        textAlign: props.textAlign,
        color: "#000000",
        margin: props.margin,
        padding: props.padding,
    })
)
