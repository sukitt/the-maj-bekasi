import React, { Component, createRef } from 'react'
import Base from './Base'

import {Header, AboutCard, Vision, MobileLogoDisplay} from '../component/base/TentangKami/'

import LogoSlider from '../component/slider/LogoSlider'

import bgHeader from '../component/assets/tentangkami-image/header.png'
import bgProfile from '../component/assets/tentangkami-image/profile.png'


import { layoutGenerator } from 'react-break'
import ScrollToTopOnMount from '../services/ScrollToTopOnMount'
import { OnDesktop, OnMobileAndTablet } from '../constants'
import LoaderSpinner from '../component/base/loader/LoaderSpinner'

// DUMMY DATA
const visionText = [
    {
        text:"<p>Indonesia tidak pernah kekurangan talenta muda dengan ide-ide hebat dan naluri kreatif. Tantangan terbesar saat ini adalah untuk memastikan bahwa mereka memiliki akses ke hal mendasar yang membantu mereka mewujudkan ide-ide besar tersebut.</p><p>The MAJ Residence Bekasi Barat dirancang dengan tujuan membuat hunian berkualitas yang dapat diakses oleh lebih banyak orang, terutama generasi milenial. Namun tak kalah pentingnya dengan harga yang kompetitif adalah menghadirkan hunian yang sarat dengan sense of community di mana mereka dapat menemukan makna.</p><p>There is no place like home. Membangun tempat tinggal yang sesuai dengan kebutuhan generasi muda adalah langkah awal kita bersama-sama mem</p><br/><br/><br/>Gita Wirjawan<br/><b>THE MAJ GROUP</b>",
        image:bgProfile
    },
    {
        text:"<p>The MAJ Residence Bekasi Barat merupakan sebuah proyek kolaborasi antara Indonesia dan Jepang.</p><p>Kami bertujuan menghadirkan desain, perencanaan, dan manajemen pembangunan yang teliti dan berkualitas di gedung apartemen kami tanpa melupakan aspek detail, budaya, dan keseharian di Indonesia.</p><p>Kami ingin The MAJ Residence Bekasi Barat menjadi mitra terpercaya penduduk global dalam mewujudkan mimpi mereka memiliki hunian dengan kualitas hidup terbaik di Indonesia.</p><br/><br/><br/>Takahiro Ando<br/><b>Leopalace 21</b>",
        image:bgProfile
    }
]


class TentangKami extends Base {
    render() {
        if (window.pageYOffset !== 0) {
            return (
                <>
                <LoaderSpinner />
                <ScrollToTopOnMount />
                </>
            )  
        }

        return ( 
            <div>
                <section>
                    <OnDesktop>
                        <div className="container">
                            <Header 
                                bg={bgHeader}
                            />
                        </div>
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <div className="w-100">
                            <Header 
                                bg={bgHeader}
                            />
                        </div>
                    </OnMobileAndTablet>
                </section>

                <section>
                    <div className="container">
                        <AboutCard 
                            text="The MAJ Residences Bekasi Barat adalah apartemen kualitas Jepang dengan harga yang sangat kompetitif.  Fasilitas yang beragam dan dirancang untuk memanjakan penghuni di antaranya: kolam renang ukuran olimpiade, tempat bersantai di puncak gedung (sky lounge), area kerja bersama (co-working space), lobby yang megah dan luas, pusat kebugaran dan halte khusus transportasi online. Pembangunan apartemen akan dilakukan dalam 2 tahap: tahap pertama akan dibangun 1668 unit. Selain lokasi yang strategis, Bekasi menjadi primadona saat ini untuk kepemilikan hunian baru karena faktor ketersediaan lahan dan biaya hidup yang lebih memadai. Dengan harga yang tak tertandingi, menjadikan The MAJ Residence Bekasi Barat pilihan investasi favorit kaum millennial untuk tinggal. Keuntungan nilai jual masa depan (capital gain) dan keuntungan harga sewa (rental yield) juga dapat diprediksikan akan meningkat signifikan."
                        />
                    </div>
                </section>

                <section>
                    <Vision
                        store={visionText}
                    />
                </section>

                <section>
                    <OnDesktop>
                        <div className="w-100">
                            <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
                        </div>
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <div className="container">
                            <MobileLogoDisplay />
                        </div>
                    </OnMobileAndTablet>
                </section>
            </div>
        )
    }
}

export default TentangKami
