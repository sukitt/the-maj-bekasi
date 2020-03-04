import React from 'react'
import Base from './Base'
import Img1 from '../assets/partnership-image/1.svg'

const Sakura = () => {
    return (
        <>
            <Base
                containerStyle={{marginTop: 136}}
                bgimage={Img1}
            >
                <p style={{...p, width: 443}}>
                    Peran manajemen konstruksi (MK) adalah memastikan
                    kelayakan proyek secara fungsional, finansial, dan 
                    memastikan proyek berjalan lancar sesuai biaya, mutu, dan 
                    waktu yang ditetapkan. MK bertanggung jawab untuk setiap 
                    tahap konstruksi, bekerja sama dengan tim desain, 
                    mengawasi pekerjaan mereka dan menemukan cara untuk 
                    meningkatkan nilai proyek dan menjaga biaya tetap 
                    terkendali.
                </p>
            </Base>
            <Base
                containerStyle={{marginTop: 139}}
                bgimage={Img1}
                reversed
            >
                <p style={{...p, width: 474}}>
                    MK menjamin transparansi yang lebih tinggi, karena mereka
                    memberikan perkiraan anggaran waktu kepada tim proyek di awal
                    selama proses desain dan pembangunan, meminimalkan resiko, 
                    dan memungkinkan penyesuaian selama pembangunan. MK 
                    memberikan tingkat keamanan dan kenyamanan bagi penghuni, 
                    pengelola gedung, dan pengembang.
                </p>
            </Base>
        </>
    )
}

const p = {
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '21px',
    color: '#000000',
}

export default Sakura
