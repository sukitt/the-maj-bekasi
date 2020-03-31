import React, { Component, createRef } from 'react'
import Base from './Base'

import {Header, AboutCard, Vision, MobileLogoDisplay} from '../component/base/TentangKami/'

import LogoSlider from '../component/slider/LogoSlider'

import bgHeader from '../component/assets/tentangkami-image/header.png'
import bgProfile from '../component/assets/tentangkami-image/profile.png'
import Card1 from '../component/base/TentangKami/assets/card-loader1.svg'
import Card2 from '../component/base/TentangKami/assets/card-loader2.svg'


import { layoutGenerator } from 'react-break'
import ScrollToTopOnMount from '../services/ScrollToTopOnMount'
import { OnDesktop, OnMobileAndTablet } from '../constants'
import LoaderSpinner from '../component/base/loader/LoaderSpinner'
import { SliderPlaceholder } from '../component/base/loader/ImagePlaceholder'

// DUMMY DATA
const visionText = [
    {
        text:"Indonesia tidak pernah kekurangan talenta muda dengan ide-ide hebat dan naluri kreatif. Tantangan terbesar saat ini adalah untuk memastikan bahwa mereka memiliki akses ke hal mendasar yang membantu mereka mewujudkan ide-ide besar tersebut.The MAJ Residence Bekasi Barat dirancang dengan tujuan membuat hunian berkualitas yang dapat diakses oleh lebih banyak orang, terutama generasi milenial. Namun tak kalah pentingnya dengan harga yang kompetitif adalah menghadirkan hunian yang sarat dengan sense of community di mana mereka dapat menemukan makna.There is no place like home. Membangun tempat tinggal yang sesuai dengan kebutuhan generasi muda adalah langkah awal kita bersama-sama mem",
        image:bgProfile
    },
    {
        text:"The MAJ Residence Bekasi Barat merupakan sebuah proyek kolaborasi antara Indonesia dan Jepang.Kami bertujuan menghadirkan desain, perencanaan, dan manajemen pembangunan yang teliti dan berkualitas di gedung apartemen kami tanpa melupakan aspek detail, budaya, dan keseharian di Indonesia.Kami ingin The MAJ Residence Bekasi Barat menjadi mitra terpercaya penduduk global dalam mewujudkan mimpi mereka memiliki hunian dengan kualitas hidup terbaik di Indonesia.",
        image:bgProfile
    }
]


class TentangKami extends Base {
    render() {
        if (window.pageYOffset !== 0) {
            return (
                <>
                {/* <LoaderSpinner /> */}
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
                            store={this.state.abouts}
                        />
                    </div>
                </section>

                <section>
                    {
                        !this.state.abouts.length? (
                            <div className="d-flex flex-column justify-content-center">
                                <div>
                                    <SliderPlaceholder src={Card1} width="920px" height="392.67px" opacity="0.6" />
                                </div>
                                <div>
                                    <SliderPlaceholder src={Card1} width="920px" height="392.67px" opacity="0.6" />
                                </div>
                            </div>
                        ) : this.state.abouts.map((data,d) => {
                            return(
                                <>
                                    <Vision
                                        key={d}
                                        store={data.visions}
                                    />
                                </>
                            )
                        })
                    }
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
