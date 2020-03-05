import React from 'react'
import Base from './Base'
import Img1 from '../assets/tentangkami-image/2.png'
import Img from '../assets/tentangkami-image/1.png'
import styled from 'styled-components'

const OwnerSay = () => {
  return(
    <div style={{padding:"250px 0px", backgroundColor:"#e9e9e9" }}>
      <div className="container">
        <Base
          containerStyle={{ marginTop: 136 }}
          bgimage={Img1}
          imgWidth="500px"
          imgHeight="500px"
          owner={
            <ProfileContainer>
              <ProfileImage src={Img} alt="Gita Wirjawan" />
              <ProfileContainerChilds>
                <Names>
                  Gita Wirjawan
                </Names>
                <Companies>
                  The Maj Group
                </Companies>
              </ProfileContainerChilds>
            </ProfileContainer>
          }
          alignCenter="auto"
        >
          <p style={{ ...p }}>
            Indonesia tidak pernah kekurangan talenta muda dengan ide-ide hebat dan naluri kreatif. Tantangan terbesar saat ini adalah untuk memastikan bahwa mereka memiliki akses ke hal mendasar yang membantu mereka mewujudkan ide-ide besar tersebut. The MAJ Residence Bekasi Barat dirancang dengan tujuan membuat hunian berkualitas yang dapat diakses oleh lebih banyak orang, terutama generasi milenial. Namun tak kalah pentingnya dengan harga yang kompetitif adalah menghadirkan hunian yang sarat dengan sense of community di mana mereka dapat menemukan makna. There is no place like home. Membangun tempat tinggal yang sesuai dengan kebutuhan generasi muda adalah langkah awal kita bersama-sama mem
          </p>
        </Base>
        <Base
          containerStyle={{ marginTop: 139 }}
          bgimage={Img1}
          imgWidth="500px"
          imgHeight="500px"
          alignCenter="auto"
          owner={
            <ProfileContainer>
              <ProfileImage src={Img} alt="Gita Wirjawan" />
              <ProfileContainerChilds>
                <Names>
                  Gita Wirjawan
                </Names>
                <Companies>
                  The Maj Group
                </Companies>
              </ProfileContainerChilds>
            </ProfileContainer>
          }
          reversed
        >
          <p style={{ ...p }}>
            The MAJ Residence Bekasi Barat merupakan sebuah proyek kolaborasi antara Indonesia dan Jepang. Kami bertujuan menghadirkan desain, perencanaan, dan manajemen pembangunan yang teliti dan berkualitas di gedung apartemen kami tanpa melupakan aspek detail, budaya, dan keseharian di Indonesia. Kami ingin The MAJ Residence Bekasi Barat menjadi mitra terpercaya penduduk global dalam mewujudkan mimpi mereka memiliki hunian dengan kualitas hidup terbaik di Indonesia.
          </p>
        </Base>
      </div>
    </div>
  )
}

const ProfileImage = styled.img`
  box-shadow: 0px 20px 60px rgba(138, 149, 158, 0.2);
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

const ProfileContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
`;

const Names = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 0;
  line-height: 21px;
  color: #000000;
`;

const Companies = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #000000;
`

const ProfileContainerChilds = styled.div`
  align-self: center;
  margin-left: 10px;
`;

const p = {
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "21px",
}

export default OwnerSay