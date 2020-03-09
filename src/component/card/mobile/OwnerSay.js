import React from 'react'
import { Row, Col } from 'react-bootstrap'
import BaseOwner from './BaseOwner'
import Img1 from '../../assets/tentangkami-image/2.png'
import Img from '../../assets/tentangkami-image/1.png'
import styled from 'styled-components'

const MobileOwnerSay = props => {
  return(
    <div>
        <BaseOwner
            containerStyle={{padding:"50px 20px"}}
            text={<GitaSaid />}
            img={Img}
            avatar={Img1}
            name="Gita Wirjawan"
            company="The Maj Group"
        />

        <BaseOwner
            containerStyle={{padding: "40px 20px"}}
            text={<TakaSaid />}
            img={Img}
            avatar={Img1}
            name="Takahiro Ando"
            company="International Business Leopalace 21 Corporation"
        />
    </div>
  )
}

const GitaSaid = () => (
    <>
        Indonesia tidak pernah kekurangan talenta muda dengan ide-ide hebat dan naluri kreatif. Tantangan terbesar saat ini adalah untuk memastikan bahwa mereka memiliki akses ke hal mendasar yang membantu mereka mewujudkan ide-ide besar tersebut. <br/><br/>

        The MAJ Residence Bekasi Barat dirancang dengan tujuan membuat hunian berkualitas yang dapat diakses oleh lebih banyak orang, terutama generasi milenial. Namun tak kalah pentingnya dengan harga yang kompetitif adalah menghadirkan hunian yang sarat dengan sense of community di mana mereka dapat menemukan makna.<br/><br/>

        There is no place like home. Membangun tempat tinggal yang sesuai dengan kebutuhan generasi muda adalah langkah awal kita bersama-sama memajukan bangsa melalui sumber daya manusia yang berdaya saing.
    </>
)

const TakaSaid = () => (
    <>
        The MAJ Residence Bekasi Barat merupakan sebuah proyek kolaborasi antara Indonesia dan Jepang. <br/><br/>

        Kami bertujuan menghadirkan desain, perencanaan, dan manajemen pembangunan yang teliti dan berkualitas di gedung apartemen kami tanpa melupakan aspek detail, budaya, dan keseharian di Indonesia. <br/> <br/>

        Kami ingin The MAJ Residence Bekasi Barat menjadi mitra terpercaya penduduk global dalam mewujudkan mimpi mereka memiliki hunian dengan kualitas hidup terbaik di Indonesia.
    </>
)

export default MobileOwnerSay