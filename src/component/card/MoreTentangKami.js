import React from 'react'
import BaseTentangKami from './BaseTentangKami'
import Img1 from '../assets/tentangkami-image/1.png'

const MoreTentangKami = () => {
    return (
        <div style={{margin: "225px 0px"}}>
            <h1 style={{
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 34,
                lineHeight: '41px',
                color: '#232323'
            }} className="text-center">Tentang Kami</h1>
            <BaseTentangKami
                containerStyle={{marginTop: 40}}
                contentString="Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit. Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi Barat pilihan investasi favorit kaum millennial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan."
            />
            <div style={{textAlign:"center"}}>
            <img style={{margin:"70px auto", maxWidth:"800px", width:"100%"}} src={Img1} alt="Our Company" />
            </div>
            <BaseTentangKami
                containerStyle={{marginTop: 40}}
                contentString="Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit. Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi Barat pilihan investasi favorit kaum millennial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan."
            />
        </div>
    )
}

export default MoreTentangKami
